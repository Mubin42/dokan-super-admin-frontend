'use client';
import DeleteSuperAdminAlert from '@/components/end-component/alert-dialogs/DeleteSuperAdminAlert';
import { AddButton } from '@/components/end-component/buttons';
import ThreeDotsButton from '@/components/end-component/buttons/ThreeDotsButton';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import { CustomTable, TableTitle } from '@/components/sections/table';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetAllSuperAdminsQuery } from '@/store/services/superAdminApi';
import { refresh, updateTable } from '@/store/slices/tableSlice';
import { File, ListFilter, PlusCircle } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';

type SuperAdminsPageProps = {};

const SuperAdminsPage: FC<SuperAdminsPageProps> = ({}) => {
	// api
	const { page, limit, search, sort } = useAppSelector((state) => state.table);

	const { data, isLoading } = useGetAllSuperAdminsQuery({
		sort,
		page,
		limit,
		search,
	});
	// hooks
	const dispatch = useAppDispatch();

	// states

	// variables

	// styles

	// functions
	const handleSort = (val: string) => {
		const sortVal: string = sort == val ? `-${val}` : val;
		dispatch(updateTable({ sort: sortVal, page: 1 }));
	};

	// effects
	useEffect(() => {
		dispatch(refresh());
	}, [dispatch]);

	// components
	const head = (
		<>
			<TableTitle val='name' onClick={() => handleSort('name')}>
				Name
			</TableTitle>
			<TableTitle val='email' className='hidden sm:table-cell' onClick={() => handleSort('email')}>
				Email
			</TableTitle>
			<TableTitle val='phone' className='hidden sm:table-cell' onClick={() => handleSort('phone')}>
				Phone
			</TableTitle>
			<TableTitle val='role' onClick={() => handleSort('role')} className='hidden sm:table-cell'>
				Role
			</TableTitle>
			<TableTitle val='isActive' onClick={() => handleSort('isActive')}>
				IsActive
			</TableTitle>
			<TableTitle
				className='hidden sm:table-cell'
				val='createdAt'
				onClick={() => handleSort('createdAt')}
			>
				Created At
			</TableTitle>
			<TableCell>Actions</TableCell>
		</>
	);

	const body = data?.doc?.map((item: any, index: number) => (
		<TableRow key={index}>
			<TableCell>
				<div className='font-medium'>{item?.name}</div>
			</TableCell>
			<TableCell className='hidden sm:table-cell'>{item?.email}</TableCell>
			<TableCell className='hidden sm:table-cell'>{item?.phone || 'Not Available'}</TableCell>
			<TableCell className='hidden sm:table-cell'>
				<Badge variant='outline'>{item?.role}</Badge>
			</TableCell>
			<TableCell>
				{
					<Badge className='text-xs' variant={item?.isActive ? 'default' : 'secondary'}>
						{item?.isActive ? 'Active' : 'Inactive'}
					</Badge>
				}
			</TableCell>
			<TableCell className='hidden md:table-cell'>
				{item?.createdAt && moment(item?.createdAt).calendar()}
			</TableCell>
			<TableCell>
				<AlertDialog>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<ThreeDotsButton />
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<Link href={`/super-admins/${item?._id}`}>
								<DropdownMenuItem>View Details</DropdownMenuItem>
							</Link>
							<DropdownMenuSeparator />
							<Link href={`/update/super-admin/${item?._id}`}>
								<DropdownMenuItem>Update</DropdownMenuItem>
							</Link>
							<AlertDialogTrigger className='w-full'>
								<DropdownMenuItem>Delete</DropdownMenuItem>
							</AlertDialogTrigger>
						</DropdownMenuContent>
					</DropdownMenu>
					<DeleteSuperAdminAlert data={item} />
				</AlertDialog>
			</TableCell>
		</TableRow>
	));

	const buttons = (
		<div className='ml-auto flex items-center gap-2'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' size='sm' className='h-7 gap-1'>
						<ListFilter className='h-3.5 w-3.5' />
						<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Filter by</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Button size='sm' variant='outline' className='h-7 gap-1'>
				<File className='h-3.5 w-3.5' />
				<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Export</span>
			</Button>
			<Link href='/add/super-admin'>
				<AddButton title='Add Super Admin' icon={<PlusCircle className='h-3.5 w-3.5' />} />
			</Link>
		</div>
	);

	return (
		<PageLayout currentPage='Super Admins'>
			<CustomTable
				head={head}
				data={data}
				title='Super Admins'
				buttons={buttons}
				isLoading={isLoading}
			>
				{body}
			</CustomTable>
		</PageLayout>
	);
};

export default SuperAdminsPage;

'use client';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import { CustomTable } from '@/components/sections/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetAllSuperAdminsQuery } from '@/store/services/superAdminApi';
import { refresh, updateTable } from '@/store/slices/tableSlice';
import { File, ListFilter, PlusCircle } from 'lucide-react';
import moment from 'moment';
import React, { FC, useEffect } from 'react';

type SuperAdminsPageProps = {};

const SuperAdminsPage: FC<SuperAdminsPageProps> = ({}) => {
	// api
	const { page, limit, search, sort } = useAppSelector((state) => state.table);

	const { data, isLoading, isError } = useGetAllSuperAdminsQuery({
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
			<TableHead>Name</TableHead>
			<TableHead className='hidden sm:table-cell'>Email</TableHead>
			<TableHead className='hidden sm:table-cell'>Role</TableHead>
			<TableHead className='hidden md:table-cell'>IsActive</TableHead>
			<TableHead className='text-right'>Created At</TableHead>
		</>
	);

	const body = data?.doc?.map((item: any, index: number) => (
		<TableRow key={index}>
			<TableCell>
				<div className='font-medium'>{item?.name}</div>
			</TableCell>
			<TableCell className='hidden sm:table-cell'>{item?.email}</TableCell>
			<TableCell className='hidden sm:table-cell'>
				<Badge variant='outline'>{item?.role}</Badge>
			</TableCell>
			<TableCell className='hidden sm:table-cell'>
				{
					<Badge className='text-xs' variant={item?.isActive ? 'default' : 'secondary'}>
						{item?.isActive ? 'Active' : 'Inactive'}
					</Badge>
				}
			</TableCell>
			<TableCell className='hidden text-right md:table-cell'>
				{item?.createdAt && moment(item?.createdAt).format('DD-MM-YYYY hh:mm A')}
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
			<Button size='sm' className='h-7 gap-1'>
				<PlusCircle className='h-3.5 w-3.5' />
				<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
			</Button>
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

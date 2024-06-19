'use client';
import { AddButton } from '@/components/end-component/buttons';
import ThreeDotsButton from '@/components/end-component/buttons/ThreeDotsButton';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import { CustomTable, TableTitle } from '@/components/sections/table';
import { Badge } from '@/components/ui/badge';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetAllStoreConfigQuery } from '@/store/services/storeConfigApi';
import { refresh, updateTable } from '@/store/slices/tableSlice';
import { PlusCircle } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';

import React, { FC, useEffect } from 'react';

type StoreConfigPageProps = {};

const StoreConfigPage: FC<StoreConfigPageProps> = ({}) => {
	// api
	const { page, limit, search, sort } = useAppSelector((state) => state.table);

	const { data, isLoading } = useGetAllStoreConfigQuery({
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
			<TableTitle val='apiKey' onClick={() => handleSort('apiKey')}>
				Api Key
			</TableTitle>
			<TableTitle>Store Name</TableTitle>
			<TableTitle val='isActive' onClick={() => handleSort('isActive')}>
				Active
			</TableTitle>
			<TableTitle val='createdAt' onClick={() => handleSort('createdAt')}>
				Created At
			</TableTitle>
			<TableCell>Actions</TableCell>
		</>
	);

	const body = data?.doc?.map((item: any, index: number) => (
		<TableRow key={index}>
			<TableCell>{item?.apiKey}</TableCell>
			<TableCell>{item?.store?.name ? item?.store?.name : 'Not Used'}</TableCell>
			<TableCell>
				{
					<Badge variant={item?.isActive ? 'default' : 'outline'}>
						{item?.isActive ? 'Active' : 'Inactive'}
					</Badge>
				}
			</TableCell>
			<TableCell>{item?.createdAt && moment(item?.createdAt).calendar()}</TableCell>

			<DropdownMenu>
				<DropdownMenuTrigger>
					<ThreeDotsButton />
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem>View Details</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Update</DropdownMenuItem>
					<DropdownMenuItem>Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</TableRow>
	));

	const buttons = (
		<div className='ml-auto flex items-center gap-2'>
			<Link href='/add/store-config'>
				<AddButton title='Add Store Config' />
			</Link>
		</div>
	);

	return (
		<PageLayout currentPage='Super Admins'>
			<CustomTable
				head={head}
				data={data}
				title='Store Configurations'
				buttons={buttons}
				isLoading={isLoading}
			>
				{body}
			</CustomTable>
		</PageLayout>
	);
};

export default StoreConfigPage;

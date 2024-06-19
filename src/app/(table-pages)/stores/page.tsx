'use client';
import ThreeDotsButton from '@/components/end-component/buttons/ThreeDotsButton';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import { TableTitle } from '@/components/sections/table';
import CustomTable from '@/components/sections/table/CustomTable';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetAllStoresQuery } from '@/store/services/storeApi';
import { refresh, updateTable } from '@/store/slices/tableSlice';
import moment from 'moment';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';

type StoresProps = {};

const Stores: FC<StoresProps> = ({}) => {
	// api
	const { page, limit, search, sort } = useAppSelector((state) => state.table);

	const { data, isLoading } = useGetAllStoresQuery({
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
				Store Name
			</TableTitle>
			<TableTitle val='storeType' onClick={() => handleSort('storeType')}>
				Store Type
			</TableTitle>
			<TableTitle>Email</TableTitle>
			<TableTitle>Phone</TableTitle>
			<TableTitle>Created</TableTitle>
		</>
	);

	const body = data?.doc?.map((item: any, index: string) => (
		<TableRow key={item.id}>
			<TableCell>{item?.name}</TableCell>
			<TableCell>{item?.storeType}</TableCell>
			<TableCell>{item?.contact?.email}</TableCell>
			<TableCell>{item?.contact?.phone}</TableCell>
			<TableCell>{item?.createdAt && moment(item?.createdAt).calendar()}</TableCell>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<ThreeDotsButton />
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<Link href={`/stores/${item?._id}`}>
						<DropdownMenuItem>View Details</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		</TableRow>
	));

	return (
		<PageLayout currentPage='Stores'>
			<CustomTable head={head} data={data} title='Stores' isLoading={isLoading}>
				{body}
			</CustomTable>
		</PageLayout>
	);
};

export default Stores;

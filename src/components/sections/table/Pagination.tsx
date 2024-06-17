import { SearchInput } from '@/components/end-component/inputs';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { refresh, updateTable } from '@/store/slices/tableSlice';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeft,
	ChevronsRight,
	RotateCcw,
} from 'lucide-react';
import React, { FC, useState } from 'react';

type PaginationProps = {
	data: any;
};

const Pagination: FC<PaginationProps> = ({ data }) => {
	// api

	// hooks
	const dispatch = useAppDispatch();
	const { page, limit } = useAppSelector((state) => state.table);

	// resets the table

	// states
	const [localSearch, setLocalSearch] = useState<string>('');

	// variables

	// styles

	// functions
	const onReset = () => {
		dispatch(refresh());
		setLocalSearch('');
	};

	const handleSearch = () => {
		dispatch(updateTable({ search: localSearch.trim() }));
	};

	const update = ({ setPage, setLimit }: { setPage?: number; setLimit?: number }) => {
		dispatch(updateTable({ page: setPage, limit: setLimit }));
	};

	const toStart = () => {
		update({ setPage: 1 });
	};

	const toLast = () => {
		update({ setPage: data.totalPages });
	};

	const next = () => {
		if (page < data?.totalPages) update({ setPage: page + 1 });
	};

	const back = () => {
		update({ setPage: page - 1 });
	};

	// effects

	// components
	const left = (
		<div className='flex gap-2 items-center flex-1'>
			<Button variant='outline' size='icon' onClick={onReset}>
				<RotateCcw className='h-4 w-4' />
			</Button>
			<SearchInput
				value={localSearch}
				onChange={(e) => setLocalSearch((e.target as HTMLInputElement).value)}
				handleSearch={handleSearch}
			/>
			<h1 className='font-medium text-sm'>Items: {data?.totalDocs}</h1>
		</div>
	);

	const select = (
		<Select
			value={limit.toString()}
			onValueChange={(value) => update({ setLimit: parseInt(value) })}
		>
			<SelectTrigger className='w-36'>
				<SelectValue placeholder='Show Results' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value='10'>10</SelectItem>
					<SelectItem value='20'>20</SelectItem>
					<SelectItem value='50'>50</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);

	const right = (
		<div className='flex flex-1 gap-2 items-center  justify-end'>
			{select}
			<Button variant='outline' size='icon' onClick={toStart}>
				<ChevronsLeft className='h-4 w-4' />
			</Button>
			<Button variant='outline' size='icon' onClick={back}>
				<ChevronLeftIcon className='h-4 w-4' />
			</Button>
			<h1 className='font-medium text-sm'>
				Page {page} of {data?.totalPages && data.totalPages}
			</h1>
			<Button variant='outline' size='icon' onClick={next}>
				<ChevronRightIcon className='h-4 w-4' />
			</Button>
			<Button variant='outline' size='icon' onClick={toLast}>
				<ChevronsRight className='h-4 w-4' />
			</Button>
		</div>
	);

	return (
		<div className='flex w-full justify-between'>
			{left}
			{right}
		</div>
	);
};

export default Pagination;

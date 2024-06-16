import SearchInput from '@/components/end-component/inputs/search-input/SearchInput';
import { Button } from '@/components/ui/button';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, RotateCcw } from 'lucide-react';
import React, { FC, useState } from 'react';

type PaginationProps = {};

const Pagination: FC<PaginationProps> = ({}) => {
	// api

	// hooks

	// states
	const [search, setSearch] = useState<string>('');
	const [limit, setLimit] = useState<string>('');
	const [page, setPage] = useState<number>(1);

	// variables

	// styles

	// functions

	// effects

	// components
	const left = (
		<div className='flex gap-2 items-center'>
			<Button variant='outline' size='icon'>
				<RotateCcw className='h-4 w-4' />
			</Button>
			<SearchInput
				value={search}
				onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
			/>
			<h1 className='font-medium text-sm'>Items: 10</h1>
		</div>
	);

	const select = (
		<Select value={limit} onValueChange={(value) => setLimit(value)}>
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
		<div className='flex gap-2 items-center'>
			{select}
			<Button variant='outline' size='icon'>
				<ChevronLeftIcon className='h-4 w-4' />
			</Button>
			<h1 className='font-medium text-sm'>Page {page} of 10</h1>
			<Button variant='outline' size='icon'>
				<ChevronRightIcon className='h-4 w-4' />
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

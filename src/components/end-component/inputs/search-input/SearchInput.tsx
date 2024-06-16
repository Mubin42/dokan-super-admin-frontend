import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { FC } from 'react';

type SearchInputProps = React.HTMLProps<HTMLInputElement> & {};

const SearchInput: FC<SearchInputProps> = ({ ...props }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className='relative'>
			<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
			<Input
				type='search'
				placeholder='Search...'
				className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
				{...props}
			/>
		</div>
	);
};

export default SearchInput;

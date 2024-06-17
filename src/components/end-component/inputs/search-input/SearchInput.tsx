import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React, { FC } from 'react';

type SearchInputProps = React.HTMLProps<HTMLInputElement> & {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearch?: () => void;
};

const SearchInput: FC<SearchInputProps> = ({ value, onChange, handleSearch, ...props }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className='flex w-full max-w-xs items-center space-x-2'>
			<Input placeholder='Search' value={value} onChange={onChange} {...props} />
			<Button size='icon' className='px-2' onClick={handleSearch}>
				<SearchIcon className='h-4 w-4' />
			</Button>
		</div>
	);
};

export default SearchInput;

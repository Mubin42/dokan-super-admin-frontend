import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import React, { Dispatch, FC, SetStateAction } from 'react';

type CustomSelectProps = {
	data: string | undefined;
	setData: Dispatch<SetStateAction<string | undefined>>;
	options: string[];
};

const CustomSelect: FC<CustomSelectProps> = ({ data, setData, options }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Select>
			<SelectTrigger aria-label='Select status'>
				<SelectValue placeholder='Select status' />
			</SelectTrigger>
			<SelectContent>
				{options.map((item) => (
					<SelectItem key={item} value={item} onClick={() => setData(item)}>
						{item}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default CustomSelect;

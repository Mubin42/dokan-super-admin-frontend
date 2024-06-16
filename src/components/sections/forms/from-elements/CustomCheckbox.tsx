'use client';
import { Checkbox as CB } from '@/components/ui/checkbox';
import { Dispatch, FC, SetStateAction } from 'react';

type CheckboxSectionProps = {
	data: string[] | undefined;
	setData: Dispatch<SetStateAction<string[] | undefined>>;
	options: string[];
};

const CustomCheckbox: FC<CheckboxSectionProps> = ({ data, setData, options }) => {
	const handleCheckboxChange = (value: string, checked: boolean) => {
		if (checked) {
			// try different approach
			setData((prevData) => [...(prevData || []), value]);
		} else {
			setData((prevData) => prevData?.filter((item) => item !== value));
		}
	};

	return (
		<div className='flex flex-col gap-2 ml-2'>
			{options.map((item) => (
				<CheckBoxItem
					key={item}
					value={item}
					checked={data?.includes(item)}
					onChange={(checked) => handleCheckboxChange(item, checked)}
				/>
			))}
		</div>
	);
};

export default CustomCheckbox;

export type CheckBoxItemType = {
	value: string;
	checked?: boolean;
	onChange: (checked: boolean) => void; // Updated to boolean
};

const CheckBoxItem: FC<CheckBoxItemType> = ({ value, checked, onChange }) => {
	return (
		<div className='flex items-center space-x-2'>
			<CB checked={checked} onCheckedChange={(checked) => onChange(!!checked)} />
			<label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize'>
				{value}
			</label>
		</div>
	);
};

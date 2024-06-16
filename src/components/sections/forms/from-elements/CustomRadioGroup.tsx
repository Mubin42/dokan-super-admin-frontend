import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import React, { Dispatch, FC, SetStateAction } from 'react';

type CustomRadioGroupProps = {
	data: string | undefined;
	setData: Dispatch<SetStateAction<string | undefined>>;
	options: string[];
};

const CustomRadioGroup: FC<CustomRadioGroupProps> = ({ data, setData, options }) => {
	const handleRadioChange = (event: React.FormEvent<HTMLDivElement>) => {
		const target = event.target as HTMLInputElement;
		setData(target.value);
	};

	return (
		<RadioGroup defaultValue={data} onChange={handleRadioChange}>
			{options.map((item) => (
				<RadioItem key={item} value={item} />
			))}
		</RadioGroup>
	);
};

export default CustomRadioGroup;

export type RadioItemType = {
	value: string;
};

const RadioItem: FC<RadioItemType> = ({ value }) => {
	return (
		<div className='flex items-center space-x-2'>
			<RadioGroupItem value={value} />
			<Label className='capitalize'>{value}</Label>
		</div>
	);
};

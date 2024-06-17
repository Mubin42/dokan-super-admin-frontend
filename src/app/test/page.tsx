'use client';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Textarea } from '@/components/ui/textarea';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import {
	FormLeftRows,
	FormParentRow,
	FormRightRows,
	FormSection,
} from '@/components/sections/forms/form-layout';

import { FC, useState } from 'react';
import { DateRange } from 'react-day-picker';
import moment from 'moment';
import {
	CustomDatePicker,
	CustomDateRangePicker,
	CustomCheckbox,
	CustomRadioGroup,
	CustomSelect,
} from '@/components/sections/forms/from-elements';

import { toast } from '@/components/ui/use-toast';
import { Switch } from '@/components/ui/switch';

import CreatePageLayout from '@/components/layouts/page-layout/CreatePageLayout';

function Dashboard() {
	//states
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [switchData, setSwitchData] = useState<boolean>(false);

	const [number, setNumber] = useState<number | undefined>();
	const [email, setEmail] = useState<string | undefined>();

	const [selectData, setSelectData] = useState<string | undefined>();

	const [date, setDate] = useState<Date | undefined>();
	const [checkboxData, setCheckboxData] = useState<string[]>();

	const [radioData, setRadioData] = useState<string | undefined>();

	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: moment(new Date()).add(20, 'days').toDate(),
	});

	// variables
	const checkboxOptions = ['food', 'drinks', 'electronics'];
	const radioOptions = ['male', 'female', 'other'];

	const selectOptions = ['draft', 'published', 'archived'];

	// functions
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			name,
			description,
			switchData,
			number,
			email,
			selectData,
			radioData,
			date,
			dateRange,
			checkboxData,
		};
		toast({
			title: 'You submitted the following values:',
			duration: 2000,
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};

	// components
	const form = (
		<FormParentRow>
			<FormLeftRows>
				<FormSection
					title='Product Details'
					description='Lipsum dolor sit amet, consectetur adipiscing elit'
				>
					<div className='grid gap-3'>
						<Label>Name</Label>
						<Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
					</div>
					<div className='grid gap-3'>
						<Label>Description</Label>
						<Textarea
							className='min-h-32'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='description'>Switch Example</Label>
						<Switch checked={switchData} onCheckedChange={(value) => setSwitchData(value)} />
					</div>
				</FormSection>

				<FormSection title='Different Type Input'>
					<div className='grid gap-3'>
						<Label>Number</Label>
						<Input
							type='number'
							value={number}
							onChange={(e) => setNumber(parseInt(e.target.value))}
						/>
					</div>
					<div className='grid gap-3'>
						<Label>Email</Label>
						<Input type='password' value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='discount'>Discount</Label>
						<Input type='file' />
					</div>
				</FormSection>

				<FormSection title='Product Category'>
					<CustomRadioGroup options={radioOptions} data={radioData} setData={setRadioData} />
				</FormSection>
			</FormLeftRows>
			<FormRightRows>
				<FormSection title='Select Field Example'>
					<div className='grid gap-6'>
						<div className='grid gap-3'>
							<Label>Status</Label>
							<CustomSelect data={selectData} setData={setSelectData} options={selectOptions} />
						</div>
					</div>
				</FormSection>
				<FormSection
					title='Date Inputs Example'
					description='Date picker and date range picker examples.'
				>
					<div className='grid gap-3'>
						<Label>Date</Label>
						<CustomDatePicker date={date} setDate={setDate} />
					</div>

					<div className='grid gap-3'>
						<Label>Date Range</Label>
						<CustomDateRangePicker date={dateRange} setDate={setDateRange} />
					</div>
				</FormSection>

				<FormSection
					title='Checkbox Example'
					description='Lipsum dolor sit amet, consectetur adipiscing elit'
				>
					<CustomCheckbox data={checkboxData} setData={setCheckboxData} options={checkboxOptions} />
				</FormSection>
				<FormSection
					title='Archive Product'
					description='Lipsum dolor sit amet, consectetur adipiscing elit.'
				>
					<div></div>
					<Button size='sm' variant='secondary'>
						Archive Product
					</Button>
				</FormSection>
			</FormRightRows>
		</FormParentRow>
	);

	return (
		<CreatePageLayout title='Create Product' onSubmit={onSubmit} submitText='Save Product'>
			{form}
		</CreatePageLayout>
	);
}

export default Dashboard;

'use client';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { Textarea } from '@/components/ui/textarea';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import {
	FormLeftRows,
	FormParentRow,
	FormRightRows,
	FormSection,
} from '@/components/sections/forms/form-layout';

import { useState } from 'react';
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

// Date input -> Done
// Date range input -> Done
// Checkbox -> Done

// Input -> Initialized
// Select -> Initialized
// Textarea -> Initialized
// Switch -> Initialized

// Email input -> Initialized
// Radio buttons

// File
// Range input
// Password input
// Input type=image

function Dashboard() {
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

	const checkboxOptions = ['food', 'drinks', 'electronics'];
	const radioOptions = ['male', 'female', 'other'];

	const selectOptions = ['draft', 'published', 'archived'];

	const title = (
		<div className='flex items-center gap-4'>
			<Button variant='outline' size='icon' className='h-7 w-7' type='button'>
				<ChevronLeft className='h-4 w-4' />
				<span className='sr-only'>Back</span>
			</Button>
			<h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
				Pro Controller
			</h1>
			<div className='hidden items-center gap-2 md:ml-auto md:flex'>
				<Button variant='outline' size='sm' type='button'>
					Discard
				</Button>
				<Button size='sm' type='submit'>
					Save Product
				</Button>
			</div>
		</div>
	);

	const formRows = (
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

	const footer = (
		<div className='flex items-center justify-center gap-2 md:hidden'>
			<Button variant='outline' size='sm'>
				Discard
			</Button>
			<Button type='submit' size='sm'>
				Save Product
			</Button>
		</div>
	);

	return (
		<PageLayout currentPage='Order'>
			<form onSubmit={onSubmit}>
				<main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
					<div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
						{title}
						{formRows}
						{footer}
					</div>
				</main>
			</form>
		</PageLayout>
	);
}

export default Dashboard;

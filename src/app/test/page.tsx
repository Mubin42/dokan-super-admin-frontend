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
} from '@/components/sections/from-elements';

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
	const [date, setDate] = useState<Date | undefined>();
	const [checkboxData, setCheckboxData] = useState<string[]>();
	const [switchData, setSwitchData] = useState<boolean>(false);

	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: moment(new Date(2022, 0, 20)).add(20, 'days').toDate(),
	});

	const onSubmit = (
		e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		const data = {
			date,
			dateRange,
			checkboxData,
		};
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};

	const checkboxOptions = ['food', 'drinks', 'electronics'];

	const title = (
		<div className='flex items-center gap-4'>
			<Button variant='outline' size='icon' className='h-7 w-7'>
				<ChevronLeft className='h-4 w-4' />
				<span className='sr-only'>Back</span>
			</Button>
			<h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
				Pro Controller
			</h1>
			<div className='hidden items-center gap-2 md:ml-auto md:flex'>
				<Button variant='outline' size='sm'>
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
						<Label htmlFor='name'>Name</Label>
						<Input type='text' defaultValue='Gamer Gear Pro Controller' />
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='description'>Description</Label>
						<Textarea
							defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.'
							className='min-h-32'
						/>
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='description'>Switch Example</Label>
						<Switch checked={switchData} onCheckedChange={(value) => setSwitchData(value)} />
					</div>
				</FormSection>

				<FormSection title='Different Type Input'>
					<div className='grid gap-3'>
						<Label htmlFor='price'>Number</Label>
						<Input type='number' defaultValue='100' />
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='quantity'>Email</Label>
						<Input type='password' defaultValue='100' />
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='discount'>Discount</Label>
						<Input type='file' defaultValue='10' />
					</div>
				</FormSection>

				<FormSection title='Product Category'>
					<div className='grid gap-6 sm:grid-cols-3'>
						<div className='grid gap-3'>
							<Label htmlFor='category'>Category</Label>
							<Select>
								<SelectTrigger id='category' aria-label='Select category'>
									<SelectValue placeholder='Select category' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='clothing'>Clothing</SelectItem>
									<SelectItem value='electronics'>Electronics</SelectItem>
									<SelectItem value='accessories'>Accessories</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='grid gap-3'>
							<Label htmlFor='subcategory'>Subcategory (optional)</Label>
							<Select>
								<SelectTrigger id='subcategory' aria-label='Select subcategory'>
									<SelectValue placeholder='Select subcategory' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='t-shirts'>T-Shirts</SelectItem>
									<SelectItem value='hoodies'>Hoodies</SelectItem>
									<SelectItem value='sweatshirts'>Sweatshirts</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</FormSection>
			</FormLeftRows>
			<FormRightRows>
				<FormSection title='Select Field Example'>
					<div className='grid gap-6'>
						<div className='grid gap-3'>
							<Label>Status</Label>
							<Select>
								<SelectTrigger aria-label='Select status'>
									<SelectValue placeholder='Select status' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='draft'>Draft</SelectItem>
									<SelectItem value='published'>Active</SelectItem>
									<SelectItem value='archived'>Archived</SelectItem>
								</SelectContent>
							</Select>
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

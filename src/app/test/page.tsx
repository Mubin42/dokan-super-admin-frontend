'use client';
import Image from 'next/image';

import { ChevronLeft, Upload } from 'lucide-react';

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

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import PageLayout from '@/components/layouts/page-layout/PageLayout';

import {
	FormLeftRows,
	FormParentRow,
	FormRightRows,
	FormSection,
} from '@/components/sections/forms/form-layout';
import DatePicker from '@/components/sections/from-elements/DatePicker';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import moment from 'moment';
import DatePickerWithRange from '@/components/sections/from-elements/DateRangePicker';

// Date input -> Done
// Date range input -> Done

// Input -> Initialized
// Select -> Initialized
// Textarea -> Initialized

// Checkbox
// Email input
// Radio buttons
// Button
// Colored inputs
// File
// Range input
// Password input
// Input type=image
// Switch

function Dashboard() {
	const [date, setDate] = useState<Date | undefined>();

	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: moment(new Date(2022, 0, 20)).add(20, 'days').toDate(),
	});
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
				<Button size='sm'>Save Product</Button>
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

					<div>
						<Input type='datetime-local' />
						<input type='email' />
						<input type='file' />
						<input type='hidden' />
						<input type='image' />
						<input type='month' />
						<input type='number' />
						<input type='password' />
						<input type='radio' />
						<input type='range' />
						<input type='reset' />
						<input type='search' />
						<input type='submit' />
						<input type='tel' />
						<input type='text' />
						<input type='time' />
						<input type='url' />
						<input type='week' />
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='description'>Description</Label>
						<Textarea
							id='description'
							defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.'
							className='min-h-32'
						/>
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='description'>Description</Label>
						<Textarea
							id='description'
							defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.'
							className='min-h-32'
						/>
					</div>
				</FormSection>

				<FormSection title='Stock' description='Lipsum dolor sit amet, consectetur adipiscing elit'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[100px]'>SKU</TableHead>
								<TableHead>Stock</TableHead>
								<TableHead>Price</TableHead>
								<TableHead className='w-[100px]'>Size</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className='font-semibold'>GGPC-001</TableCell>
								<TableCell>
									<Label htmlFor='stock-1' className='sr-only'>
										Stock
									</Label>
									<Input id='stock-1' type='number' defaultValue='100' />
								</TableCell>
								<TableCell>
									<Label htmlFor='price-1' className='sr-only'>
										Price
									</Label>
									<Input id='price-1' type='number' defaultValue='99.99' />
								</TableCell>
								<TableCell>
									<ToggleGroup type='single' defaultValue='s' variant='outline'>
										<ToggleGroupItem value='s'>S</ToggleGroupItem>
										<ToggleGroupItem value='m'>M</ToggleGroupItem>
										<ToggleGroupItem value='l'>L</ToggleGroupItem>
									</ToggleGroup>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-semibold'>GGPC-002</TableCell>
								<TableCell>
									<Label htmlFor='stock-2' className='sr-only'>
										Stock
									</Label>
									<Input id='stock-2' type='number' defaultValue='143' />
								</TableCell>
								<TableCell>
									<Label htmlFor='price-2' className='sr-only'>
										Price
									</Label>
									<Input id='price-2' type='number' defaultValue='99.99' />
								</TableCell>
								<TableCell>
									<ToggleGroup type='single' defaultValue='m' variant='outline'>
										<ToggleGroupItem value='s'>S</ToggleGroupItem>
										<ToggleGroupItem value='m'>M</ToggleGroupItem>
										<ToggleGroupItem value='l'>L</ToggleGroupItem>
									</ToggleGroup>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-semibold'>GGPC-003</TableCell>
								<TableCell>
									<Label htmlFor='stock-3' className='sr-only'>
										Stock
									</Label>
									<Input id='stock-3' type='number' defaultValue='32' />
								</TableCell>
								<TableCell>
									<Label htmlFor='price-3' className='sr-only'>
										Stock
									</Label>
									<Input id='price-3' type='number' defaultValue='99.99' />
								</TableCell>
								<TableCell>
									<ToggleGroup type='single' defaultValue='s' variant='outline'>
										<ToggleGroupItem value='s'>S</ToggleGroupItem>
										<ToggleGroupItem value='m'>M</ToggleGroupItem>
										<ToggleGroupItem value='l'>L</ToggleGroupItem>
									</ToggleGroup>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
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
						<DatePicker date={date} setDate={setDate} />
					</div>

					<div className='grid gap-3'>
						<Label>Date Range</Label>
						<DatePickerWithRange date={dateRange} setDate={setDateRange} />
					</div>
				</FormSection>

				<FormSection
					title='Product Image'
					description='Lipsum dolor sit amet, consectetur adipiscing elit'
				>
					<div className='grid gap-2'>
						<Image
							alt='Product image'
							className='aspect-square w-full rounded-md object-cover'
							height='300'
							src='/placeholder.svg'
							width='300'
						/>
						<div className='grid grid-cols-3 gap-2'>
							<button>
								<Image
									alt='Product image'
									className='aspect-square w-full rounded-md object-cover'
									height='84'
									src='/placeholder.svg'
									width='84'
								/>
							</button>
							<button>
								<Image
									alt='Product image'
									className='aspect-square w-full rounded-md object-cover'
									height='84'
									src='/placeholder.svg'
									width='84'
								/>
							</button>
							<button className='flex aspect-square w-full items-center justify-center rounded-md border border-dashed'>
								<Upload className='h-4 w-4 text-muted-foreground' />
								<span className='sr-only'>Upload</span>
							</button>
						</div>
					</div>
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
			<Button size='sm'>Save Product</Button>
		</div>
	);

	return (
		<PageLayout currentPage='Order'>
			<div className='flex min-h-screen w-full flex-col'>
				<div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14 '>
					<main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
						<div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
							{title}
							{formRows}
							{footer}
						</div>
					</main>
				</div>
			</div>
		</PageLayout>
	);
}

export default Dashboard;

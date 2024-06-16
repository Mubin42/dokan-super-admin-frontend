'use client';

import { CalendarIcon } from '@radix-ui/react-icons';

import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import moment from 'moment';
import { FC } from 'react';

type DatePickerWithRangeProps = React.HTMLAttributes<HTMLDivElement> & {
	className?: string;
	date: DateRange | undefined;
	setDate: (date: DateRange | undefined) => void;
};

const DatePickerWithRange: FC<DatePickerWithRangeProps> = ({ className, date, setDate }) => {
	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						className={cn(
							'w-[300px] justify-start text-left font-normal',
							!date && 'text-muted-foreground'
						)}
					>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{moment(date.from).format('MMM DD, YYYY')} -{' '}
									{moment(date.to).format('MMM DD, YYYY')}
								</>
							) : (
								moment(date.from).format('MMM DD, YYYY')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default DatePickerWithRange;

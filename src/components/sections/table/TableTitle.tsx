import { TableHead } from '@/components/ui/table';
import { useAppSelector } from '@/hooks';
import { cn } from '@/lib/utils';

import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import React, { FC } from 'react';

type TableTitleProps = {
	children: React.ReactNode;
	onClick?: any;
	val?: string;
	className?: string;
};

const TableTitle: FC<TableTitleProps> = ({ children, onClick, val, className }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const { sort } = useAppSelector((state) => state.table);
	const icon =
		sort == `-${val}` ? (
			<ArrowUp className='h-4 w-4' />
		) : sort == val ? (
			<ArrowDown className='h-4 w-4' />
		) : (
			<ArrowUpDown className='h-4 w-4' />
		);

	return (
		<TableHead
			className={cn(
				'cursor-default',
				{
					'cursor-pointer': onClick,
				},
				className
			)}
			onClick={onClick}
		>
			<div className='flex items-center gap-2'>
				{val ? (
					<>
						{children}
						{icon}
					</>
				) : (
					children
				)}
			</div>
		</TableHead>
	);
};

export default TableTitle;

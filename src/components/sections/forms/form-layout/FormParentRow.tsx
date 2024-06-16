import { cn } from '@/lib/utils';
import React, { FC } from 'react';

type FormParentRowProps = {
	children: React.ReactNode;
	className?: string;
	singleColumn?: boolean;
};

const FormParentRow: FC<FormParentRowProps> = ({ children, className, singleColumn }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div
			className={cn(
				'grid gap-4 md:grid-cols-[1fr_250px] lg:gap-8',
				{
					'lg:grid-cols-3': !singleColumn,
					'lg:grid-cols-1': singleColumn,
				},
				className
			)}
		>
			{children}
		</div>
	);
};

export default FormParentRow;

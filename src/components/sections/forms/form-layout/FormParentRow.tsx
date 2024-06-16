import { cn } from '@/lib/utils';
import React, { FC } from 'react';

type FormParentRowProps = {
	children: React.ReactNode;
	className?: string;
};

const FormParentRow: FC<FormParentRowProps> = ({ children, className }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className={cn('grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8', className)}>
			{children}
		</div>
	);
};

export default FormParentRow;

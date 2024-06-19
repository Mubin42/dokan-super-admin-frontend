import { cn } from '@/lib/utils';
import React, { FC } from 'react';

type DataFieldsProps = {
	children?: React.ReactNode;
	fallback?: string;
	className?: string;
};

const DataFields: FC<DataFieldsProps> = ({ children, fallback, className }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return <h1 className={cn('text-sm font-normal', className)}>{children ? children : fallback}</h1>;
};

export default DataFields;

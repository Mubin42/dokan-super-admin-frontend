import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';
import React, { FC } from 'react';

type AddButtonProps = ButtonProps & {
	title: string;
	icon?: React.ReactNode;
	className?: string;
};

const AddButton: FC<AddButtonProps> = ({ title, icon, className, ...props }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Button size='sm' className={cn('h-7 gap-1', className)} {...props}>
			{icon ? icon : <PlusCircle className='h-3.5 w-3.5' />}
			<span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>{title}</span>
		</Button>
	);
};

export default AddButton;

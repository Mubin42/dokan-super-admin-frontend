import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React, { FC } from 'react';

type CustomTooltipProps = {
	label: string;
	children: React.ReactNode;
	className?: string;
};

const CustomTooltip: FC<CustomTooltipProps> = ({ children, label, className }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{label}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default CustomTooltip;

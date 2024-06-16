import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import React, { FC } from 'react';

type FormSectionProps = {
	title: string;
	description?: string;
	children: React.ReactNode;
};

const FormSection: FC<FormSectionProps> = ({ title, description, children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='grid gap-6'>{children}</div>
			</CardContent>
		</Card>
	);
};

export default FormSection;

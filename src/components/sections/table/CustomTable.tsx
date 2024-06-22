import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import TableTopRow from './TableTopRow';
import Pagination from './Pagination';

type CustomTableProps = {
	data: any;
	head: React.ReactNode;
	children: React.ReactNode;
	title: string;
	buttons?: React.ReactNode;
	isLoading: boolean;
	skeletonColumns?: number;
};

const CustomTable: FC<CustomTableProps> = ({
	data,
	head,
	children,
	title,
	buttons,
	isLoading,
	skeletonColumns = 5,
}) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	const skeleton = Array(5)
		.fill(0)
		.map((_, index) => (
			<TableRow key={index}>
				{Array(skeletonColumns)
					.fill(0)
					.map((_, i) => (
						<TableCell key={i}>
							<Skeleton className='h-6 w-full' />
						</TableCell>
					))}
			</TableRow>
		));

	return (
		<div className='grid flex-1 items-start gap-4 p-4'>
			<TableTopRow title={title} buttons={buttons} />
			<Card>
				<CardHeader className='px-7 space-y-4'>
					<Pagination data={data} />
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>{head}</TableRow>
						</TableHeader>
						<TableBody>{isLoading ? skeleton : children}</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};

export default CustomTable;

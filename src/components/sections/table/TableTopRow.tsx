import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { PlusIcon } from 'lucide-react';
import React, { FC } from 'react';

type TableTopRowProps = {};

const TableTopRow: FC<TableTopRowProps> = ({}) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className='flex w-full justify-between'>
			<CardTitle>Order</CardTitle>
			<Button size='sm'>
				<PlusIcon className='w-5 h-5 mr-1' />
				Add Order
			</Button>
		</div>
	);
};

export default TableTopRow;

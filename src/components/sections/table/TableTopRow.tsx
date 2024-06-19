import React, { FC } from 'react';

type TableTopRowProps = {
	buttons?: React.ReactNode;
	title: string;
};

const TableTopRow: FC<TableTopRowProps> = ({ title, buttons }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className='hidden md:flex items-center'>
			<h1 className='font-bold text-xl'>{title}</h1>
			{buttons}
		</div>
	);
};

export default TableTopRow;

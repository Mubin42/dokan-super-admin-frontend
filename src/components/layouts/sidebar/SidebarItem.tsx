import React, { FC } from 'react';
import Link from 'next/link';

type SidebarItemProps = {
	item: {
		link: string;
		icon: React.ReactNode;
		label: string;
	};
};

const SidebarItem: FC<SidebarItemProps> = ({ item }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Link href={item.link}>
			<div className='flex gap-3 items-center rounded-xl bg-card text-card-foreground'>
				{item.icon}
				<h1 className='font-semibold text-sm'>{item.label}</h1>
			</div>
		</Link>
	);
};

export default SidebarItem;

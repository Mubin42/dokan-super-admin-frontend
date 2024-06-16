import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';
import React, { FC } from 'react';
import { sidebarData } from './sidebar.data';
import SidebarItem from './SidebarItem';
import { Separator } from '@/components/ui/separator';

type SidebarProps = {
	className?: string;
	currentPage: string;
};

const Sidebar: FC<SidebarProps> = ({ className, currentPage, ...props }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<aside
			className={cn('hidden w-64 px-4 h-full flex-col border-r bg-background md:flex', className)}
		>
			<nav className='flex flex-col gap-4 px-2 sm:py-4'>
				<h1 className='font-bold text-xl'>{currentPage}</h1>
				<Separator />
				{sidebarData.map((item, index) => (
					<SidebarItem key={index} item={item} />
				))}
			</nav>

			<nav className='mt-auto flex flex-col gap-4 px-2 sm:py-4'>
				<SidebarItem
					item={{
						link: '#',
						icon: <Settings className='h-5 w-5' />,
						label: 'Settings',
					}}
				/>
			</nav>
		</aside>
	);
};

export default Sidebar;

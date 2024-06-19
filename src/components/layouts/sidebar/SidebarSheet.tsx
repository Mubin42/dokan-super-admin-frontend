import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PanelLeft } from 'lucide-react';
import React, { FC } from 'react';
import { sidebarData } from './sidebar.data';
import Link from 'next/link';

type SidebarSheetProps = {};

const SidebarSheet: FC<SidebarSheetProps> = ({}) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size='icon' variant='outline' className='sm:hidden'>
					<PanelLeft className='h-5 w-5' />
					<span className='sr-only'>Toggle Menu</span>
				</Button>
			</SheetTrigger>

			<SheetContent side='left' className='sm:w-screen'>
				{/* <SheetHeader>
						<SheetTitle className='text-left'>Navigation</SheetTitle>
					</SheetHeader> */}
				{/* <Separator /> */}
				<nav className='grid gap-6 text-lg font-medium'>
					{sidebarData.map((item, index) => (
						<Link href={item?.link}>
							<div className='flex gap-3 items-center'>
								{item.icon}
								<h1>{item?.label}</h1>
							</div>
						</Link>
					))}
				</nav>
				{/* <SheetFooter>ABC</SheetFooter> */}
			</SheetContent>
		</Sheet>
	);
};

export default SidebarSheet;

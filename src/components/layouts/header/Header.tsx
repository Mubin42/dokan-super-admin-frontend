import AccountDropdown from '@/components/sections/account-dropdown/AccountDropdown';
import { ModeToggle } from '@/components/sections/mode-toggle/ModeToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { useGetSelfQuery } from '@/store/services/authApi';
import { CircleUser, LineChart, Package2, PanelLeft, Search } from 'lucide-react';
import React, { FC } from 'react';
import { sidebarData } from '../sidebar/sidebar.data';
import Link from 'next/link';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import SidebarSheet from '../sidebar/SidebarSheet';

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
	// api
	const { data, isLoading, isSuccess } = useGetSelfQuery({});

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	const user = (
		<AccountDropdown data={data?.doc}>
			<Button variant='outline' size='icon'>
				<CircleUser />
			</Button>
			{/* This component does not work */}
			{/* <ProfileAvatar /> */}
		</AccountDropdown>
	);

	return (
		<header className='flex h-16 w-full justify-between items-center gap-4 border-b bg-background px-4 sm:py-4 '>
			<SidebarSheet />
			<h1 className='hidden md:block text-xl font-bold'>Dokan Admin App</h1>
			<div className='hidden md:block relative ml-auto flex-1 md:grow-0'>
				<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
				<Input
					type='search'
					placeholder='Search...'
					className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
				/>
			</div>
			<div className='flex items-center gap-4'>
				<ModeToggle />
				{user}
			</div>
		</header>
	);
};

export default Header;

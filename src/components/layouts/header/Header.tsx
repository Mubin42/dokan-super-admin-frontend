import AccountDropdown from '@/components/sections/account-dropdown/AccountDropdown';
import { ModeToggle } from '@/components/sections/mode-toggle/ModeToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGetSelfQuery } from '@/store/services/authApi';
import { CircleUser, Search } from 'lucide-react';
import React, { FC } from 'react';

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
		<header className='hidden h-16 w-full items-center gap-4 border-b bg-background px-4 md:flex'>
			<h1 className='text-xl font-bold'>Dokan Admin App</h1>
			<div className='relative ml-auto flex-1 md:grow-0'>
				<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
				<Input
					type='search'
					placeholder='Search...'
					className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
				/>
			</div>
			<ModeToggle />
			{isSuccess && user}
		</header>
	);
};

export default Header;

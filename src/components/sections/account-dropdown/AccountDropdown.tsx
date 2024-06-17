import { Badge } from '@/components/ui/badge';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/store/slices/authSlice';
import React, { FC } from 'react';

type AccountDropdownProps = {
	children: React.ReactNode;
	data?: any;
};

const AccountDropdown: FC<AccountDropdownProps> = ({ data, children }) => {
	// api

	// hooks
	const dispatch = useAppDispatch();

	// states

	// variables

	// styles

	// functions
	const handleLogout = () => {
		dispatch(logout());
	};

	// effects

	// components

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>
					<div className='flex flex-col'>
						<h1 className='text-sm font-semibold'>{data?.name}</h1>
						<Badge className='w-fit'>{data?.role}</Badge>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AccountDropdown;

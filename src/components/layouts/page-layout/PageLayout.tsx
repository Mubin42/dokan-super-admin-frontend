import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

type PageLayoutProps = {
	className?: string;
	children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ className, children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className={cn('h-screen w-screen flex', className)}>
			<Sidebar />
			<div className='flex flex-col w-full'>
				<Header />
				<main className='flex-1'>{children}</main>
			</div>
		</div>
	);
};

export default PageLayout;

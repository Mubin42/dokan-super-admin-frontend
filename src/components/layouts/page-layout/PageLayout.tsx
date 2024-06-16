import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

type PageLayoutProps = {
	className?: string;
	children: React.ReactNode;
	currentPage: string;
};

const PageLayout: FC<PageLayoutProps> = ({ className, children, currentPage }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<div className={cn('h-screen w-screen flex overflow-y-hidden', className)}>
			<Sidebar currentPage={currentPage} />
			<div className='flex flex-col w-full'>
				<Header />
				<main className='flex-1 sm:p-4 bg-muted/40 overflow-auto'>{children}</main>
			</div>
		</div>
	);
};

export default PageLayout;

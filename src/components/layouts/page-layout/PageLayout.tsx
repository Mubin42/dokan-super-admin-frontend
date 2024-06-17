'use client';
import { cn } from '@/lib/utils';
import React, { FC, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks';

type PageLayoutProps = {
	className?: string;
	children: React.ReactNode;
	currentPage: string;
};

type AuthStateProps = {
	isLoggedIn: boolean | undefined;
	loading: boolean;
};

const PageLayout: FC<PageLayoutProps> = ({ className, children, currentPage }) => {
	// api

	// hooks
	const { loading, isLoggedIn }: AuthStateProps = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !isLoggedIn) {
			router.replace('/auth/login');
		}
	}, [isLoggedIn, router, loading]);

	if (loading) return null;

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	if (isLoggedIn) {
		return (
			<div className={cn('h-screen w-screen flex overflow-y-hidden', className)}>
				<Sidebar currentPage={currentPage} />
				<div className='flex flex-col w-full'>
					<Header />
					<main className='flex-1 sm:p-4 bg-muted/40 overflow-auto'>{children}</main>
				</div>
			</div>
		);
	}
	return null;
};

export default PageLayout;

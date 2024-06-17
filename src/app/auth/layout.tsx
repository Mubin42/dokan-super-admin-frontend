import { Button } from '@/components/ui/button';
import { IMAGE_URL } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type AuthPageLayoutProps = {
	children: React.ReactNode;
};

const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const left = (
		<div className='hidden bg-muted lg:block'>
			<div className='fixed bottom-4 left-4'>
				<Link href='/'>
					<Button variant='link' className='text-white'>
						Back to home
					</Button>
				</Link>
			</div>
			<Image
				src={IMAGE_URL.authCover}
				alt='Image'
				width='1920'
				height='1080'
				className='h-full w-full object-cover dark:brightness-[0.8] dark:grayscale'
			/>
		</div>
	);

	return (
		<div className='w-screen h-screen bg-muted/40 lg:grid lg:grid-cols-2 '>
			{left}
			<div className='flex items-center justify-center py-12'>{children}</div>
		</div>
	);
};

export default AuthPageLayout;

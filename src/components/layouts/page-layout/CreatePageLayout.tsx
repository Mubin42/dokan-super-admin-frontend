'use client';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layouts/page-layout/PageLayout';

import { FC } from 'react';

type CreatePageLayoutProps = {
	title: string;
	children: React.ReactNode;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	successRoute?: string;
	submitText?: string;
	isLoading?: boolean;
};

const CreatePageLayout: FC<CreatePageLayoutProps> = ({
	title,
	children,
	onSubmit,
	submitText = 'Save',
	isLoading = false,
}) => {
	// back to previous window
	const handleBack = () => {
		window.history.back();
	};

	const heading = (
		<div className='flex items-center gap-4'>
			<Button variant='outline' size='icon' className='h-7 w-7' type='button' onClick={handleBack}>
				<ChevronLeft className='h-4 w-4' />
				<span className='sr-only'>Back</span>
			</Button>
			<h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
				{title}
			</h1>
			<div className='hidden items-center gap-2 md:ml-auto md:flex'>
				<Button variant='outline' size='sm' type='button' onClick={handleBack}>
					Discard
				</Button>
				<Button size='sm' type='submit'>
					{submitText}
				</Button>
			</div>
		</div>
	);

	const footer = (
		<div className='flex items-center justify-center gap-2 md:hidden'>
			<Button variant='outline' size='sm'>
				Discard
			</Button>
			<Button type='submit' size='sm' isLoading={isLoading}>
				Save Product
			</Button>
		</div>
	);

	return (
		<PageLayout currentPage='Order'>
			<form onSubmit={onSubmit}>
				<main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
					<div className='mx-auto grid max-w-[59rem] lg:w-[59rem] flex-1 auto-rows-max gap-4'>
						{heading}
						{children}
						{footer}
					</div>
				</main>
			</form>
		</PageLayout>
	);
};

export default CreatePageLayout;

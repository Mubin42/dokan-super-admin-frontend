'use client';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import { FC } from 'react';

type ViewPageLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const ViewPageLayout: FC<ViewPageLayoutProps> = ({ title, children }) => {
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
		</div>
	);

	return (
		<PageLayout currentPage='Order'>
			<main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
				<div className='mx-auto grid max-w-[59rem] lg:w-[59rem] flex-1 auto-rows-max gap-4'>
					{heading}
					{children}
				</div>
			</main>
		</PageLayout>
	);
};

export default ViewPageLayout;

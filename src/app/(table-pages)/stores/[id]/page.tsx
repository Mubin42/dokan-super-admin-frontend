'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import {
	FormLeftRows,
	FormParentRow,
	FormRightRows,
	FormSection,
} from '@/components/sections/forms/form-layout';

import moment from 'moment';

import { DataFields } from '@/components/end-component/texts';
import ViewPageLayout from '@/components/layouts/page-layout/ViewPageLayout';
import { Badge } from '@/components/ui/badge';
import { useGetStoreByIDQuery } from '@/store/services/storeApi';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';

const ViewStorePage: NextPage = () => {
	// api
	const { id } = useParams();
	const { data, isLoading } = useGetStoreByIDQuery(id, { skip: !id });
	//states

	// variables

	// functions

	// components
	const form = (
		<FormParentRow>
			<FormLeftRows>
				<FormSection title='Store Information' description='Basic information about the store.'>
					<div className='grid gap-3'>
						<Label>Name</Label>
						<DataFields>{data?.doc?.name}</DataFields>
					</div>
					<div className='grid gap-3'>
						<Label>Description</Label>
						<DataFields>{data?.doc?.description}</DataFields>
					</div>
					<div className='grid gap-3'>
						<Label>Category</Label>
						<DataFields>{data?.doc?.storeType}</DataFields>
					</div>
					<div className='grid gap-3'>
						<Label>Created</Label>
						<DataFields className='font-semibold'>
							{data?.doc?.createdAt &&
								moment(data?.doc?.createdAt).format('DD MMM YYYY, h:mm:ss a')}
						</DataFields>
					</div>
				</FormSection>

				<FormSection title='Contact Info'>
					<div className='grid gap-3'>
						<Label>Address</Label>
						<DataFields>{data?.doc?.address}</DataFields>
					</div>
					<div className='grid gap-3'>
						<Label>Email</Label>
						<DataFields>{data?.doc?.contact?.email}</DataFields>
					</div>
					<div className='grid gap-3'>
						<Label htmlFor='discount'>Phone</Label>
						<DataFields>{data?.doc?.contact?.phone}</DataFields>
					</div>
					<div className='grid gap-3'>
						<Label>Website URL</Label>
						<Button className='p-0 w-fit' variant='link'>
							{data?.doc?.contact?.website}
						</Button>
					</div>
				</FormSection>
			</FormLeftRows>
			<FormRightRows>
				<FormSection title='Tags Details'>
					<div className='grid gap-6'>
						<div className='grid gap-3'>
							<Label>Tags</Label>
							<div className='flex flex-wrap gap-3'>
								{data?.doc?.searchTags?.map((tag: string, index: number) => {
									return (
										<Badge variant='secondary' key={index}>
											{tag}
										</Badge>
									);
								})}
							</div>
						</div>
					</div>
				</FormSection>
				<FormSection
					title='Meta Fields'
					description='Meta fields are used for Search Engine Optimization (SEO) and Social Media Optimization (SMO).'
				>
					<div className='grid gap-3'>
						<Label>Title</Label>
						<DataFields>{data?.doc?.meta?.title}</DataFields>
					</div>

					<div className='grid gap-3'>
						<Label>Description</Label>
						<DataFields>{data?.doc?.meta?.description}</DataFields>
					</div>
				</FormSection>
			</FormRightRows>
		</FormParentRow>
	);

	return <ViewPageLayout title='Store Details'>{form}</ViewPageLayout>;
};

export default ViewStorePage;

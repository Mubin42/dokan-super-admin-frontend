'use client';
import { DataFields } from '@/components/end-component/texts';
import ViewPageLayout from '@/components/layouts/page-layout/ViewPageLayout';
import { FormParentRow, FormSection } from '@/components/sections/forms/form-layout';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useGetSuperAdminByIdQuery } from '@/store/services/superAdminApi';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';

const ViewSuperAdmin: NextPage = ({}) => {
	// api
	const { id } = useParams();
	const { data, isLoading } = useGetSuperAdminByIdQuery(id, { skip: !id });

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const form = (
		<FormParentRow singleColumn>
			<FormSection
				title='Basic Information'
				description='Super Admins have access to all the features of the platform. They can create, update, and delete other users.'
			>
				<div className='grid gap-3'>
					<Label>Name</Label>
					<DataFields>{data?.doc?.name}</DataFields>
				</div>
				<div className='grid gap-3'>
					<Label>Email *</Label>
					<DataFields>{data?.doc?.email}</DataFields>
				</div>

				<div className='grid gap-3'>
					<Label>Phone</Label>
					<DataFields fallback='Not given'>{data?.doc?.phone}</DataFields>
				</div>
			</FormSection>
			<FormSection title='Access Control' description='Select the permissions for this user.'>
				<div className='grid gap-3'>
					<Label>Role</Label>
					<Badge className='w-fit'>{data?.doc?.role}</Badge>
				</div>
				<div className='grid gap-3'>
					<Label>Is Active</Label>
					{data?.doc?.isActive ? <Switch checked={data?.doc?.isActive} /> : 'Not Available'}
				</div>
			</FormSection>
		</FormParentRow>
	);

	return <ViewPageLayout title='Super Admin Details'>{form}</ViewPageLayout>;
};

export default ViewSuperAdmin;

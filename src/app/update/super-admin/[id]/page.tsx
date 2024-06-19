'use client';
import CreatePageLayout from '@/components/layouts/page-layout/CreatePageLayout';
import { FormParentRow, FormSection } from '@/components/sections/forms/form-layout';
import { CustomSelect } from '@/components/sections/forms/from-elements';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useCustomToast } from '@/hooks';
import {
	useGetSuperAdminByIdQuery,
	useUpdateSuperAdminMutation,
} from '@/store/services/superAdminApi';
import { useParams, useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

type UpdateSuperAdminProps = {};

const UpdateSuperAdmin: FC<UpdateSuperAdminProps> = ({}) => {
	// api
	const { id } = useParams();
	const { data, isLoading, isSuccess } = useGetSuperAdminByIdQuery(id, { skip: !id });
	const [trigger, response] = useUpdateSuperAdminMutation();

	// hooks
	const router = useRouter();
	useCustomToast(response, 'Super Admin updated successfully');

	// states
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [phone, setPhone] = useState<string>();

	const [role, setRole] = useState<string>();
	const [isActive, setIsActive] = useState<boolean>(true);

	// variables
	const roleOptions = ['super-admin', 'viewer', 'marketing'];

	// styles

	// functions
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const body = {
			name,
			phone,
			role,
			isActive,
		};
		trigger({ id, body });
	};

	// effects
	useEffect(() => {
		if (isSuccess) {
			setName(data?.doc?.name);
			setEmail(data?.doc?.email);
			setPhone(data?.doc?.phone);
			setRole(data?.doc?.role);
			setIsActive(data?.doc?.isActive);
		}
	}, [data]);

	useEffect(() => {
		if (response.isSuccess) {
			router.push('/super-admins');
		}
	}, [response.isSuccess]);

	// components
	const form = (
		<FormParentRow singleColumn>
			<FormSection
				title='Super Admin Details'
				description='Super Admins have access to all the features of the platform. They can create, update, and delete other users.'
			>
				<div className='grid gap-3'>
					<Label>Name *</Label>
					<Input value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div className='grid gap-3'>
					<Label>Email *</Label>
					<Input value={email} disabled />
				</div>
				<div className='grid gap-3'>
					<Label>Phone</Label>
					<Input value={phone} onChange={(e) => setPhone(e.target.value)} />
				</div>
			</FormSection>
			<FormSection title='Access Control' description='Select the permissions for this user.'>
				<div className='grid gap-3'>
					<Label>Role</Label>
					<CustomSelect data={role} setData={setRole} options={roleOptions} />
				</div>
				<div className='grid gap-3'>
					<Label>Is Active</Label>
					<Switch checked={isActive} onCheckedChange={(value) => setIsActive(value)} />
				</div>
			</FormSection>
		</FormParentRow>
	);

	return (
		<CreatePageLayout title='Add Super Admin' onSubmit={handleSubmit}>
			{form}
		</CreatePageLayout>
	);
};

export default UpdateSuperAdmin;

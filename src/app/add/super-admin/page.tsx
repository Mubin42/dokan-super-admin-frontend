'use client';
import CreatePageLayout from '@/components/layouts/page-layout/CreatePageLayout';
import { FormParentRow, FormSection } from '@/components/sections/forms/form-layout';
import { CustomSelect } from '@/components/sections/forms/from-elements';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import { useCustomToast } from '@/hooks';
import { useCreateSuperAdminMutation } from '@/store/services/superAdminApi';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

type AddSuperAdminProps = {};

const AddSuperAdmin: FC<AddSuperAdminProps> = ({}) => {
	// api
	const [trigger, response] = useCreateSuperAdminMutation();

	// hooks
	const router = useRouter();
	useCustomToast(response, 'Super Admin added successfully');

	// states
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();
	const [role, setRole] = useState<string>();
	const [isActive, setIsActive] = useState<boolean>(true);

	// variables
	const roleOptions = ['super-admin', 'viewer', 'marketing'];

	// styles

	// functions
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast({
				variant: 'destructive',
				description: 'Passwords do not match',
				duration: 2000,
			});
			return;
		}

		trigger({ name, email, password, role, isActive });
	};

	// effects
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
					<Input value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
			</FormSection>
			<FormSection title='Access Control' description='Select the permissions for this user.'>
				<div className='grid gap-3'>
					<Label>Password *</Label>
					<Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className='grid gap-3'>
					<Label>Confirm Password *</Label>
					<Input
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
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

export default AddSuperAdmin;

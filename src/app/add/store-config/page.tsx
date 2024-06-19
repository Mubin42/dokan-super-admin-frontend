'use client';
import CreatePageLayout from '@/components/layouts/page-layout/CreatePageLayout';
import { FormLeftRows, FormParentRow, FormSection } from '@/components/sections/forms/form-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useCustomToast } from '@/hooks';
import { useCreateStoreConfigMutation } from '@/store/services/storeConfigApi';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

type AddStoreConfigProps = {};

const AddStoreConfig: FC<AddStoreConfigProps> = ({}) => {
	// api
	const [trigger, response] = useCreateStoreConfigMutation();

	// hooks
	const router = useRouter();
	useCustomToast(response, 'Store Config added successfully');

	// states
	const [apiKey, setApiKey] = useState<string>();
	const [isActive, setIsActive] = useState<boolean>(true);

	// variables

	// styles

	// functions
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		trigger({ apiKey, isActive });
	};

	// effects
	useEffect(() => {
		if (response.isSuccess) {
			router.push('/store-configs');
		}
	}, [response.isSuccess]);
	// components

	const form = (
		<FormParentRow singleColumn>
			<FormLeftRows>
				<FormSection
					title='Store Configuration Details'
					description='Details of store configuration of the given system'
				>
					<div className='grid gap-3'>
						<Label>Api Key</Label>
						<Input
							placeholder='eg. 1234567890'
							value={apiKey}
							onChange={(e) => setApiKey(e.target.value)}
						/>
					</div>

					<div className='grid gap-3'>
						<Label>Is Active</Label>
						<Switch checked={isActive} onCheckedChange={(value) => setIsActive(value)} />
					</div>
				</FormSection>
			</FormLeftRows>
		</FormParentRow>
	);

	return (
		<CreatePageLayout title='Add Store Config' onSubmit={handleSubmit}>
			{form}
		</CreatePageLayout>
	);
};

export default AddStoreConfig;

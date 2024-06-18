import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { useCustomToast } from '@/hooks';
import { useDeleteSuperAdminMutation } from '@/store/services/superAdminApi';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

type DeleteSuperAdminAlertProps = {
	data: any;
};

const DeleteSuperAdminAlert: FC<DeleteSuperAdminAlertProps> = ({ data }) => {
	// api
	const [trigger, response] = useDeleteSuperAdminMutation();

	useCustomToast(response, 'Super Admin deleted successfully');
	const router = useRouter();
	// functions
	const handleDelete = () => {
		trigger(data?._id);
		router.push('/super-admins');
	};

	return (
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
				<AlertDialogDescription>
					This action cannot be undone. This will permanently delete the super admin:{' '}
					<span className='font-semibold'>{data?.email}</span>
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	);
};

export default DeleteSuperAdminAlert;

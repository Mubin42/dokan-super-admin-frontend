import { toast } from '@/components/ui/use-toast';
import React from 'react';

const useCustomToast = (result: any, successMessage: string, errorMessage?: string) => {
	React.useEffect(() => {
		if (result.isSuccess) {
			toast({
				title: successMessage,
				duration: 2000,
			});
		}
		if (result.isError) {
			const formatMessage = (message: string | string[]) => {
				return Array.isArray(message) ? message[0] : message;
			};
			toast({
				title: formatMessage(result?.error?.data?.message) || errorMessage,
				variant: 'destructive',
				duration: 2000,
			});
		}
	}, [result]);
};
export default useCustomToast;

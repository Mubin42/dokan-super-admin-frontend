'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/hooks';
import useCustomToast from '@/hooks/useCustomToast';
import { useLoginMutation } from '@/store/services/authApi';
import { login } from '@/store/slices/authSlice';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';

type LoginProps = {};

const Login: FC<LoginProps> = ({}) => {
	// api
	const [trigger, result] = useLoginMutation();

	// hooks
	useCustomToast(result, 'Login SuccessFull');
	const dispatch = useAppDispatch();

	// states
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');

	// variables

	// styles

	// functions
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		trigger({ email, password });
	};

	// effects
	useEffect(() => {
		if (result?.isSuccess) {
			dispatch(login(result?.data?.accessToken));
		}
	}, [result?.isSuccess]);

	// components

	const signUp = (
		<div className='mt-4 text-center text-sm'>
			Don&apos;t have an account?
			<Link href='/auth/register' className='underline'>
				Sign up
			</Link>
		</div>
	);

	return (
		<form onSubmit={handleSubmit}>
			<Card className='mx-auto grid w-96'>
				<CardHeader>
					<div className='grid gap-2 text-center'>
						<h1 className='text-3xl font-bold'>Login</h1>
						<p className='text-balance text-muted-foreground'>Dokan Super Admin</p>
					</div>
				</CardHeader>
				<CardContent>
					<div className='grid gap-4'>
						<div className='grid gap-2'>
							<Label>Email</Label>
							<Input
								type='email'
								placeholder='m@example.com'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label>Password</Label>
								{/* Forget password is not available for now */}
								{/* <Link href='/forgot-password' className='ml-auto inline-block text-sm underline'>
								Forgot your password?
							</Link> */}
							</div>
							<Input
								type='password'
								placeholder='********'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<Button type='submit' className='w-full'>
							Login
						</Button>
					</div>
					{/* Sign up is not available for now */}
					{/* {signUp} */}
				</CardContent>
			</Card>
		</form>
	);
};

export default Login;

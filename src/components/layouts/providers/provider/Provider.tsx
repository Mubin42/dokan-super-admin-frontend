'use client';
import React, { FC } from 'react';
import { ThemeProvider } from '@/components/layouts/providers/theme-provider/ThemeProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';

type ProviderProps = {
	children: React.ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<ReduxProvider store={store}>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
				{children}
			</ThemeProvider>
		</ReduxProvider>
	);
};

export default Provider;

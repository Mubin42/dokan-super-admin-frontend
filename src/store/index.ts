import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slices/authSlice';
import tableSlice from './slices/tableSlice';
import mainApi from './services/mainApi';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		table: tableSlice,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware).concat(),

	devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {});

setupListeners(store.dispatch);

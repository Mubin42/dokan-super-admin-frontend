import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TagType = string;

const tags: TagType[] = [];

export const mainApi = createApi({
	reducerPath: 'mainApi',

	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BACKEND}`,

		prepareHeaders: (headers, { getState }) => {
			const token: string = (getState() as any).auth?.token;
			headers.set('content-type', 'application/json');
			headers.set('accept', '*/*');
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: tags,
	endpoints: (builder) => ({}),
});

export const {} = mainApi;

export default mainApi;

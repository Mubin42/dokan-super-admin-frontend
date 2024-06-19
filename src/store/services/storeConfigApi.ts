import mainApi from './mainApi';

const storeConfigApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		createStoreConfig: builder.mutation({
			query: (body) => ({
				url: 'admin-portal/store-config',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['store-config'],
		}),
		getAllStoreConfig: builder.query({
			query: ({ sort, page, limit, search }) => ({
				url: 'admin-portal/store-config',
				method: 'GET',
				params: { sort, page, limit, search },
			}),
			providesTags: ['store-config'],
		}),
		updateStoreConfig: builder.mutation({
			query: ({ id, body }) => ({
				url: `admin-portal/store-config/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['store-config'],
		}),
	}),
});

export const {
	useCreateStoreConfigMutation,
	useGetAllStoreConfigQuery,
	useUpdateStoreConfigMutation,
} = storeConfigApi;

export default storeConfigApi;

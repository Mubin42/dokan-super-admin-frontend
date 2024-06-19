import mainApi from './mainApi';

const storeApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllStores: builder.query({
			query: ({ sort, page, limit, search }) => ({
				url: 'admin-portal/stores',
				params: { sort, page, limit, search },
			}),
			providesTags: ['store'],
		}),
		getStoreByID: builder.query({
			query: (id) => ({
				url: `admin-portal/stores/${id}`,
				method: 'GET',
			}),
			providesTags: ['store'],
		}),
	}),
});

export const { useGetAllStoresQuery, useGetStoreByIDQuery } = storeApi;

export default storeApi;

import mainApi from './mainApi';

const superAdminApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllSuperAdmins: builder.query({
			query: ({ sort, page, limit, search }) => ({
				url: 'admin-portal/super-admins',
				params: { sort, page, limit, search },
			}),
			providesTags: ['super-admin'],
		}),
		createSuperAdmin: builder.mutation({
			query: (body) => ({
				url: 'admin-portal/super-admins',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['super-admin'],
		}),
	}),
});

export const { useGetAllSuperAdminsQuery, useCreateSuperAdminMutation } = superAdminApi;
export default superAdminApi;

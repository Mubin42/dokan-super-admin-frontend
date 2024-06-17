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
	}),
});

export const { useGetAllSuperAdminsQuery } = superAdminApi;
export default superAdminApi;

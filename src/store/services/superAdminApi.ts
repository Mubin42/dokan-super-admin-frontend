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
		getSuperAdminById: builder.query({
			query: (id) => ({
				url: `admin-portal/super-admins/${id}`,
				method: 'GET',
			}),
			providesTags: ['super-admin'],
		}),

		updateSuperAdmin: builder.mutation({
			query: ({ id, body }) => ({
				url: `admin-portal/super-admins/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['super-admin'],
		}),

		deleteSuperAdmin: builder.mutation({
			query: (id) => ({
				url: `admin-portal/super-admins/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['super-admin'],
		}),
	}),
});

export const {
	useGetAllSuperAdminsQuery,
	useCreateSuperAdminMutation,
	useGetSuperAdminByIdQuery,
	useUpdateSuperAdminMutation,
	useDeleteSuperAdminMutation,
} = superAdminApi;
export default superAdminApi;

import { LoginReqBody } from '../dtos/AuthDto';
import mainApi from './mainApi';

const authApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		/** This is a login mutation that will be used to login the user
		 * @param body - The body of the request
		 * @returns The response of the request
		 */
		login: builder.mutation({
			query: (body: LoginReqBody) => ({
				url: 'admin-portal/auth/login',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['auth'],
		}),

		/** This is a getSelf query that will be used to get the user details
		 * @returns The response of the request
		 */
		getSelf: builder.query({
			query: () => ({
				url: 'admin-portal/auth/self',
				method: 'GET',
			}),
			providesTags: ['auth'],
		}),
	}),
});

export const { useLoginMutation, useGetSelfQuery } = authApi;
export default authApi;

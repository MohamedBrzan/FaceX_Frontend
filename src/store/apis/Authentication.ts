import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';

export const AuthenticationApi = createApi({
  reducerPath: 'AuthenticationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}user`,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: ({ ...data }) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignInMutation } = AuthenticationApi;

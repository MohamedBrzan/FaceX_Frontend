import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import User from '../../Interfaces/User/User';

export const UsersApi = createApi({
  reducerPath: 'UsersApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getUsers: builder.query<User, string>({
      query: () => '/user',
    }),
  }),
});

export const { useGetUsersQuery } = UsersApi;

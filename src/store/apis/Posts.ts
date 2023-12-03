import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Post from '../../Interfaces/Post/Post';

export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getPost: builder.query<Post, string>({
      query: () => '/post',
    }),
  }),
});

export const { useGetPostQuery } = PostApi;

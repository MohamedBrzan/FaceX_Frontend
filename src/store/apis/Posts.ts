import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Post from '../../Interfaces/Post/Post';
// import Expressions from '../../Types/Post/Expressions';

export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}post`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, string>({
      query: (sort) => (sort ? `?sort=${sort.toLowerCase()}` : '/'),
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `/${id}`,
    }),
    uploadPost: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/create',
        body: data,
      }),
    }),
    togglePostExpression: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/expressions/toggle',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useUploadPostMutation,
  useGetPostQuery,
  useTogglePostExpressionMutation,
} = PostApi;

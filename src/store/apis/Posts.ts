import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Post from '../../Interfaces/Post/Post';

export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, string>({
      query: () => '/post',
    }),
    AddOrRemoveExpression: builder.mutation({
      query: ({ prevExpressionName, currentExpressionName, postId }) => ({
        method: 'PATCH',
        url: '/expressions/toggle',
        body: { prevExpressionName, currentExpressionName, postId },
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddOrRemoveExpressionMutation } = PostApi;

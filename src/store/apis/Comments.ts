import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Comment from '../../Interfaces/Comment/Comment';

export const CommentApi = createApi({
  reducerPath: 'CommentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APIS_ROOT,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment, string>({
      query: () => '/comment',
    }),
    getComment: builder.query<Comment, string>({
      query: (id) => `/comment/${id}`,
    }),
    uploadComment: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/comment/create',
        body: data,
      }),
    }),
    toggleCommentExpression: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/comment/expressions/toggle',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentQuery,
  useUploadCommentMutation,
  useToggleCommentExpressionMutation,
} = CommentApi;

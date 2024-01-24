import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Reply from '../../Interfaces/Comment/Reply';

export const ReplyApi = createApi({
  reducerPath: 'ReplyApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT, credentials: 'include' }),
  endpoints: (builder) => ({
    getReplies: builder.query<Reply, string>({
      query: () => '/reply',
    }),
    getReply: builder.query<Reply, string>({
      query: (id) => `/reply/${id}`,
    }),
    uploadReply: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/reply/create',
        body: data,
      }),
    }),
    toggleReplyExpression: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/reply/expressions/toggle',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetRepliesQuery,
  useGetReplyQuery,
  useUploadReplyMutation,
  useToggleReplyExpressionMutation,
} = ReplyApi;

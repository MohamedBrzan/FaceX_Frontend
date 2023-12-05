import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Comment from '../../Interfaces/Comment/Comment';

export const CommentApi = createApi({
  reducerPath: 'CommentApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment, string>({
      query: () => '/comment',
    }),
  }),
});

export const { useGetCommentsQuery } = CommentApi;

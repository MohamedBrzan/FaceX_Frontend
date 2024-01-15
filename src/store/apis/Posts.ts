import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Post from '../../Interfaces/Post/Post';
// import Expressions from '../../Types/Post/Expressions';

export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, string>({
      query: () => '/post',
    }),
    // togglePostExpression: builder.mutation<Expressions | string>({
    //   query: ({ ...data }) => ({
    //     method: 'PATCH',
    //     url: '/post/expressions/toggle',
    //     mode: 'no-cors',
    //     credentials: true,
    //     body: { ...data },
    //   }),
    // }),
  }),
});

export const {
  useGetPostsQuery,
  // useTogglePostExpressionMutation
} = PostApi;

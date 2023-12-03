import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Blog from '../../Interfaces/Blog/Blog';

export const BlogApi = createApi({
  reducerPath: 'BlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getBlog: builder.query<Blog, string>({
      query: () => '/blog',
    }),
  }),
});

export const { useGetBlogQuery } = BlogApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import HashTag from '../../Interfaces/HashTag/HashTag';

export const HashTagApi = createApi({
  reducerPath: 'HashTagApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getHashTags: builder.query<HashTag, string>({
      query: () => '/hashTag',
    }),
  }),
});

export const { useGetHashTagsQuery } = HashTagApi;

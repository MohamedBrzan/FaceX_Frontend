import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Album from '../../Interfaces/Album/Album';

export const AlbumApi = createApi({
  reducerPath: 'AlbumApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getAlbum: builder.query<Album, string>({
      query: () => '/album',
    }),
  }),
});

export const { useGetAlbumQuery } = AlbumApi;

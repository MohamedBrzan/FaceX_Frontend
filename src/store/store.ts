import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { UsersApi } from './apis/Users';
import { PostApi } from './apis/Posts';
import { AdApi } from './apis/Ads';
import { AlbumApi } from './apis/Albums';
import { BlogApi } from './apis/Blogs';
import { CommentApi } from './apis/Comments';
import { HashTagApi } from './apis/HashTags';
import { ImageApi } from './apis/Images';
import { NotificationApi } from './apis/Notifications';
import { PaymentApi } from './apis/Payments';
import { ReelApi } from './apis/Reels';
import { VideoApi } from './apis/Videos';
import { JobApi } from './apis/Jobs';

export const store = configureStore({
  reducer: {
    [UsersApi.reducerPath]: UsersApi.reducer,
    [PostApi.reducerPath]: PostApi.reducer,
    [AdApi.reducerPath]: AdApi.reducer,
    [AlbumApi.reducerPath]: AlbumApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
    [CommentApi.reducerPath]: CommentApi.reducer,
    [HashTagApi.reducerPath]: HashTagApi.reducer,
    [ImageApi.reducerPath]: ImageApi.reducer,
    [NotificationApi.reducerPath]: NotificationApi.reducer,
    [PaymentApi.reducerPath]: PaymentApi.reducer,
    [ReelApi.reducerPath]: ReelApi.reducer,
    [VideoApi.reducerPath]: VideoApi.reducer,
    [JobApi.reducerPath]: JobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(UsersApi.middleware)
      .concat(PostApi.middleware)
      .concat(AdApi.middleware)
      .concat(AlbumApi.middleware)
      .concat(BlogApi.middleware)
      .concat(CommentApi.middleware)
      .concat(HashTagApi.middleware)
      .concat(ImageApi.middleware)
      .concat(NotificationApi.middleware)
      .concat(PaymentApi.middleware)
      .concat(ReelApi.middleware)
      .concat(VideoApi.middleware)
      .concat(JobApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

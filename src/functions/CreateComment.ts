import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import CommentData from '../types/CommentData';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import Post from '../Interfaces/Post/Post';

export default async (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  _id: string,
  uploadComment: MutationTrigger<
    MutationDefinition<
      unknown,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      unknown,
      'CommentApi'
    >
  >,
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      string,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      Post,
      'PostApi'
    >
  >
) => {
  const target = e.target as HTMLImageElement;

  //* changing the icon
  target.parentElement?.parentElement?.parentElement?.firstElementChild?.firstElementChild?.setAttribute(
    'src',
    target.src
  );

  //* changing the name
  const theIdentifier = target.parentElement?.parentElement?.parentElement
    ?.children[1] as HTMLDivElement;
  const name = target.alt[0].toUpperCase() + target.alt.substring(1);

  theIdentifier.textContent = name;

  const data: CommentData = { expressionKey: target.alt, commentId: _id };

  await uploadComment(data);

  refetch();
};

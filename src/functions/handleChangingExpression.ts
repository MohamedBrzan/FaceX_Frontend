import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
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

const handleChangingExpression = async (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  _id: string,
  updateExpression: MutationTrigger<
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
      'PostApi'
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

  const data = {
    expressionKey: target.alt,
    postId: _id,
  };

  await updateExpression(data);

  refetch();
};
export default handleChangingExpression;

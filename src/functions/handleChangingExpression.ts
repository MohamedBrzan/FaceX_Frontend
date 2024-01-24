import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import Post from '../Interfaces/Post/Post';

type Props = {
  e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  postId?: string;
  commentId?: string;
  replyId?: string;
  updateExpression: any;
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
  >;
};

const handleChangingExpression = async ({
  e,
  postId,
  commentId,
  replyId,
  updateExpression,
  refetch,
}: Props) => {
  const target = e.target as HTMLImageElement;

  //* changing the icon
  target.parentElement?.parentElement?.parentElement?.firstElementChild?.firstElementChild?.setAttribute(
    'src',
    target.src
  );

  let theIdentifier;

  //* changing the name

  if (
    target.parentElement?.parentElement?.parentElement?.children[1]
      .getAttribute('class')
      ?.includes('identifier')
  ) {
    theIdentifier = target.parentElement?.parentElement?.parentElement
      ?.children[1] as HTMLDivElement;
    const name = target.alt[0].toUpperCase() + target.alt.substring(1);
    theIdentifier.textContent = name;
  } else {
    theIdentifier = target.parentElement?.parentElement?.parentElement
      ?.firstElementChild as HTMLDivElement;
    const name = target.alt[0].toUpperCase() + target.alt.substring(1);
    theIdentifier.textContent = name;
  }

  let data;

  if (postId) {
    data = {
      expressionKey: target.alt,
      postId,
    };
  } else if (commentId) {
    data = {
      expressionKey: target.alt,
      commentId,
    };
  } else {
    data = {
      expressionKey: target.alt,
      replyId,
    };
  }

  await updateExpression(data);

  refetch();
};
export default handleChangingExpression;

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import Post from '../../../Interfaces/Post/Post';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';

type Props = {
  postId: string;
  commentId: string;
  APIDelete: MutationTrigger<
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
  >;
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
  commentIndex: number;
};

const ActionsDropdown = ({
  postId,
  commentId,
  APIDelete,
  refetch,
  commentIndex,
}: Props) => {
  const handleDelete = async () => {
    const data = {
      ref: {
        post: postId,
      },
      commentId,
    };
    await APIDelete(data);
    refetch();
    return;
  };

  const handleActive = () => {
    Array.from(document.querySelectorAll('.actions_dropdown'))[
      commentIndex
    ]?.classList.remove('active');
  };

  return (
    <div className='actions_dropdown' onClick={handleActive}>
      <div className='actions'>
        <div className='del' onClick={handleDelete}>
          <small>Delete comment</small>
        </div>
        <div className='edit'>
          <small> Edit comment</small>
        </div>
        <div className='link'>
          <small> Copy comment link</small>
        </div>
      </div>
      <div className='actions_modal'></div>
    </div>
  );
};

export default ActionsDropdown;

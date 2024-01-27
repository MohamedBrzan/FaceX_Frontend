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
  postId?: string;
  commentId?: string;
  replyId?: string;
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
      'CommentApi' | 'ReplyApi'
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
  commentIndex?: number;
  replyIndex?: number;
  textName: string;
};

const ActionsDropdown = ({
  postId,
  commentId,
  replyId,
  APIDelete,
  refetch,
  commentIndex,
  replyIndex,
  textName,
}: Props) => {
  const handleDelete = async () => {
    let data;
    if (textName == 'comment') {
      data = {
        ref: {
          post: postId,
        },
        commentId,
      };
    } else {
      data = {
        replyId,
      };
    }
    await APIDelete(data);
    refetch();
    return;
  };

  const handleActive = () => {
    if (textName == 'comment') {
      commentIndex &&
        Array.from(document.querySelectorAll('.actions_dropdown'))[
          commentIndex
        ]?.classList.remove('active');
    } else {
      const commentCollection =
        commentIndex &&
        Array.from(document.querySelectorAll('.actions_dropdown'))[
          commentIndex
        ];
      commentCollection &&
        commentCollection[replyIndex].classList.remove('active');
    }
  };

  return (
    <div className='actions_dropdown' onClick={handleActive}>
      <div className='actions'>
        <div className='del' onClick={handleDelete}>
          <small>Delete {textName}</small>
        </div>
        <div className='edit'>
          <small> Edit {textName}</small>
        </div>
        <div className='link'>
          <small> Copy {textName} link</small>
        </div>
      </div>
      <div
        className='actions_modal'
        onClick={(e) => {
          const target = e.target as HTMLDivElement;
          target.parentElement?.classList.remove('active');
          target.parentElement?.firstElementChild?.classList.remove('active');
          target.parentElement?.lastElementChild?.classList.remove('active');
        }}
      ></div>
    </div>
  );
};

export default ActionsDropdown;

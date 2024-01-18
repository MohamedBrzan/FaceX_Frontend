import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import Reply from '../../Interfaces/Comment/Reply';
import GetUser from '../../constants/GetUser';
import { DisplayComponentFunc } from '../Comments/Comments';
import './Replies.scss';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import Post from '../../Interfaces/Post/Post';

type ReplyData = {
  replies: Reply[];
  key: number;
  toggleExpression: MutationTrigger<
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
};

const Replies = ({ replies, key, toggleExpression, refetch }: ReplyData) => {
  // console.log('Replies', replies);
  const user = GetUser;

  return (
    <section className='replies'>
      {replies?.map(
        ({ _id, user, reply, expressions, ref, visiblePrivacy }, i: number) => (
          <section className='reply' key={i}>
            {/* {DisplayComponentFunc({
              _id,
              user,
              expressions: expressions ?? {},
              message: reply,
              className: 'reply',
              key,
              toggleExpression,
              refetch,
            })} */}
          </section>
        )
      )}
      <section className='create_reply hidden'>
        <figure className='avatar'>
          <img src={user.avatar} alt='User' />
        </figure>
        <div className='input'>
          <input type='text' placeholder='what is in your mind' />
        </div>
      </section>
    </section>
  );
};

export default Replies;

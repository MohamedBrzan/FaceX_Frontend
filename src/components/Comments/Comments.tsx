import Comment from '../../Interfaces/Comment/Comment';
import GetUser from '../../constants/GetUser';
import { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import {
  useToggleCommentExpressionMutation,
  useUploadCommentMutation,
} from '../../store/apis/Comments';
import {
  BaseQueryFn,
  FetchArgs,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import Post from '../../Interfaces/Post/Post';
import DisplayComponentFunc from './Helpers/DisplayComponentFunc';
import './Comments.scss';

const Comments = (
  comments: Comment[],
  _id: string,
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
  const [message, setMessage] = useState<string>('');
  const [uploadComment] = useUploadCommentMutation();
  const [toggleExpression] = useToggleCommentExpressionMutation();
  const user = GetUser;
  return (
    <section className='comments'>
      <section className='create_comment'>
        <figure className='avatar'>
          <img src={user.avatar} alt='User' />
        </figure>

        <div className='input'>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const data = {
                message,
                visiblePrivacy: 'custom',
                ref: {
                  post: _id,
                },
              };

              await uploadComment(data);
              refetch();
            }}
          >
            <FormControl
              className='comment_input'
              type='text'
              placeholder='what is in your mind'
              required={true}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                setMessage(target.value);
              }}
            />
            <Button className='submit_btn' type='submit'>
              post
            </Button>
          </Form>
        </div>
      </section>
      {comments.map(
        (
          { _id, user, message, replies, expressions, ref, visiblePrivacy },
          i: number
        ) => (
          <section className='comment' key={i}>
            {DisplayComponentFunc({
              _id,
              user,
              expressions: expressions ?? {},
              message,
              replies,
              className: 'comment',
              key: i,
              toggleExpression,
              refetch,
            })}
          </section>
        )
      )}
      {comments?.length > 2 && (
        <div className='show_more_comments'>Load more comments</div>
      )}
    </section>
  );
};

export default Comments;

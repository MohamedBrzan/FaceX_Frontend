import Comment from '../../Interfaces/Comment/Comment';
import GetUser from '../../constants/GetUser';
import { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import {
  useToggleCommentExpressionMutation,
  useUploadCommentMutation,
} from '../../store/apis/Comments';

import DisplayCommentComponentFunc from './Helpers/DisplayCommentComponentFunc';
import './Comments.scss';
import { useGetPostQuery } from '../../store/apis/Posts';

const Comments = (comments: Comment[], postId: string) => {
  const { refetch } = useGetPostQuery(postId);
  const [uploadComment] = useUploadCommentMutation();
  const [message, setMessage] = useState<string>('');
  const [toggleExpression] = useToggleCommentExpressionMutation();
  const user = GetUser;
  const CreateComment = async () => {
    const data = {
      message,
      visiblePrivacy: 'custom',
      ref: {
        post: postId,
      },
    };

    await uploadComment(data);
    setMessage('');
  };
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
              await CreateComment();
              refetch();
            }}
          >
            <FormControl
              className='comment_input'
              type='text'
              placeholder='what is in your mind'
              required={true}
              value={message}
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
          { _id: commentId, user, message, replies, expressions },
          i: number
        ) => (
          <section className='comment' key={i}>
            {DisplayCommentComponentFunc({
              postId,
              commentId,
              user,
              expressions: expressions ?? {},
              message,
              replies,
              key: i,
              toggleExpression,
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

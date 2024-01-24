import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useUploadCommentMutation } from '../../../store/apis/Comments';
import {
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { FetchArgs } from '@reduxjs/toolkit/query';
import Post from '../../../Interfaces/Post/Post';

type Props = {
  postId: string;
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

const CreateCommentForm = ({ postId, refetch }: Props) => {
  const [uploadComment] = useUploadCommentMutation();
  const [message, setMessage] = useState<string>('');

  const CreateComment = async (postId: string) => {
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
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await CreateComment(postId);
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
  );
};

export default CreateCommentForm;

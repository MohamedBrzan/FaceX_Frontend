import { useEffect } from 'react';

import './Posts.scss';

import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import UploadPost from '../../crud/Post/CreatePost';
import { useGetPostsQuery } from '../../store/apis/Posts';
import { Each } from '../../components/Each/Each';
import Post from '../../Interfaces/Post/Post';

import SinglePost from './Helpers/SinglePost';

const Posts = () => {
  const {
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    isError,
    error,
    data: posts,
  } = useGetPostsQuery('');

  useEffect(() => {
    ChangeButtonTextContent('.post .post_head .follow_btn', 'Connected', 1);
  }, [
    posts,
    isError,
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    error,
  ]);

  return (
    <section className='posts'>
      <UploadPost />
      <hr />

      <Each
        isFetching={isFetching}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        of={posts}
        render={(post: Post, index: number) =>
          post._id && (
            <SinglePost key={index} postIndex={index} postId={post._id} />
          )
        }
      />
    </section>
  );
};

export default Posts;

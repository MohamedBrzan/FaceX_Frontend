import { useEffect, useRef, useState } from 'react';

import './Posts.scss';

import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import UploadPost from '../../crud/Post/CreatePost';
import { useGetPostsQuery } from '../../store/apis/Posts';
import { Each } from '../../components/Each/Each';
import Post from '../../Interfaces/Post/Post';
import SinglePost from './Helpers/SinglePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
  const sortingTypes = ['Recommend', 'Recently', 'New', 'Old'];
  const [sort, setSort] = useState<string>(sortingTypes[0]);
  const {
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    isError,
    error,
    data: posts,
  } = useGetPostsQuery(sort);

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
  const sortingDropDownRef = useRef<HTMLDivElement>(null);
  const handleOpenSortingDropDown = () =>
    sortingDropDownRef.current?.classList.toggle('active');

  return (
    <section className='posts'>
      <UploadPost />
      <div className='sorting'>
        <hr />
        <div className='default_sort' onClick={handleOpenSortingDropDown}>
          <small>{sort}</small>
          <span className='svg px-1'>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        <div className='sorting_drop_down' ref={sortingDropDownRef}>
          {sortingTypes.map((type, index) => (
            <div
              key={index}
              className='sorting_type'
              onClick={(e) => {
                setSort(type);
                handleOpenSortingDropDown();
              }}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
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

import { useEffect } from 'react';

import thumbsUp from '../../assets/expressions/thumbsUp.png';
import happy from '../../assets/expressions/happy.png';
import angry from '../../assets/expressions/angry.png';
import grin from '../../assets/expressions/grin.png';
import exciting from '../../assets/expressions/exciting.png';
import laugh from '../../assets/expressions/laugh.png';
import love from '../../assets/expressions/love.png';
import sad from '../../assets/expressions/sad.png';
import shock from '../../assets/expressions/shock.png';
import sick from '../../assets/expressions/sick.png';

import './Posts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faRepeat, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import UploadPost from '../../crud/Post/CreatePost';
import { useGetPostsQuery } from '../../store/apis/Posts';
import { Each } from '../../components/Each/Each';
import Post from '../../Interfaces/Post/Post';

const Posts = () => {
  const {
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    isError,
    data: posts,
  } = useGetPostsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    // if (!isFetching && !isLoading && !isError) {
    //   console.log(posts);
    // }
    Array.from(
      document.querySelectorAll('.expressions_container .expression')
    ).forEach((expression) => {
      expression.addEventListener('click', () => {
        const firstParent = expression.parentElement as HTMLDivElement;
        const secondParent = firstParent.parentElement as HTMLDivElement;
        secondParent.children[1].textContent = expression.getAttribute('title');
        const selectedImg = expression.children[0] as HTMLImageElement;
        const showInteract = secondParent.children[0]
          .children[0] as HTMLImageElement;
        showInteract.src = selectedImg.src;
      });
    });
    ChangeButtonTextContent('.post .post_head .follow_btn', 'Connected', 1);
  }, [posts, isError, isFetching, isLoading, isSuccess, isUninitialized]);

  const expressions = [
    { id: 1, name: 'Like', image: thumbsUp },
    { id: 2, name: 'Aha', image: happy },
    { id: 3, name: 'mad', image: angry },
    { id: 4, name: 'Grin', image: grin },
    { id: 5, name: 'Wow', image: exciting },
    { id: 6, name: 'Haha', image: laugh },
    { id: 7, name: 'Love', image: love },
    { id: 8, name: 'Sad', image: sad },
    { id: 9, name: 'Ops', image: shock },
    { id: 10, name: 'Sick', image: sick },
  ];

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
        render={(post: Post, index: number) => (
          <article className='post' key={index}>
            <div className='post_head'>
              <div className='user_info'>
                <figure className='avatar'>
                  <img
                    src={post.user.avatar}
                    alt={post.user.name?.additional}
                  />
                </figure>

                <div className='user'>
                  <div>
                    <strong className='username'>
                      {post.user.name?.first + ' '}
                    </strong>
                    <strong className='username'>{post.user.name?.last}</strong>
                  </div>

                  <div className='user_position'>
                    <small>{post.user.profession}</small>
                  </div>
                </div>
              </div>
              <div className='follow_btn'>
                <div className='icon'>
                  <FontAwesomeIcon icon={faUserPlus} />
                </div>
                <span className='text'>follow</span>
              </div>
            </div>

            <div className='post_body'>
              <Markdown className='content' remarkPlugins={[remarkGfm]}>
                {post.content}
              </Markdown>
            </div>
            <hr />
            <div className='post_footer'>
              <div className='interactions_icons'>
                <div className='interact expressions'>
                  <figure className='show_interact'>
                    <img src={thumbsUp} alt='Interaction Emoji' />
                  </figure>
                  <div className='identifier'>Like</div>
                  <div className='expressions_container'>
                    {expressions.map(({ name, image }, i) => (
                      <figure className='expression' key={i} title={name}>
                        <img src={image} alt={name} />
                      </figure>
                    ))}
                  </div>
                </div>
                <div className='interact comment'>
                  <FontAwesomeIcon icon={faComment} />
                  <div className='identifier'>Comment</div>
                </div>

                <div className='interact repost'>
                  <FontAwesomeIcon icon={faRepeat} />
                  <div className='identifier'>Repost</div>
                </div>
                <div className='interact send'>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <div className='identifier'>Send</div>
                </div>
              </div>
            </div>
          </article>
        )}
      />
    </section>
  );
};

export default Posts;

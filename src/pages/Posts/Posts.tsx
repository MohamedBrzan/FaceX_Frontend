import { useEffect } from 'react';

import thumbsUp from '../../assets/expressions/thumbsUp.png';
import happy from '../../assets/expressions/happy.png';
import angry from '../../assets/expressions/angry.png';
import exciting from '../../assets/expressions/exciting.png';
import laugh from '../../assets/expressions/laugh.png';
import love from '../../assets/expressions/love.png';
import sad from '../../assets/expressions/sad.png';
import shock from '../../assets/expressions/shock.png';

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
import GetExpressionsLength from '../../functions/GetExpressionsLength';

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
    if (!isFetching && !isLoading && !isError) {
      console.log(posts);
    }
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

  const UIExpressions = [
    { id: 5, name: 'like', image: thumbsUp },
    { id: 4, name: 'happy', image: happy },
    { id: 6, name: 'love', image: love },
    { id: 8, name: 'support', image: laugh },
    { id: 9, name: 'surprise', image: exciting },
    { id: 1, name: 'angry', image: angry },
    { id: 2, name: 'disgust', image: happy },
    { id: 3, name: 'fear', image: shock },
    { id: 7, name: 'sad', image: sad },
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
        render={({ user, content, expressions }: Post, index: number) => (
          <article className='post' key={index}>
            <div className='post_head'>
              <div className='user_info'>
                <figure className='avatar'>
                  <img src={user.avatar} alt={user.name?.additional} />
                </figure>

                <div className='user'>
                  <div>
                    <strong className='username'>
                      {user.name?.first + ' '}
                    </strong>
                    <strong className='username'>{user.name?.last}</strong>
                  </div>

                  <div className='user_position'>
                    <small>{user.profession}</small>
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
                {content}
              </Markdown>
            </div>
            <span className='mini_expressions'>
              {Object.keys(expressions).map((key) =>
                UIExpressions.map(
                  ({ name, image }, i) =>
                    expressions[key as keyof typeof expressions]
                      ?.values()
                      .next().value !== undefined &&
                    name == key && (
                      <figure className='expression' key={i} title={key}>
                        <img src={image} alt={key} />
                      </figure>
                    )
                )
              )}
              <span className='expressions_length'>
                {GetExpressionsLength(expressions) || null}
              </span>
            </span>
            <hr />
            <div className='post_footer'>
              <div className='interactions_icons'>
                <div className='interact expressions'>
                  <figure className='show_interact'>
                    <img src={thumbsUp} alt='Interaction Emoji' />
                  </figure>
                  <div className='identifier'>Like</div>
                  <div className='expressions_container'>
                    {UIExpressions.map(({ name, image }, i) => (
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

import { useEffect } from 'react';

import like from '../../assets/expressions/thumbsUp.png';
import happy from '../../assets/expressions/happy.png';
import angry from '../../assets/expressions/angry.png';
import surprise from '../../assets/expressions/exciting.png';
import support from '../../assets/expressions/laugh.png';
import love from '../../assets/expressions/love.png';
import sad from '../../assets/expressions/sad.png';
import disgust from '../../assets/expressions/disgust.png';
import fear from '../../assets/expressions/shock.png';

import './Posts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faRepeat, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import UploadPost from '../../crud/Post/CreatePost';
import {
  useGetPostsQuery,
  useTogglePostExpressionMutation,
} from '../../store/apis/Posts';
import { Each } from '../../components/Each/Each';
import Post from '../../Interfaces/Post/Post';
import GetExpressionsLength from '../../functions/GetExpressionsLength';
import Comments from '../../components/Comments/Comments';
import FindExpression from '../../components/FindExpression/FindExpression';
import handleChangingExpression from '../../functions/handleChangingExpression';

const Posts = () => {
  const [updateExpression] = useTogglePostExpressionMutation();

  const {
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    isError,
    error,
    data: posts,
    refetch,
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

  const UIExpressions = [
    { id: 5, name: 'like', image: like },
    { id: 4, name: 'happy', image: happy },
    { id: 6, name: 'love', image: love },
    { id: 8, name: 'support', image: support },
    { id: 9, name: 'surprise', image: surprise },
    { id: 1, name: 'angry', image: angry },
    { id: 2, name: 'disgust', image: disgust },
    { id: 3, name: 'fear', image: fear },
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
        render={(
          { _id, user, content, expressions, comments, shares }: Post,
          index: number
        ) => (
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
            <div className='post_general'>
              <div className='mini_expressions'>
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
              </div>
              <div className='interactive'>
                {comments.length > 0 && (
                  <div className='comment_length'>
                    {comments.length} comment
                  </div>
                )}
                {shares.length > 0 && (
                  <div className='comment_length'>{shares.length} shares</div>
                )}
              </div>
            </div>
            <hr />
            <div className='post_footer'>
              <div className='interactions_icons'>
                <div className='interact expressions'>
                  {FindExpression({ expressions })}

                  <div
                    className='expressions_container'
                    onClick={async (e) =>
                      await handleChangingExpression(
                        e,
                        _id,
                        updateExpression,
                        refetch
                      )
                    }
                  >
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
              <div className='post_comments'>
                {Comments(comments, _id, refetch)}
              </div>
            </div>
          </article>
        )}
      />
    </section>
  );
};

export default Posts;

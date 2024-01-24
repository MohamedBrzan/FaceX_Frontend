import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostComments from './PostComments';
import {
  faComment,
  faPaperPlane,
  faRepeat,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import FindExpression from '../../../components/FindExpression/FindExpression';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  useGetPostQuery,
  useTogglePostExpressionMutation,
} from '../../../store/apis/Posts';
import Loading from '../../../components/Loading/Loading';

import like from '../../../assets/expressions/thumbsUp.png';
import happy from '../../../assets/expressions/happy.png';
import angry from '../../../assets/expressions/angry.png';
import surprise from '../../../assets/expressions/exciting.png';
import support from '../../../assets/expressions/laugh.png';
import love from '../../../assets/expressions/love.png';
import sad from '../../../assets/expressions/sad.png';
import disgust from '../../../assets/expressions/disgust.png';
import fear from '../../../assets/expressions/shock.png';
import handleChangingExpression from '../../../functions/handleChangingExpression';

type Props = {
  postId: string;
  postIndex: number;
};

const SinglePost = ({ postId, postIndex }: Props) => {
  const { isLoading, isSuccess, data: post, refetch } = useGetPostQuery(postId);
  const [togglePostExpression] = useTogglePostExpressionMutation();

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

  const showComments = () => {
    const post = Array.from(document.querySelectorAll('.posts .post'))[
      postIndex
    ];
    post.lastElementChild?.lastElementChild?.classList.toggle('active');
  };

  return (
    <article className='post'>
      {isLoading ? (
        <Loading text='post loading...' />
      ) : (
        isSuccess && (
          <>
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
            <div className='post_general'>
              <div className='mini_expressions'>
                {Object.keys(post.expressions).map((key) =>
                  UIExpressions.map(
                    ({ name, image }, i) =>
                      post.expressions[key as keyof typeof post.expressions]
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
                  {GetExpressionsLength(post.expressions) || null}
                </span>
              </div>
              <div className='interactive'>
                <div className='comment_length'>
                  {post.comments.length || 0} comments
                </div>

                <div className='comment_length'>
                  {post.shares.length || 0} shares
                </div>
              </div>
            </div>
            <hr />
            <div className='post_footer'>
              <div className='interactions_icons'>
                <div className='interact expressions'>
                  {FindExpression({
                    expressions: post.expressions,
                  })}

                  <div
                    className='expressions_container'
                    onClick={async (e) =>
                      await handleChangingExpression({
                        e,
                        postId: post._id,
                        updateExpression: togglePostExpression,
                        refetch,
                      })
                    }
                  >
                    {UIExpressions.map(({ name, image }, i) => (
                      <figure className='expression' key={i} title={name}>
                        <img src={image} alt={name} />
                      </figure>
                    ))}
                  </div>
                </div>
                <div className='interact comment' onClick={showComments}>
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
              <PostComments
                isLoading={isLoading}
                isSuccess={isSuccess}
                comments={post.comments}
                refetch={refetch}
                postId={post._id}
              />
            </div>
          </>
        )
      )}
    </article>
  );
};

export default SinglePost;

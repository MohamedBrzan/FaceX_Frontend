import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostComment from './PostComment';
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

import handleChangingExpressionForPost from '../../../functions/handleChangingExpressionForPost';
import UIExpressions from '../../../functions/UIExpressions';
import ShowComments from './ShowComments';
import CreateCommentForm from './CreateCommentForm';
import GetUser from '../../../constants/GetUser';
import ShowMiniExpressionsIcons from '../../../functions/ShowMiniExpressionsIcons';

type Props = {
  postId: string;
  postIndex: number;
};

const SinglePost = ({ postId, postIndex }: Props) => {
  const user = GetUser;
  const { isLoading, isSuccess, data: post, refetch } = useGetPostQuery(postId);
  const [togglePostExpression] = useTogglePostExpressionMutation();
  let emojiName: string;

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
                {ShowMiniExpressionsIcons(post.expressions)}
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
                <div
                  className='interact expressions'
                  onClick={async () =>
                    await handleChangingExpressionForPost({
                      postId,
                      togglePostExpression,
                      index: postIndex,
                      emojiName,
                      refetch,
                    })
                  }
                >
                  {FindExpression({
                    expressions: post.expressions,
                  })}

                  <div className='expressions_container'>
                    {UIExpressions.map(({ name, image }, i) => (
                      <figure
                        className='expression'
                        key={i}
                        title={name}
                        onClick={() => (emojiName = name)}
                      >
                        <img src={image} alt={name} />
                      </figure>
                    ))}
                  </div>
                </div>
                <div
                  className='interact comment'
                  onClick={() => ShowComments(postIndex)}
                >
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

              <section className='post_comments'>
                <section className='comments'>
                  <section className='create_comment'>
                    <figure className='avatar'>
                      <img src={user.avatar} alt='User' />
                    </figure>

                    <div className='input'>
                      {postId && (
                        <CreateCommentForm postId={postId} refetch={refetch} />
                      )}
                    </div>
                  </section>
                  {post.comments.map((comment, commentIndex) => (
                    <PostComment
                      isLoading={isLoading}
                      isSuccess={isSuccess}
                      postIndex={postIndex}
                      comment={comment}
                      commentIndex={commentIndex}
                      commentId={comment._id}
                      emojiName={emojiName}
                      refetch={refetch}
                      postId={post._id}
                      key={commentIndex}
                    />
                  ))}
                  {post.comments?.length > 2 && (
                    <div className='show_more_comments'>Load more comments</div>
                  )}
                </section>
              </section>
            </div>
          </>
        )
      )}
    </article>
  );
};

export default SinglePost;

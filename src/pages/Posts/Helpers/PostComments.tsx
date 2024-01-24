import GetUser from '../../../constants/GetUser';
import { useToggleCommentExpressionMutation } from '../../../store/apis/Comments';
import { useToggleReplyExpressionMutation } from '../../../store/apis/Replies';
import CreateReplyForm from './CreateReplyForm';

import like from '../../../assets/expressions/thumbsUp.png';
import happy from '../../../assets/expressions/happy.png';
import angry from '../../../assets/expressions/angry.png';
import surprise from '../../../assets/expressions/exciting.png';
import support from '../../../assets/expressions/laugh.png';
import love from '../../../assets/expressions/love.png';
import sad from '../../../assets/expressions/sad.png';
import disgust from '../../../assets/expressions/disgust.png';
import fear from '../../../assets/expressions/shock.png';
import CreateCommentForm from './CreateCommentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import FindExpressionForComments from '../../../components/FindExpression/FindExpressionForComment';
import handleChangingExpression from '../../../functions/handleChangingExpression';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import Loading from '../../../components/Loading/Loading';
import Comment from '../../../Interfaces/Comment/Comment';
import Post from '../../../Interfaces/Post/Post';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';

type Props = {
  comments: Comment[];
  isLoading: boolean;
  isSuccess: boolean;
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
  postId?: string;
};

const PostComments = ({
  isLoading,
  isSuccess,
  comments,
  refetch,
  postId,
}: Props) => {
  const [toggleCommentExpression] = useToggleCommentExpressionMutation();
  const [toggleReplyExpression] = useToggleReplyExpressionMutation();
  const user = GetUser;

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

  const showReplyInput = (id: string) => {
    const comment = Array.from(
      document.querySelectorAll('.comments .comment')
    ).find((c) => c.getAttribute('data-comment') === id);

    const replyInputSection =
      comment?.firstElementChild?.lastElementChild?.lastElementChild
        ?.lastElementChild;

    replyInputSection?.classList.remove('hidden');

    const replyInput = replyInputSection?.lastElementChild
      ?.lastElementChild as HTMLInputElement;
    replyInput.focus();
  };

  const checkIdentifierName = (name: string) => {
    const condition =
      name === 'like'
        ? like
        : name === 'love'
        ? love
        : name === 'happy'
        ? happy
        : name === 'support'
        ? support
        : name === 'angry'
        ? angry
        : name === 'disgust'
        ? disgust
        : name === 'sad'
        ? sad
        : name === 'surprise'
        ? surprise
        : name === 'fear'
        ? fear
        : like;

    return condition;
  };

  return (
    <div className='post_comments'>
      {isLoading ? (
        <Loading text='loading...' />
      ) : (
        isSuccess && (
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
            {comments.map((comment, commentIndex: number) => (
              <section
                className='comment'
                key={commentIndex}
                data-comment={comment._id}
              >
                <section className='comment_info'>
                  <div className='comment_left'>
                    <figure className='avatar'>
                      <img
                        src={comment?.user?.avatar}
                        alt={`${comment.user.name?.first} ${comment.user.name?.last} avatar`}
                      />
                    </figure>
                  </div>
                  <div className='comment_right'>
                    <div className='comment_body'>
                      <div className='user_info'>
                        <div className='username'>
                          <small>
                            {' '}
                            {`${comment.user.name?.first} ${comment.user.name?.last}`}
                          </small>
                        </div>
                        <p className='user_profession'>
                          {comment.user.profession}
                        </p>
                        <p className="message`} dir='auto'">
                          {comment.message}
                        </p>
                      </div>
                      <div className='dots_icon'>
                        <FontAwesomeIcon icon={faEllipsis} />
                      </div>
                    </div>
                    <div className='comment_footer'>
                      <div className='interact expressions'>
                        {comment.expressions &&
                          FindExpressionForComments({
                            expressions: comment.expressions,
                          }).html}

                        <div
                          className='expressions_container'
                          onClick={async (e) =>
                            await handleChangingExpression({
                              e,
                              commentId: comment._id,
                              updateExpression: toggleCommentExpression,
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
                      .
                      <span className='expression_icon'>
                        <img
                          src={
                            comment.expressions &&
                            checkIdentifierName(
                              FindExpressionForComments({
                                expressions: comment.expressions,
                              }).name
                            )
                          }
                          alt='expression icon'
                        />
                        <span className='expressions_length px-1'>
                          {(comment.expressions &&
                            GetExpressionsLength(comment.expressions)) ||
                            null}
                        </span>
                      </span>
                      <span
                        className='reply'
                        onClick={() =>
                          comment._id && showReplyInput(comment._id)
                        }
                      >
                        Reply
                      </span>
                      {comment.replies?.length && (
                        <span className='replies_count'>{`${comment.replies.length} Replies`}</span>
                      )}
                    </div>

                    <section className='replies'>
                      {comment.replies?.map((reply, replyIndex: number) => (
                        <section
                          className='reply'
                          key={replyIndex}
                          data-reply={comment._id}
                        >
                          <section className='reply_info'>
                            <div className='reply_left'>
                              <figure className='avatar'>
                                <img
                                  src={reply.user.avatar}
                                  alt={`${reply.user.name?.first} ${reply.user.name?.last} avatar`}
                                />
                              </figure>
                            </div>
                            <div className='reply_right'>
                              <div className='reply_body'>
                                <div className='user_info'>
                                  <div className='username'>
                                    <small>
                                      {`${reply.user.name?.first} ${reply.user.name?.last}`}
                                    </small>
                                  </div>
                                  <p className='user_profession'>
                                    {user.profession}
                                  </p>
                                  <p className="message`} dir='auto'">
                                    {reply.reply}
                                  </p>
                                </div>
                                <div className='dots_icon'>
                                  <FontAwesomeIcon icon={faEllipsis} />
                                </div>
                              </div>
                              <div className='reply_footer'>
                                <div className='interact expressions'>
                                  {
                                    FindExpressionForComments({
                                      expressions: reply.expressions,
                                    }).html
                                  }

                                  <div
                                    className='expressions_container'
                                    onClick={async (e) =>
                                      await handleChangingExpression({
                                        e,
                                        replyId: reply._id,
                                        updateExpression: toggleReplyExpression,
                                        refetch,
                                      })
                                    }
                                  >
                                    {UIExpressions.map(({ name, image }, i) => (
                                      <figure
                                        className='expression'
                                        key={i}
                                        title={name}
                                      >
                                        <img src={image} alt={name} />
                                      </figure>
                                    ))}
                                  </div>
                                </div>
                                .
                                <span className='expression_icon'>
                                  <img
                                    src={checkIdentifierName(
                                      FindExpressionForComments({
                                        expressions: reply.expressions,
                                      }).name
                                    )}
                                    alt='expression icon'
                                  />
                                  <span className='expressions_length px-1'>
                                    {GetExpressionsLength(reply.expressions) ||
                                      null}
                                  </span>
                                </span>
                                <span
                                  className='reply'
                                  onClick={() =>
                                    comment._id && showReplyInput(comment._id)
                                  }
                                >
                                  Reply
                                </span>
                              </div>
                            </div>
                          </section>
                        </section>
                      ))}
                      <section className='create_reply hidden'>
                        <figure className='avatar'>
                          <img src={user.avatar} alt='User' />
                        </figure>

                        <div className='input'>
                          {comment._id && (
                            <CreateReplyForm
                              commentId={comment._id}
                              refetch={refetch}
                            />
                          )}
                        </div>
                      </section>
                    </section>
                  </div>
                </section>
              </section>
            ))}
            {comments?.length > 2 && (
              <div className='show_more_comments'>Load more comments</div>
            )}
          </section>
        )
      )}
    </div>
  );
};

export default PostComments;

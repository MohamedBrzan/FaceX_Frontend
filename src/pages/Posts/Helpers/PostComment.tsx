import {
  useDeleteCommentMutation,
  useToggleCommentExpressionMutation,
} from '../../../store/apis/Comments';
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
import ActionsDropdown from './ActionsDropdown';
import PostReplies from './PostReplies';
import CheckIdentifierName from '../../../functions/CheckIdentifierName';
import UIExpressions from '../../../functions/UIExpressions';
import ShowReplyInput from '../../../functions/ShowReplyInput';

type Props = {
  comment: Comment;
  commentId?: string;
  isLoading: boolean;
  isSuccess: boolean;
  commentIndex: number;
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

const PostComment = ({
  isLoading,
  isSuccess,
  comment,
  commentId,
  commentIndex,
  refetch,
  postId,
}: Props) => {
  const [toggleCommentExpression] = useToggleCommentExpressionMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const showUpDropdown = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const target = e.target as HTMLOrSVGScriptElement;
    target.nextElementSibling?.classList.add('active');
    target.nextElementSibling?.firstElementChild?.classList.add('active');
    setTimeout(
      () =>
        target.nextElementSibling?.lastElementChild?.classList.add('active'),
      1
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading text='loading...' />
      ) : (
        isSuccess && (
          <section className='comment' data-comment={commentId}>
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
                    <p className='user_profession'>{comment.user.profession}</p>
                    <p className="message`} dir='auto'">{comment.message}</p>
                  </div>
                  <div className='dots_icon'>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      onClick={(e) => showUpDropdown(e)}
                    />
                    {postId && comment._id && (
                      <ActionsDropdown
                        postId={postId}
                        commentId={comment._id}
                        refetch={refetch}
                        APIDelete={deleteComment}
                        commentIndex={commentIndex}
                      />
                    )}{' '}
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
                        CheckIdentifierName(
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
                    onClick={() => comment._id && ShowReplyInput(comment._id)}
                  >
                    Reply
                  </span>
                  {comment.replies?.length && (
                    <span className='replies_count'>{`${comment.replies.length} Replies`}</span>
                  )}
                </div>

                {comment._id && comment.replies && (
                  <PostReplies
                    replies={comment.replies}
                    commentId={comment._id}
                    refetch={refetch}
                  />
                )}
              </div>
            </section>
          </section>
        )
      )}
    </>
  );
};

export default PostComment;

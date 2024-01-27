import {
  useDeleteCommentMutation,
  useToggleCommentExpressionMutation,
} from '../../../store/apis/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import FindExpressionForComments from '../../../components/FindExpression/FindExpressionForComment';
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
import CreateReplyForm from './CreateReplyForm';
import GetUser from '../../../constants/GetUser';
import handleChangingExpressionForComment from '../../../functions/handleChangingExpressionForComment';

type Props = {
  postIndex: number;
  comment: Comment;
  commentId?: string;
  isLoading: boolean;
  isSuccess: boolean;
  commentIndex: number;
  emojiName: string;
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

export const showUpDropdown = (
  e: React.MouseEvent<SVGSVGElement, MouseEvent>
) => {
  const target = e.target as HTMLOrSVGScriptElement;
  target.nextElementSibling?.classList.toggle('active');
  target.nextElementSibling?.firstElementChild?.classList.toggle('active');
  setTimeout(
    () =>
      target.nextElementSibling?.lastElementChild?.classList.toggle('active'),
    1
  );
};

const PostComment = ({
  isLoading,
  isSuccess,
  comment,
  commentId,
  commentIndex,
  emojiName,
  refetch,
  postId,
  postIndex,
}: Props) => {
  const user = GetUser;
  const [toggleCommentExpression] = useToggleCommentExpressionMutation();
  const [deleteComment] = useDeleteCommentMutation();

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
                    <p className='message' dir='auto'>
                      {comment.message}
                    </p>
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
                        textName='comment'
                      />
                    )}
                  </div>
                </div>
                <div className='comment_footer'>
                  <div
                    className='interact expressions'
                    onClick={async () =>
                      await handleChangingExpressionForComment({
                        commentId: comment._id,
                        commentIndex,
                        toggleCommentExpression,
                        postIndex,
                        emojiName,
                        refetch,
                      })
                    }
                  >
                    {comment.expressions &&
                      FindExpressionForComments({
                        expressions: comment.expressions,
                      }).html}

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
                      alt=''
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

                <section className='replies'>
                  {commentId &&
                    comment.replies?.map((reply, replyIndex) => (
                      <PostReplies
                        postIndex={postIndex}
                        reply={reply}
                        replyIndex={replyIndex}
                        commentId={commentId}
                        commentIndex={commentIndex}
                        refetch={refetch}
                        emojiName={emojiName}
                        key={replyIndex}
                      />
                    ))}
                </section>
                <section className='create_reply hidden'>
                  <figure className='avatar'>
                    <img src={user.avatar} alt='User' />
                  </figure>

                  <div className='input'>
                    {commentId && (
                      <CreateReplyForm
                        commentId={commentId}
                        refetch={refetch}
                      />
                    )}
                  </div>
                </section>
              </div>
            </section>
          </section>
        )
      )}
    </>
  );
};

export default PostComment;

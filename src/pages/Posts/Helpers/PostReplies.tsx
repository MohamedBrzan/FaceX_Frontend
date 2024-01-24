import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reply from '../../../Interfaces/Comment/Reply';
import GetUser from '../../../constants/GetUser';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import FindExpressionForComments from '../../../components/FindExpression/FindExpressionForComment';
import handleChangingExpression from '../../../functions/handleChangingExpression';
import { useToggleReplyExpressionMutation } from '../../../store/apis/Replies';
import Post from '../../../Interfaces/Post/Post';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';

import CreateReplyForm from './CreateReplyForm';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import CheckIdentifierName from '../../../functions/CheckIdentifierName';
import UIExpressions from '../../../functions/UIExpressions';
import ShowReplyInput from '../../../functions/ShowReplyInput';

type Props = {
  replies: Reply[];
  commentId: string;
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
};

const PostReplies = ({ replies, commentId, refetch }: Props) => {
  const user = GetUser;
  const [toggleReplyExpression] = useToggleReplyExpressionMutation();

  return (
    <section className='replies'>
      {replies?.map((reply, replyIndex: number) => (
        <section className='reply' key={replyIndex} data-reply={commentId}>
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
                  <p className='user_profession'>{user.profession}</p>
                  <p className="message`} dir='auto'">{reply.reply}</p>
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
                      <figure className='expression' key={i} title={name}>
                        <img src={image} alt={name} />
                      </figure>
                    ))}
                  </div>
                </div>
                .
                <span className='expression_icon'>
                  <img
                    src={CheckIdentifierName(
                      FindExpressionForComments({
                        expressions: reply.expressions,
                      }).name
                    )}
                    alt='expression icon'
                  />
                  <span className='expressions_length px-1'>
                    {GetExpressionsLength(reply.expressions) || null}
                  </span>
                </span>
                <span
                  className='reply'
                  onClick={() => commentId && ShowReplyInput(commentId)}
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
          {commentId && (
            <CreateReplyForm commentId={commentId} refetch={refetch} />
          )}
        </div>
      </section>
    </section>
  );
};

export default PostReplies;

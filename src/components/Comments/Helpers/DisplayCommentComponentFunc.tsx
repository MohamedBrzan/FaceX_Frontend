import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import FindExpressionForComments from '../../FindExpression/FindExpressionForComment';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { MutationDefinition } from '@reduxjs/toolkit/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

import like from '../../../assets/expressions/thumbsUp.png';
import happy from '../../../assets/expressions/happy.png';
import angry from '../../../assets/expressions/angry.png';
import surprise from '../../../assets/expressions/exciting.png';
import support from '../../../assets/expressions/laugh.png';
import love from '../../../assets/expressions/love.png';
import sad from '../../../assets/expressions/sad.png';
import disgust from '../../../assets/expressions/disgust.png';
import fear from '../../../assets/expressions/shock.png';
import Reply from '../../../Interfaces/Comment/Reply';
import User from '../../../Interfaces/User/User';
import Expressions from '../../../types/Post/Expressions';

type DisplayComponent = {
  postId: string;
  commentId: string;
  user: User;
  message: string;
  expressions: Expressions;
  replies?: Reply[];
  key: number;
  toggleExpression: MutationTrigger<
    MutationDefinition<
      unknown,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      unknown,
      any
    >
  >;
};

const DisplayCommentComponentFunc = ({
  postId,
  commentId,
  user,
  message,
  expressions,
  replies,
  key,
}: DisplayComponent) => {
  // const newData = GetComment(commentId);

  const showReplyInput = () => {
    const comment = Array.from(document.querySelectorAll('.comments .comment'))[
      key
    ];

    const replyInputSection =
      comment.children[0].children[1].lastElementChild?.children[0]
        .lastElementChild;

    replyInputSection?.classList.remove('hidden');

    const replyInput = replyInputSection?.lastElementChild
      ?.lastElementChild as HTMLInputElement;
    replyInput.focus();
  };

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
        : like;

    return condition;
  };

  return (
    <section className='comment_info'>
      <div className='comment_left'>
        <figure className='avatar'>
          <img
            src={user.avatar}
            alt={`${user.name?.first} ${user.name?.last} avatar`}
          />
        </figure>
      </div>
      <div className='comment_right'>
        <div className='comment_body'>
          <div className='user_info'>
            <div className='username'>
              <small> {`${user.name?.first} ${user.name?.last}`}</small>
            </div>
            <p className='user_profession'>{user.profession}</p>
            <p className="message`} dir='auto'">{message}</p>
          </div>
          <div className='dots_icon'>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className='comment_footer'>
          <div className='interact expressions'>
            {
              FindExpressionForComments({
                expressions,
              }).html
            }

            <div
              className='expressions_container'
              // onClick={
              //   async (e) =>
              // await ToggleCommentExpressions(e, message, { post: postId }, commentId)
              // }
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
              src={checkIdentifierName(
                FindExpressionForComments({
                  expressions,
                }).name
              )}
              alt='expression icon'
            />
            <span className='expressions_length px-1'>
              {GetExpressionsLength(expressions) || null}
            </span>
          </span>
          <span className='reply' onClick={showReplyInput}>
            Reply
          </span>
          {replies?.length && (
            <span className='replies_count'>{`${replies.length} Replies`}</span>
          )}
        </div>

        <section className={`replies`}>
          {/* {Replies({
            replies: replies || [],
            key,
            refetch,
          })} */}
        </section>
      </div>
    </section>
  );
};

export default DisplayCommentComponentFunc;

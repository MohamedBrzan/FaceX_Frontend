import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateComment from '../../../functions/CreateComment';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import FindExpressionForComments from '../../FindExpression/FindExpressionForComment';
import Replies from '../../Replies/Replies';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { MutationDefinition } from '@reduxjs/toolkit/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
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
import Expressions from '../../../Types/Post/Expressions';
import Reply from '../../../Interfaces/Comment/Reply';
import User from '../../../Interfaces/User/User';
import Post from '../../../Interfaces/Post/Post';

type DisplayComponent = {
  _id: string;
  user: User;
  message: string;
  expressions: Expressions;
  replies?: Reply[];
  className: string;
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

const DisplayComponentFunc = ({
  _id,
  user,
  message,
  expressions,
  replies,
  className,
  key,
  toggleExpression,
  refetch,
}: DisplayComponent) => {
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
  return (
    <section className={`${className}_info`}>
      <div className={`${className}_left`}>
        <figure className={`avatar`}>
          <img
            src={user.avatar}
            alt={`${user.name?.first} ${user.name?.last} avatar`}
          />
        </figure>
      </div>
      <div className={`${className}_right`}>
        <div className={`${className}_body`}>
          <div className={`user_info`}>
            <div className={`username`}>
              <small> {`${user.name?.first} ${user.name?.last}`}</small>
            </div>
            <p className={`user_profession`}>{user.profession}</p>
            <p className={`message`} dir='auto'>
              {message}
            </p>
          </div>
          <div className={`dots_icon`}>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className={`${className}_footer`}>
          <div className='interact expressions'>
            {FindExpressionForComments({
              expressions,
            })}

            <div
              className='expressions_container'
              onClick={async (e) => {
                await CreateComment(e, _id, toggleExpression, refetch);
              }}
            >
              {UIExpressions.map(({ name, image }, i) => (
                <figure className='expression' key={i} title={name}>
                  <img src={image} alt={name} />
                </figure>
              ))}
            </div>
          </div>
          .
          <span className={`expression_icon`}>
            <img src={like} alt={`expression icon`} />
            <span className={`expressions_length`}>
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

        {/* <section className={`replies`}>
          {Replies({
            replies: replies || [],
            key,
            toggleExpression,
            refetch,
          })}
        </section> */}
      </div>
    </section>
  );
};

export default DisplayComponentFunc;

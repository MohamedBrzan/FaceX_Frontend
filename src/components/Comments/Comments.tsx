import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from '../../Interfaces/Comment/Comment';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import like from '../../assets/expressions/thumbsUp.png';
import Replies from '../Replies/Replies';
import './Comments.scss';
import User from '../../Interfaces/User/User';
import Reply from '../../Interfaces/Comment/Reply';
import GetUser from '../../constants/GetUser';
import GetExpressionsLength from '../../functions/GetExpressionsLength';
import Expressions from '../../Types/Post/Expressions';

type DisplayComponent = {
  user: User;
  message: string;
  expressions: Expressions;
  replies?: Reply[];
  className: string;
  key: number;
};

export const DisplayComponentFunc = ({
  user,
  message,
  expressions,
  replies,
  className,
  key,
}: DisplayComponent) => {
  const showReplyInput = () => {
    const comment = Array.from(document.querySelectorAll('.comments .comment'))[
      key
    ];

    console.log(
      'this is the reply',
      comment.children[0].children[1].lastElementChild?.children[0]
        .lastElementChild?.lastElementChild
    );

    const replyInputSection =
      comment.children[0].children[1].lastElementChild?.children[0]
        .lastElementChild;

    replyInputSection?.classList.remove('hidden');

    const replyInput = replyInputSection?.lastElementChild
      ?.lastElementChild as HTMLInputElement;
    replyInput.focus();
  };
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
            <p className={`message`}>{message}</p>
          </div>
          <div className={`dots_icon`}>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className={`${className}_footer`}>
          <span className={`identifier`}> Like</span> .
          <span className={`expression_icon`}>
            <img src={like} alt={`expression icon`} />{' '}
            <span className={`expressions_length`}>
              {GetExpressionsLength(expressions) || null}
            </span>
          </span>
          <span className='reply' onClick={showReplyInput}>
            Reply
          </span>
          {replies?.length && (
            <span className='replies_count'>
              {`${replies.length} Replies`}{' '}
            </span>
          )}
        </div>

        <section className={`replies`}>
          {Replies({
            replies: replies || [],
            key,
          })}
        </section>
      </div>
    </section>
  );
};

const Comments = (comments: Comment[]) => {
  console.log('comments', comments);
  const user = GetUser;
  return (
    <section className='comments'>
      <section className='create_comment'>
        <figure className='avatar'>
          <img src={user.avatar} alt='User' />
        </figure>
        <div className='input'>
          <input type='text' placeholder='what is in your mind' />
        </div>
      </section>
      {comments.map(
        (
          { user, message, replies, expressions, ref, visiblePrivacy },
          i: number
        ) => (
          <section className='comment' key={i}>
            {DisplayComponentFunc({
              user,
              expressions: expressions ?? {},
              message,
              replies,
              className: 'comment',
              key: i,
            })}
          </section>
        )
      )}
      {comments?.length > 2 && (
        <div className='show_more_comments'>Load more comments</div>
      )}
    </section>
  );
};

export default Comments;

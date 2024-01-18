import Reply from '../../Interfaces/Comment/Reply';
import GetUser from '../../constants/GetUser';
import { DisplayComponentFunc } from '../Comments/Comments';
import './Replies.scss';

type ReplyData = {
  replies: Reply[];
  key: number;
};

const Replies = ({ replies, key }: ReplyData) => {
  console.log('Replies', replies);
  const user = GetUser;

  return (
    <section className='replies'>
      {replies?.map(
        ({ user, reply, expressions, ref, visiblePrivacy }, i: number) => (
          <section className='reply' key={i}>
            {DisplayComponentFunc({
              user,
              expressions: expressions ?? {},
              message: reply,
              className: 'reply',
              key,
            })}
          </section>
        )
      )}
      <section className='create_reply hidden'>
        <figure className='avatar'>
          <img src={user.avatar} alt='User' />
        </figure>
        <div className='input'>
          <input type='text' placeholder='what is in your mind' />
        </div>
      </section>
    </section>
  );
};

export default Replies;

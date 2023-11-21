import me from '../../assets/me.jpg';
import './Posts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faRepeat, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Posts = () => {
  useEffect(() => {
    Array.from(document.querySelectorAll('.follow_btn')).forEach(
      (followBtn) => {
        followBtn.addEventListener(
          'click',
          () => (followBtn.children[1].textContent = 'Connected')
        );
      }
    );
  }, []);

  const fetchPosts = [
    {
      id: 1,
      user: {
        name: 'Sherif Eldeeb',
        position: 'Software Instructor | team lead | mentor | youtuber',
        avatar: me,
      },
      content: 'Junior or fresh software engineer',
      comments: [
        {
          id: 1,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
        {
          id: 2,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
        {
          id: 3,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
      ],
      expressions: {
        like: 0,
        love: 0,
        support: 0,
        sad: 0,
        happy: 0,
        angry: 0,
        disgust: 0,
        surprise: 0,
        fear: 0,
      },
    },
    {
      id: 2,
      user: {
        name: 'Sherif Eldeeb',
        position: 'Software Instructor | team lead | mentor | youtuber',
        avatar: me,
      },
      content: 'Junior or fresh software engineer',
      comments: [
        {
          id: 1,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
        {
          id: 2,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
        {
          id: 3,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
      ],
      expressions: {
        like: 0,
        love: 0,
        support: 0,
        sad: 0,
        happy: 0,
        angry: 0,
        disgust: 0,
        surprise: 0,
        fear: 0,
      },
    },
    {
      id: 3,
      user: {
        name: 'Sherif Eldeeb',
        position: 'Software Instructor | team lead | mentor | youtuber',
        avatar: me,
      },
      content: 'Junior or fresh software engineer',
      comments: [
        {
          id: 1,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
        {
          id: 2,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
        {
          id: 3,
          user: {
            name: 'mohamed',
            avatar: me,
            position: 'Software Instructor | team lead | mentor | youtuber',
          },
          message: 'Junior or fresh software engineer',
          replies: [
            {
              id: 1,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 2,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
            {
              id: 3,
              user: {
                name: 'mohamed',
                avatar: me,
                position: 'Software Instructor | team lead | mentor | youtuber',
              },
              reply: 'Junior or fresh software engineer',
              expressions: {
                like: 0,
                love: 0,
                support: 0,
                sad: 0,
                happy: 0,
                angry: 0,
                disgust: 0,
                surprise: 0,
                fear: 0,
              },
            },
          ],
          expressions: {
            like: 0,
            love: 0,
            support: 0,
            sad: 0,
            happy: 0,
            angry: 0,
            disgust: 0,
            surprise: 0,
            fear: 0,
          },
        },
      ],
      expressions: {
        like: 0,
        love: 0,
        support: 0,
        sad: 0,
        happy: 0,
        angry: 0,
        disgust: 0,
        surprise: 0,
        fear: 0,
      },
    },
  ];
  return (
    <section className='posts'>
      {fetchPosts.map(({ user, content }, i) => (
        <article className='post' key={i}>
          <div className='post_head'>
            <div className='user_info'>
              <figure className='avatar'>
                <img src={user.avatar} alt={user.name} />
              </figure>

              <div className='user'>
                <div className='username'>
                  <strong>{user.name}</strong>
                </div>

                <div className='user_position'>
                  <small>{user.position}</small>
                </div>
              </div>
            </div>
            <div className='follow_btn'>
              <div className='icon'>
                <FontAwesomeIcon icon={faUserPlus} />
              </div>{' '}
              <span className='text'>follow</span>
            </div>
          </div>

          <div className='post_body'>
            <p className='content'>{content}</p>
          </div>
          <hr />
          <div className='post_footer'>
            <div className='interactions_icons'>
              <div className='interact expressions'>
                <FontAwesomeIcon icon={faThumbsUp} />
                <div className='identifier'>Like</div>
                <div className='expressions'>
                  <div className='like'></div>
                  <div className='smile'></div>
                  <div className='sad'></div>
                  <div className='support'></div>
                  <div className='agree'></div>
                  <div className='disagree'></div>
                  <div className='love'></div>
                  <div className='thanks'></div>
                </div>
              </div>
              <div className='interact comment'>
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
          </div>
        </article>
      ))}
    </section>
  );
};

export default Posts;

import { useEffect } from 'react';

import like from '../../assets/expressions/thumbsUp.png';
import happy from '../../assets/expressions/happy.png';
import angry from '../../assets/expressions/angry.png';
import surprise from '../../assets/expressions/exciting.png';
import support from '../../assets/expressions/laugh.png';
import love from '../../assets/expressions/love.png';
import sad from '../../assets/expressions/sad.png';
import disgust from '../../assets/expressions/disgust.png';
import fear from '../../assets/expressions/shock.png';

import './Posts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faRepeat, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import UploadPost from '../../crud/Post/CreatePost';
import {
  useGetPostsQuery,
  useTogglePostExpressionMutation,
} from '../../store/apis/Posts';
import { Each } from '../../components/Each/Each';
import Post from '../../Interfaces/Post/Post';
import GetExpressionsLength from '../../functions/GetExpressionsLength';
import Expressions from '../../Types/Post/Expressions';

const Posts = () => {
  const [updateExpression] = useTogglePostExpressionMutation();

  const {
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    isError,
    error,
    data: posts,
    refetch,
  } = useGetPostsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔', error);
    if (!isFetching && !isLoading && !isError) {
      console.log(posts);
    }
    ChangeButtonTextContent('.post .post_head .follow_btn', 'Connected', 1);
  }, [
    posts,
    isError,
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    error,
  ]);

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

  const showUpExpressionsIcons = (_id: string) => {
    return UIExpressions.map(({ name, image }, i) => (
      <figure
        className='expression'
        key={i}
        title={name}
        onClick={(e) => handleExpressionButton(e, _id)}
      >
        <img src={image} alt={name} />
      </figure>
    ));
  };

  //* show up the icons when hover on like button
  const handleExpressionButton = async (
    e: React.MouseEvent<HTMLElement>,
    _id: string
  ) => {
    const target = e.target as HTMLImageElement;

    //* changing the icon
    target.parentElement?.parentElement?.parentElement?.firstElementChild?.firstElementChild?.setAttribute(
      'src',
      target.src
    );

    //* changing the name
    const theIdentifier = target.parentElement?.parentElement?.parentElement
      ?.children[1] as HTMLDivElement;
    const name = target.alt[0].toUpperCase() + target.alt.substring(1);

    theIdentifier.textContent = name;

    const data = {
      expressionKey: target.alt,
      postId: _id,
    };
    await updateExpression(data);

    refetch();
  };

  //* show the expression name and image when the user subscribe
  const findExpression = (expressions: Expressions) => {
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    let founded: boolean = false;
    let name: string = '';
    Object.keys(expressions).forEach((k) => {
      for (const subscriber of expressions[k]) {
        if (subscriber._id === user.id) {
          founded = true;
          name = k;
        }
      }
    });

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
        : fear;

    return founded ? (
      <>
        <figure className='show_interact'>
          <img src={condition} alt='Interaction Emoji' />
        </figure>

        <div className='identifier'>{name}</div>
      </>
    ) : (
      <>
        <figure className='show_interact'>
          <img src={like} alt='Interaction Emoji' />
        </figure>

        <div className='identifier'>Like</div>
      </>
    );
  };

  return (
    <section className='posts'>
      <UploadPost />
      <hr />

      <Each
        isFetching={isFetching}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        of={posts}
        render={({ _id, user, content, expressions }: Post, index: number) => (
          <article className='post' key={index}>
            <div className='post_head'>
              <div className='user_info'>
                <figure className='avatar'>
                  <img src={user.avatar} alt={user.name?.additional} />
                </figure>

                <div className='user'>
                  <div>
                    <strong className='username'>
                      {user.name?.first + ' '}
                    </strong>
                    <strong className='username'>{user.name?.last}</strong>
                  </div>

                  <div className='user_position'>
                    <small>{user.profession}</small>
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
                {content}
              </Markdown>
            </div>
            <span className='mini_expressions'>
              {Object.keys(expressions).map((key) =>
                UIExpressions.map(
                  ({ name, image }, i) =>
                    expressions[key as keyof typeof expressions]
                      ?.values()
                      .next().value !== undefined &&
                    name == key && (
                      <figure className='expression' key={i} title={key}>
                        <img src={image} alt={key} />
                      </figure>
                    )
                )
              )}
              <span className='expressions_length'>
                {GetExpressionsLength(expressions) || null}
              </span>
            </span>
            <hr />
            <div className='post_footer'>
              <div className='interactions_icons'>
                <div className='interact expressions'>
                  {findExpression(expressions)}
                  <div className='expressions_container'>
                    {showUpExpressionsIcons(_id)}
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
        )}
      />
    </section>
  );
};

export default Posts;

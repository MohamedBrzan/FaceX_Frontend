import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import cover from '../../../../assets/cover.jpeg';
import me from '../../../../assets/me.jpg';

const FeedSideBar = () => {
  return (
    <article className='feed_identity'>
      <figure className='cover'>
        <img className='cover' src={cover} alt='User Cover' />
      </figure>
      <figure className='me'>
        <img className='me' src={me} alt='User Photo' />
      </figure>
      <div className='user_info'>
        <h6 className='name'>Mohamed Brzan</h6>
        <p className='title'>
          <small>Web Developer</small>
        </p>
      </div>
      <hr />
      <div className='padding analysis'>
        <h6>Analytics & Tools</h6>
        <p>
          <small>3 Post impressions</small>
        </p>
      </div>
      <hr />
      <div className='padding items'>
        <FontAwesomeIcon icon={faBookmark} />

        <small>My items</small>
      </div>
    </article>
  );
};

export default FeedSideBar;

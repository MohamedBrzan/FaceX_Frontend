import { faHashtag, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RecentIdentity = () => {
  return (
    <article className='recent_identity'>
      <small className='padding'>Recent</small>
      <section className='general'>
        <div className='padding item'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <small>Coaching Business</small>
        </div>
        <div className='padding item'>
          <FontAwesomeIcon icon={faHashtag} /> <small>شغل</small>
        </div>
      </section>
      <Link to='/groups'>
        <small className='padding'>Groups</small>
      </Link>
      <section className='group'>
        <div className='padding item'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <small>Coaching Business</small>
        </div>
        <div className='padding item'>
          <FontAwesomeIcon icon={faHashtag} /> <small>شغل</small>
        </div>
      </section>
      <Link to='/events'>
        <small className='padding'>Events</small>
      </Link>
      <section className='events'>
        <div className='padding item'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <small>Coaching Business</small>
        </div>
        <div className='padding item'>
          <FontAwesomeIcon icon={faHashtag} /> <small>شغل</small>
        </div>
      </section>
      <hr />
      <div className='discover_btn'>
        <Link to='/'>Discover me</Link>
      </div>
    </article>
  );
};

export default RecentIdentity;

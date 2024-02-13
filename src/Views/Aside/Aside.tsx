import {
  faArrowRight,
  faInfoCircle,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../../assets/me.jpg';
import './Aside.scss';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import { useGetUsersQuery } from '../../store/apis/Users';
import { useSelector } from 'react-redux';
import FollowBtn from '../../components/FollowBtn/FollowBtn';

const Aside = () => {
  const { isLoading, isSuccess, data: users, refetch } = useGetUsersQuery('');
  const { user } = useSelector((state) => state.Auth);

  useEffect(() => {
    ChangeButtonTextContent('.add_feed .info .follow_btn', 'Connected', 1);
  }, []);
  return (
    <aside>
      {isSuccess && [users][0][1] && (
        <>
          <section className='add_feed'>
            <div className='title'>
              <div className='text'>Add to your feed</div>
              <div className='icon'>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </div>
            <div className='feeds'>
              {users.map(
                ({ _id, avatar, name, profession, followers }, i) =>
                  user?.id !== _id && (
                    <section key={i} className='feed'>
                      <figure>
                        <img src={avatar} alt={name?.first} />
                      </figure>

                      <div className='info'>
                        <div className='user'>
                          <h6 className='title'>{name?.first}</h6>
                          <p className='subtitle'>
                            <small>{profession}</small>
                          </p>
                        </div>
                        <FollowBtn
                          condition={followers.indexOf(user?.id)}
                          following={_id}
                          refetch={refetch}
                        />
                      </div>
                    </section>
                  )
              )}
            </div>
            <Link to='/networks' className='recommendations'>
              View all recommendations <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </section>
          <div className='line'></div>
        </>
      )}
      <Footer />
    </aside>
  );
};

export default Aside;

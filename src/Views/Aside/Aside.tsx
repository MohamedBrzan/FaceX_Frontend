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

const Aside = () => {
  const data = [
    {
      id: 1,
      image: me,
      title: 'المدرسة - Almdrasa',
      subtitle: 'Company • E-Learning',
    },
    {
      id: 2,
      image: me,
      title: 'W3Schools.com',
      subtitle: 'Company • E-Learning',
    },
    {
      id: 3,
      image: me,
      title: 'Mohamed Mahmoud',
      subtitle: 'Company • E-Learning',
    },
  ];
  return (
    <aside>
      <section className='add_feed'>
        <div className='title'>
          <div className='text'>Add to your feed</div>
          <div className='icon'>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>
        <div className='feeds'>
          {data.map(({ image, title, subtitle }, i) => (
            <section key={i} className='feed'>
              <figure>
                <img src={image} alt={title} />
              </figure>

              <div className='info'>
                <div className='user'>
                  <h6 className='title'>{title}</h6>
                  <p className='subtitle'>
                    <small>{subtitle}</small>
                  </p>
                </div>
                <div className='follow_btn'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <span className='text'>follow</span>
                </div>
              </div>
            </section>
          ))}
        </div>
        <Link to='/networks' className='recommendations'>
          View all recommendations <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </section>
      <div className='line'></div>
      <Footer />
    </aside>
  );
};

export default Aside;

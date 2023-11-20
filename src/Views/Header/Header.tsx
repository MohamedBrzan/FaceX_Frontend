import { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faPeopleGroup,
  faBell,
  faCommentDots,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../constants/Logo/Logo';
import './Header.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Me from '../../assets/me.jpg';

const Header = () => {
  const userRef = useRef<HTMLDivElement>(null);
  const dropMenuRef = useRef<HTMLDivElement>(null);
  const dropMenuModalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const icons = document.querySelectorAll('ul.head_icons li');
    icons.forEach((icon) => {
      icon.addEventListener('click', () => {
        icons.forEach((icon) => icon.classList.remove('active'));
        icon.classList.add('active');
      });
    });

    userRef.current?.addEventListener('click', () => {
      dropMenuRef.current?.classList.toggle('active');
      dropMenuModalRef.current?.classList.toggle('active');
    });

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        Array.from(document.querySelectorAll('a')).forEach((link) => {
          const ele = link.parentNode as HTMLLIElement;
          ele.classList.remove('active');
        });

        const a = link.parentNode as HTMLLIElement;
        a.classList.add('active');
      });
    });
  }, []);
  return (
    <header>
      <Container>
        <Row className='m-0'>
          <Col xs={12} md={6} className='mb-2'>
            <Row>
              <Col xs={4} md={4} lg={3}>
                <Logo />
              </Col>
              <Col>
                <SearchBar />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <ul className='head_icons list-unstyled'>
              <li title='Home' className='active'>
                <Link className='icon' to='/'>
                  <FontAwesomeIcon icon={faHome} />
                  <small>Home</small>
                </Link>
              </li>
              <li title='Network' className='notify'>
                <Link className='icon' to='/networks'>
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span className='badge'>99+</span>
                  <small>Networks</small>
                </Link>
              </li>
              <li title='Jobs' className='notify'>
                <Link className='icon' to='/jobs'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span className='badge'>99+</span>
                  <small>Jobs</small>
                </Link>
              </li>
              <li title='Messages' className='notify'>
                <Link className='icon' to='/messages'>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <span className='badge'>99+</span>
                  <small>Messages</small>
                </Link>
              </li>
              <li title='Notifications' className='notify'>
                <Link className='icon' to='/notifications'>
                  <FontAwesomeIcon icon={faBell} />
                  <span className='badge'>99+</span>
                  <small>Notifications</small>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <div className='user' ref={userRef}>
              <div className='user_img'>
                <img src={Me} alt='User Photo' />
              </div>
              <div className='drop_menu' ref={dropMenuRef}>
                <ul className='list-unstyled'>
                  <li>
                    <Link to='/'>
                      <small>Hello world</small>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <small>Hello world</small>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <small>Hello world</small>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <small>Hello world</small>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='drop_menu_modal' ref={dropMenuModalRef}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

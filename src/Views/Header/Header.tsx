import { useRef } from 'react';
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
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../constants/Logo/Logo';
import './Header.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import Me from '../../assets/me.jpg';

const Header = () => {
  const dropMenuRef = useRef<HTMLDivElement>(null);
  const dropMenuModalRef = useRef<HTMLDivElement>(null);

  const ShowDropdownMenu = () => {
    dropMenuRef.current?.classList.toggle('active');
    dropMenuModalRef.current?.classList.toggle('active');
  };

  return (
    <header>
      <Container>
        <Row className='m-0'>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={4} md={4} lg={3} className='logo_container'>
                <Logo />
              </Col>
              <Col>
                <SearchBar placeholder='Search' />
              </Col>
            </Row>
          </Col>
          <Col xs={10} md={4} className='head_icons_col'>
            <ul className='head_icons list-unstyled'>
              <NavLink className='icon' to='/'>
                <li title='Home' className='active'>
                  <FontAwesomeIcon icon={faHome} />
                  <small>Home</small>
                </li>
              </NavLink>
              <NavLink className='icon' to='/networks'>
                <li title='Network' className='notify'>
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span className='badge'>99+</span>
                  <small>Networks</small>
                </li>
              </NavLink>
              <NavLink className='icon' to='/jobs'>
                <li title='Jobs' className='notify'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span className='badge'>99+</span>
                  <small>Jobs</small>
                </li>
              </NavLink>
              <NavLink className='icon' to='/messages'>
                <li title='Messages' className='notify'>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <span className='badge'>99+</span>
                  <small>Messages</small>
                </li>
              </NavLink>
              <NavLink className='icon' to='/notifications'>
                <li title='Notifications' className='notify'>
                  <FontAwesomeIcon icon={faBell} />
                  <span className='badge'>99+</span>
                  <small>Notifications</small>
                </li>
              </NavLink>
            </ul>
          </Col>
          <Col xs={2} className='user_col'>
            <div className='user' onClick={ShowDropdownMenu}>
              <div className='user_img'>
                <img src={Me} alt='User Photo' />
              </div>
              <div className='user_svg'>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
              <div className='drop_menu' ref={dropMenuRef}>
                <ul className='list-unstyled'>
                  <li>
                    <NavLink to='/me/profile'>
                      <small>profile</small>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/authentication/sign_in'>
                      <small>Sign in</small>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/authentication/sign_up'>
                      <small>Sign Up</small>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>
                      <small>Home</small>
                    </NavLink>
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

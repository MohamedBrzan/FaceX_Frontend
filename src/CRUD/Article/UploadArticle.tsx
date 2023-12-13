import { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Article.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBold,
  faCaretDown,
  faCode,
  faIdCard,
  faImage,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

import me from '../../assets/me_opentowork.jpeg';
import { Link } from 'react-router-dom';

const UploadArticle = () => {
  const userButtonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownModalRef = useRef<HTMLDivElement>(null);
  const manageBtnDropdownRef = useRef<HTMLDivElement>(null);
  const manageBtnRef = useRef<HTMLDivElement>(null);
  const manageBtnModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //* Handle User Dropdown
    const button = userButtonRef?.current;
    button!.onclick = () => {
      dropdownRef.current?.classList.toggle('active');
    };

    //* Handle User Modal of Dropdown
    const userModal = dropdownModalRef?.current;
    userModal!.onclick = () => {
      dropdownRef.current?.classList.remove('active');
    };

    //*************************************************** */

    //* Handle Manage Button Dropdown

    const manageBtn = manageBtnRef?.current;
    const manageBtnModal = dropdownModalRef?.current;

    manageBtn!.onclick = () => {
      manageBtnDropdownRef.current?.classList.toggle('active');
      manageBtnModal!.classList.toggle('active');
    };

    //* Handle Manage Button Modal of Dropdown
    manageBtnModal!.onclick = () => {
      manageBtnDropdownRef.current?.classList.remove('active');
      manageBtnModal!.classList.remove('active');
    };
  }, []);

  return (
    <section className='upload_article'>
      <Container>
        <Row>
          <Col md={3}>
            <section className='user_entity'>
              <div className='information' ref={userButtonRef}>
                <figure>
                  <img src={me} alt='User Image' />
                </figure>
                <div className='info'>
                  <div className='text'>
                    <h5>
                      <small>
                        <strong>Mohamed Mahmoud</strong>
                      </small>
                    </h5>
                    <p>
                      <small>Individual Article</small>
                    </p>
                  </div>
                  <div className='svg'>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                </div>
              </div>
              <section className='user_dropdown' ref={dropdownRef}>
                <article className='publish_as'>
                  <h6 className='title'>Publish as</h6>
                  <div className='availability'>
                    <div className='info'>
                      <figure>
                        <img src={me} alt='User Image' />
                      </figure>
                      <div className='username'>
                        <h6>
                          <small>Mohamed Mahmoud</small>
                        </h6>
                      </div>
                    </div>
                    <div className='radio_1'>
                      <div className='radio_2'></div>
                    </div>
                  </div>
                </article>
                <hr />
                <article className='publish_to'>
                  <h6 className='title'>Publish as</h6>
                  <div className='availability'>
                    <div className='info'>
                      <div className='svg'>
                        <FontAwesomeIcon icon={faIdCard} />
                      </div>
                      <div className='name'>
                        <h6>
                          <small>Individual article</small>
                        </h6>
                      </div>
                    </div>{' '}
                    <div className='radio_1'>
                      <div className='radio_2'></div>
                    </div>
                  </div>
                </article>
                <div className='dropdown_modal' ref={dropdownModalRef}></div>
              </section>
            </section>
          </Col>
          <Col md={6}>
            <section className='styling'>
              <div className='style_btn clickable'>
                <div className='text'>Style</div>
                <div className='svg'>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
              <div className='bold clickable'>
                <FontAwesomeIcon icon={faBold} />
              </div>
              <div className='italic clickable'>
                <FontAwesomeIcon icon={faItalic} />
              </div>
              <div className='unorder_list clickable'>
                <FontAwesomeIcon icon={faListUl} />
              </div>
              <div className='order_list clickable'>
                <FontAwesomeIcon icon={faListOl} />
              </div>
              <div className='quote_right clickable'>
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className='parentheses clickable'>{`{ }`}</div>
              <div className='link clickable'>
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className='code clickable'>
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className='image clickable'>
                <FontAwesomeIcon icon={faImage} />
              </div>
            </section>
          </Col>
          <Col md={3}>
            <section className='buttons'>
              <div className='manage_btn' ref={manageBtnRef}>
                <div className='text'>Manage</div>
                <div className='svg'>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className='manage_btn_dropdown' ref={manageBtnDropdownRef}>
                  <div className='dropdown_links'>
                    <Link to='/seo/settings'>SEO settings</Link>
                    <hr />
                    <Link to='/drafts'>Drafts</Link>
                    <Link to='/scheduled'>Scheduled</Link>
                    <Link to='/published'>Published</Link>
                    <Link to='/published'>Published</Link>
                    <hr />
                    <Link to='/upload/article'>Create article</Link>
                    <Link to='/upload/newsletters'>Create newsletters</Link>
                    <Link to='/help'>Help</Link>
                    <Link to='/feedback'>Give feedback</Link>
                  </div>
                  <div
                    className='manage_btn_modal'
                    ref={manageBtnModalRef}
                  ></div>
                </div>
              </div>
              <div className='next_btn'>
                <div className='text'>Next</div>
                <div className='svg'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UploadArticle;

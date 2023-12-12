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

const UploadArticle = () => {
  return (
    <section className='upload_article'>
      <Container>
        <Row>
          <Col md={3}>
            <section className='user_entity'>
              <div className='information'>
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
              <section className='user_dropdown'>
                <article className='publish_as'>
                  <h6 className='title'>Publish as</h6>
                  <div className='availability'>
                    <div className='user_info'>
                      <figure>
                        <img src={me} alt='User Image' />
                      </figure>
                      <div className='username'>
                        <h6>
                          <small>Mohamed Mahmoud</small>
                        </h6>
                      </div>
                    </div>
                  </div>
                </article>
                <hr />
                <article className='publish_to'>
                  <h6 className='title'>Publish as</h6>
                  <div className='availability'>
                    <div className='svg'>
                      <FontAwesomeIcon icon={faIdCard} />
                    </div>
                    <div className='name'>
                      <h6>
                        <small>Individual article</small>
                      </h6>
                    </div>
                  </div>
                </article>
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
              <div className='manage_btn'>
                <div className='text'>Manage</div>
                <div className='svg'>
                  <FontAwesomeIcon icon={faCaretDown} />
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

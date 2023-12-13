import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const ArticleBody = () => {
  return (
    <section className='article_body'>
      <Container>
        <article className='upload_image'>
          <div className='svg'>
            <FontAwesomeIcon icon={faImage} size='4x' />
          </div>
          <p>
            <small>
              We recommend uploading or dragging in an image that is{' '}
              <strong>1920x1080 pixels</strong>
            </small>
          </p>
          <div className='upload_image_btn'>
            <div className='svg'>
              <FontAwesomeIcon icon={faUpload} />
            </div>
            <div className='text'>Upload from computer</div>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default ArticleBody;

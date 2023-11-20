import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Home.scss';
import Col from 'react-bootstrap/esm/Col';
import Posts from '../../components/Posts/Posts';

const Home = () => {
  return (
    <section className='home'>
      <Container>
        <Row>
          <Col md={3}>hi</Col>
          <Col >
            <Posts />
          </Col>
          <Col md={3}>holla</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

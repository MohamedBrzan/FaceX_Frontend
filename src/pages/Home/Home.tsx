import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../Views/SideBar/SideBar';
import Aside from '../../Views/Aside/Aside';
import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <SideBar />
          </Col>
          <Col md={6}>
            <Posts />
          </Col>
          <Col md={3} className='aside_col'>
            <Aside />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

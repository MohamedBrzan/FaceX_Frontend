import Container from 'react-bootstrap/esm/Container';
import JobsView from './Helpers/JobsView';
import LeftAside from './Helpers/LeftAside';
import RightAside from './Helpers/RightAside';
import './Jobs.scss';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Jobs = () => {
  return (
    <section className='jobs'>
      <Container>
        <Row>
          <Col md={4} lg={3}>
            <LeftAside />
          </Col>
          <Col md={6} >
            <JobsView />
          </Col>
          <Col lg={3}>
            <RightAside />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Jobs;

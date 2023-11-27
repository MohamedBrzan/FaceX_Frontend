import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import NetworksAside from './Helpers/NetworksAside';
import DiscoverNetworks from './Helpers/DiscoverNetworks';
import './Networks.scss';

const Networks = () => {
  return (
    <section className='networks'>
      <Container>
        <Row>
          <Col md={4}>
            <NetworksAside />
          </Col>
          <Col md={8}>
            <DiscoverNetworks />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Networks;

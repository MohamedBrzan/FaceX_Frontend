import Container from 'react-bootstrap/esm/Container';
import Aside from './Helpers/Aside';
import Chat from './Helpers/Chat';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Messages.scss';

const Messages = () => {
  return (
    <section className='messages'>
      <Container>
        <Row>
          <Col md={8}>
            <Chat />
          </Col>
          <Col md={3}>
            <Aside />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Messages;

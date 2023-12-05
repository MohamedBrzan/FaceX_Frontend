// import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import JobsView from './Helpers/JobsView';
import LeftAside from './Helpers/LeftAside';
import RightAside from './Helpers/RightAside';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Jobs.scss';

const Jobs = () => {
  // const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
  //   useGetJobQuery('');

  // useEffect(() => {
  //   if (isFetching) console.log('fetching...');
  //   if (isLoading) console.log('loading...');
  //   if (isSuccess) console.log('success ✌️');
  //   if (isUninitialized) console.log('uninitialized 🤔');
  //   if (isError) console.log('error 🤔');
  //   console.log(data);
  // }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return (
    <section className='jobs'>
      <Container>
        <Row>
          <Col md={4} lg={3}>
            <LeftAside />
          </Col>
          <Col md={6}>
            <JobsView />
          </Col>
          <Col md={3}>
            <RightAside />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Jobs;

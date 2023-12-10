import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from '../../Views/Footer/Footer';
import './Authentication.scss';

const SignUp = () => {
  return (
    <section className='authentication sign_up'>
      <section className='form'>
        <h2>Sign up</h2>
        <p>
          <small>Make the most of your professional life</small>
        </p>
        <Form>
          <FormGroup className='mb-3'>
            <FormControl type='text' placeholder='first name' required />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormControl type='text' placeholder='last name' required />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormControl type='email' placeholder='Email or Phone' required />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormControl type='password' placeholder='Password' required />
          </FormGroup>

          <Button type='submit' className='submit_btn'>
            Sign In
          </Button>
        </Form>
        <div className='hr'>
          <hr />
          <div className='or'>or</div>
        </div>
        <div className='auth_btn'>Sign in with Apple</div>
        <div className='auth_btn'>Sign in with Google</div>
        <div className='auth_btn'>Sign in with Gmail</div>
      </section>
      <div className='sign_in'>
        You already in FaceX? <Link to='/authentication/sign_in'>sign in</Link>
      </div>
      <Footer />
    </section>
  );
};

export default SignUp;

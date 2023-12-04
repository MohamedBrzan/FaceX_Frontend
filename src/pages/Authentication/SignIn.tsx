import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from '../../Views/Footer/Footer';
import './Authentication.scss';

const SignIn = () => {
  return (
    <section className='authentication sign_in'>
      <section className='form'>
        <h5>
          <small>Sign in</small>
        </h5>
        <p>
          <small>Stay updated on your professional world</small>
        </p>
        <Form>
          <FormGroup className='mb-3'>
            <FormControl type='email' placeholder='Email or Phone' required />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormControl type='password' placeholder='Password' required />
          </FormGroup>
          <div className='forget_password'>
            <Link to='/forget_password'>Forget Password?</Link>
          </div>
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
      <div className='sign_up'>
        New in FaceX?{' '}
        <Link to='/authentication/sign_up' className='join_now'>
          Join now
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default SignIn;

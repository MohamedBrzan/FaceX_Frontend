import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from '../../Views/Footer/Footer';
import Input from '../../components/Input/Input';
import appleImg from '../../assets/apple.png';
import googleImg from '../../assets/google_logo.jpeg';
import facebookImg from '../../assets/facebook.png';
import './Authentication.scss';

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <section className='authentication sign_up'>
      <section className='form'>
        <h2>Sign up</h2>
        <p>
          <small>Make the most of your professional life</small>
        </p>
        <Form>
          <FormGroup className='mb-3'>
            <Input
              value={firstName}
              type='text'
              placeholder='First Name'
              label='First Name'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const targetVal = e.target as HTMLInputElement;
                setFirstName(targetVal.value);
              }}
              required={true}
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <Input
              value={lastName}
              type='text'
              placeholder='Last Name'
              label='Last Name'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const targetVal = e.target as HTMLInputElement;
                setLastName(targetVal.value);
              }}
              required={true}
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <Input
              value={email}
              type='email'
              placeholder='Email Address'
              label='Email Address'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const targetVal = e.target as HTMLInputElement;
                setEmail(targetVal.value);
              }}
              required={true}
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <Input
              value={password}
              type='password'
              placeholder='Password'
              label='Password'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const targetVal = e.target as HTMLInputElement;
                setPassword(targetVal.value);
              }}
              required={true}
            />
          </FormGroup>

          <Button type='submit' className='submit_btn'>
            Sign Up
          </Button>
        </Form>
        <div className='hr'>
          <hr />
          <div className='or'>or</div>
        </div>
        <p className='notice'>
          By clicking Continue, you agree to LinkedIn’s User Agreement,
          <Link to='/privacy_policy'>Privacy Policy</Link>, and
          <Link to='/cookie_policy'>Cookie Policy</Link> .
        </p>
        <div className='auth_btn'>
          <figure>
            <img src={appleImg} alt='Google Sign in' />
          </figure>
          <span> Sign in with Apple</span>
        </div>
        <div className='auth_btn'>
          <figure>
            <img src={googleImg} alt='Google Sign in' />
          </figure>
          <span> Sign in with Google</span>
        </div>
        <div className='auth_btn'>
          <figure>
            <img src={facebookImg} alt='Google Sign in' />
          </figure>
          <span> Sign in with Facebook</span>
        </div>
      </section>
      <div className='sign_in'>
        You already in FaceX? <Link to='/authentication/sign_in'>sign in</Link>
      </div>
      <Footer />
    </section>
  );
};

export default SignUp;

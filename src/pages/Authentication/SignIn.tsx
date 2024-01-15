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
import { useSignInMutation } from '../../store/apis/Authentication';
import Loading from '../../components/Loading/Loading';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signIn, { isLoading, isError, error, data }] = useSignInMutation({
    fixedCacheKey: 'signIn',
  });
  if (!isLoading) {
    console.log('userData =>', data);
  }
  return (
    <section className='authentication sign_in'>
      <section className='form'>
        <h2>Sign in</h2>
        <p>
          <small>Stay updated on your professional world</small>
        </p>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const loginData = {
              username: email,
              password,
            };
            await signIn(loginData);

            if (isError) {
              console.log('error', error);
            }
          }}
        >
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
          <div className='forget_password'>
            <Link to='/forget_password'>Forget Password?</Link>
          </div>
          <Button type='submit' className='submit_btn'>
            {isError ? (
              'error'
            ) : isLoading ? (
              <Loading text='signing in .....' />
            ) : (
              'Sign In'
            )}
          </Button>
        </Form>
        <div className='hr'>
          <hr />
          <div className='or'>or</div>
        </div>
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
      <div className='sign_up'>
        New in FaceX?
        <Link to='/authentication/sign_up' className='join_now'>
          Join now
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default SignIn;

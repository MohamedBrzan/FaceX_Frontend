import { Link, Route, Routes } from 'react-router-dom';
import UserNetwork from '../pages/Networks/Networks';
import Jobs from '../pages/Jobs/Jobs';
import Home from '../pages/Home/Home';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';
import User from '../pages/Users/Users';
import Admin from '../pages/Admin/Admin';
import Profile from '../pages/Profile/Profile';
import CreateAd from '../crud/Ad/CreateAd';
import CreateBlog from '../crud/Blog/CreateBlog';
import CreatePayment from '../crud/Payment/CreatePayment';
import CreateReel from '../crud/Reel/CreateReel';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import CreateArticle from '../crud/Article/Create/CreateArticle';
import UploadPost from '../forms/UploadPost/UploadPost';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const { user } = useSelector((state) => state.Auth);
  return (
    <Routes>
      <Route path='/'>
        {user ? (
          <>
            <Route index element={<Home />} />
            <Route path='/networks' element={<UserNetwork />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/me/profile' element={<Profile />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user/:id' element={<User />} />
            //** Create Section **/
            <Route path='/create/'>
              <Route path='ad' element={<CreateAd />} />
              <Route path='article' element={<CreateArticle />} />
              <Route path='blog' element={<CreateBlog />} />
              <Route path='payment' element={<CreatePayment />} />
              <Route path='reel' element={<CreateReel />} />
            </Route>
            //** Upload Section ( for pages that have form for upload a topic )
            **/
            <Route path='/upload/'>
              <Route path='post' element={<UploadPost />} />
            </Route>
            //** Authentication Section **/
            <Route path='/authentication/'>
              <Route path='sign_up' element={<SignUp />} />
              <Route path='sign_in' element={<SignIn />} />
            </Route>
          </>
        ) : (
          <>
            <Route index element={<SignIn />} />
            <Route path='/authentication/sign_in' element={<SignIn />} />
            <Route path='/authentication/sign_up' element={<SignUp />} />
          </>
        )}
      </Route>
      <Route
        path='*'
        element={
          <Link to='/' className='not_found_link'>
            Go Back To Home
          </Link>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

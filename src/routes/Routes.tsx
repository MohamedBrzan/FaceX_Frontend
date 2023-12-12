import { Link, Route, Routes } from 'react-router-dom';
import UserNetwork from '../pages/Networks/Networks';
import Jobs from '../pages/Jobs/Jobs';
import Home from '../pages/Home/Home';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';
import User from '../pages/Users/Users';
import Admin from '../pages/Admin/Admin';
import Profile from '../pages/Profile/Profile';
import UploadAd from '../CRUD/Ad/UploadAd';
import UploadBlog from '../CRUD/Blog/UploadBlog';
import UploadPayment from '../CRUD/Payment/UploadPayment';
import UploadReel from '../CRUD/Reel/UploadReel';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import UploadArticle from '../CRUD/Article/UploadArticle';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='/networks' element={<UserNetwork />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/me/profile' element={<Profile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user/:id' element={<User />} />
        //** Upload Section **/
        <Route path='/upload/ad' element={<UploadAd />} />
        <Route path='/upload/article' element={<UploadArticle />} />
        <Route path='/upload/blog' element={<UploadBlog />} />
        <Route path='/upload/payment' element={<UploadPayment />} />
        <Route path='/upload/reel' element={<UploadReel />} />
        //** Authentication Section **/
        <Route path='/authentication/sign_up' element={<SignUp />} />
        <Route path='/authentication/sign_in' element={<SignIn />} />
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

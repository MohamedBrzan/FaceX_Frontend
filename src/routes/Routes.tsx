import { Link, Route, Routes } from 'react-router-dom';
import UserNetwork from '../pages/Networks/Networks';
import Jobs from '../pages/Jobs/Jobs';
import Home from '../pages/Home/Home';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';
import User from '../pages/User/User';
import Admin from '../pages/Admin/Admin';
import Profile from '../pages/Profile/Profile';
import PostAd from '../CRUD/Ad/PostAd';
import PostBlog from '../CRUD/Blog/PostBlog';
import PostPayment from '../CRUD/Payment/PostPayment';
import PostReel from '../CRUD/Reel/PostReel';

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
        <Route path='/ad/post' element={<PostAd />} />
        <Route path='/blog/post' element={<PostBlog />} />
        <Route path='/payment/post' element={<PostPayment />} />
        <Route path='/reel/post' element={<PostReel />} />
      </Route>
      <Route
        path='*'
        element={
          <>
            <h1>Page Not Found !</h1>
            <Link to='/'>Go Back To Home</Link>
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

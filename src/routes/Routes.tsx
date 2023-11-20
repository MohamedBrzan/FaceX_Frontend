import { Link, Route, Routes } from 'react-router-dom';
import UserNetwork from '../pages/UserNetwork/UserNetwork';
import Jobs from '../pages/Jobs/Jobs';
import Home from '../pages/Home/Home';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='/networks' element={<UserNetwork />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/notifications' element={<Notifications />} />
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

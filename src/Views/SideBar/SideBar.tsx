import FeedIdentity from './Helpers/FeedIdentity/FeedIdentity.tsx';
import RecentIdentity from './Helpers/RecentIdentity/RecentIdentity.tsx';
import './SideBar.scss';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <FeedIdentity />
      <RecentIdentity />
    </section>
  );
};

export default SideBar;

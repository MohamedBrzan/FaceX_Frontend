import './SideBar.scss';
import FeedIdentity from './helpers/FeedIdentity/FeedIdentity';
import RecentIdentity from './helpers/RecentIdentity/RecentIdentity';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <FeedIdentity />
      <RecentIdentity />
    </section>
  );
};

export default SideBar;

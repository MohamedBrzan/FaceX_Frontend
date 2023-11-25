import './SideBar.scss';
import FeedIdentity from './Helpers/FeedIdentity/FeedIdentity';
import RecentIdentity from './Helpers/RecentIdentity/RecentIdentity';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <FeedIdentity />
      <RecentIdentity />
    </section>
  );
};

export default SideBar;

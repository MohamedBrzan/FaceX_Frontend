import React from 'react';
import FeedIdentity from './Helpers/FeedIdentity/FeedIdentity';
import RecentIdentity from './Helpers/RecentIdentity/RecentIdentity';
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

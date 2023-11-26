import PeopleViewed from './Helpers/PeopleViewed';
import ProfileActions from './Helpers/ProfileActions';

const ProfileAside = () => {
  return (
    <aside>
      <ProfileActions />
      <div className='line'></div>
      <PeopleViewed />
    </aside>
  );
};

export default ProfileAside;

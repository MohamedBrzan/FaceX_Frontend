import Activity from './Helpers/Activity';
import Analytics from './Helpers/Anlaystics';
import Info from './Helpers/Info';

const ProfileSections = () => {
  return (
    <section className='profile_sections'>
      <Analytics />
      <Info />
      <Activity />
    </section>
  );
};

export default ProfileSections;

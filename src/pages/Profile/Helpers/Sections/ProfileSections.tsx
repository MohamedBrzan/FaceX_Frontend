import About from './Helpers/About';
import Activity from './Helpers/Activity';
import Analytics from './Helpers/Anlaystics';
import Experience from './Helpers/Experience';
import Info from './Helpers/Info';

const ProfileSections = () => {
  return (
    <section className='profile_sections'>
      <Analytics />
      <Info />
      <Activity />
      <About />
      <Experience />
    </section>
  );
};

export default ProfileSections;

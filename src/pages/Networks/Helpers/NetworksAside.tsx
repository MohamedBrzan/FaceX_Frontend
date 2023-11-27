import {
  faAngleUp,
  faCalendar,
  faContactBook,
  faHashtag,
  faNewspaper,
  faPager,
  faUserGroup,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NetworksAside = () => {
  const links = [
    {
      id: 1,
      name: 'Connections',
      svg: <FontAwesomeIcon icon={faUserGroup} />,
      counts: 233,
    },
    {
      id: 2,
      name: 'Contacts',
      svg: <FontAwesomeIcon icon={faContactBook} />,
      counts: 12,
    },
    {
      id: 3,
      name: 'Following & Followers',
      svg: <FontAwesomeIcon icon={faUserPlus} />,
      counts: 455,
    },
    {
      id: 4,
      name: 'Group',
      svg: <FontAwesomeIcon icon={faUserGroup} />,
      counts: 60,
    },
    {
      id: 5,
      name: 'Events',
      svg: <FontAwesomeIcon icon={faCalendar} />,
      counts: 19,
    },
    {
      id: 6,
      name: 'Pages',
      svg: <FontAwesomeIcon icon={faPager} />,
      counts: 234,
    },
    {
      id: 7,
      name: 'Newsletters',
      svg: <FontAwesomeIcon icon={faNewspaper} />,
      counts: 79,
    },
    {
      id: 8,
      name: 'Hashtag',
      svg: <FontAwesomeIcon icon={faHashtag} />,
      counts: 23,
    },
  ];
  return (
    <aside className='aside_networks'>
      <article className='head'>
        <h6 className='title'>
          <small>Manage my networks</small>
        </h6>
      </article>
      <article className='links_management'>
        {links.map(({ name, svg, counts }, i) => (
          <section className='link_management' key={i}>
            <div className='info'>
              <div className='svg'>{svg} </div>
              <div className='name'>{name}</div>
            </div>
            <div className='counts'>{counts}</div>
          </section>
        ))}
      </article>
      <button>
        Show Less
        <span className='icon'>
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </button>
    </aside>
  );
};

export default NetworksAside;

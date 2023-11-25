import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Activity = () => {
  const switchBtn = () => {
    const switches = Array.from(
      document.querySelectorAll('section.activity article.switches .switch')
    ) as HTMLDivElement[];

    switches.forEach((sw) => {
      sw.onclick = (btn) => {
        switches.forEach((swi) => swi.classList.remove('selected'));
        const button = btn.target as HTMLDivElement;
        button.classList.add('selected');
      };
    });
  };
  return (
    <section className='activity'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>Activity</small>
          </h4>

          <Link to='/followers'>
            <small>200 followers</small>
          </Link>
        </div>
        <div className='actions'>
          <div className='create_btn'>Create a post</div>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </article>
      <article className='switches'>
        <div className='switch' onClick={switchBtn}>
          Posts
        </div>
        <div className='switch' onClick={switchBtn}>
          Comments
        </div>
        <div className='switch' onClick={switchBtn}>
          Images
        </div>
        <div className='switch' onClick={switchBtn}>
          Documents
        </div>
      </article>
    </section>
  );
};

export default Activity;

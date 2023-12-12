import me from '../../assets/me.jpg';
import media from '../../assets/media.svg';
import event from '../../assets/event.svg';
import writeArticle from '../../assets/article.svg';
import './Post.scss';

const UploadPost = () => {
  return (
    <section className='create_post'>
      <div className='text'>
        <figure className='avatar'>
          <img src={me} alt='User' />
        </figure>
        <div className='input'>
          <input type='text' placeholder='Start a post' />
        </div>
      </div>
      <div className='files'>
        <div className='file media'>
          <figure>
            <img src={media} alt='User' />
          </figure>
          <div className='text'> media</div>
        </div>
        <div className='file event'>
          <figure>
            <img src={event} alt='User' />
          </figure>
          <div className='text'> Event</div>
        </div>
        <div className='file article'>
          <figure>
            <img src={writeArticle} alt='User' />
          </figure>
          <div className='text'> write article</div>
        </div>
      </div>
    </section>
  );
};

export default UploadPost;

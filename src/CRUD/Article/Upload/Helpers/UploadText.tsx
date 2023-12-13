import Container from 'react-bootstrap/Container';

const UploadText = () => {
  return (
    <section className='upload_text'>
      <Container className='p-0'>
        <section className='input_section'>
          <div
            className='textarea title'
            role='textbox'
            contentEditable
            onClick={(e) => {
              const target = e.target as HTMLDivElement;
              if (target.textContent == 'Title') {
                target.textContent = '';
              }
            }}
            onBlur={(e) => {
              const target = e.target as HTMLDivElement;
              if (target.textContent == '') {
                target.textContent = 'Title';
                target.classList.remove('active');
              }
            }}
            onInput={(e) => {
              const target = e.target as HTMLDivElement;
              target.classList.add('active');
            }}
          >
            Title
          </div>
          <div className='textarea description' role='textbox' contentEditable>
            write here. You can also use @mentions.
          </div>
        </section>
      </Container>
    </section>
  );
};

export default UploadText;

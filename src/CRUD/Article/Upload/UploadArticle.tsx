import { useEffect, useRef } from 'react';
import ArticleHeader from './Helpers/ArticleHeader';
import '../Article.scss';
import ArticleBody from './Helpers/ArticleBody';

const UploadArticle = () => {
  const userButtonRef = useRef<HTMLDivElement>(null);
  const userDropDownRef = useRef<HTMLDivElement>(null);
  const manageBtnRef = useRef<HTMLDivElement>(null);
  const manageBtnDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //* Handle User Dropdown
    const userDropDownbutton = userButtonRef?.current;
    userDropDownbutton!.onclick = () => {
      userDropDownRef.current?.classList.toggle('active');
    };

    //*************************************************** */

    // //* Handle Manage Button Dropdown

    //* Handle User Dropdown
    const manageBtn = manageBtnRef?.current;
    manageBtn!.onclick = () => {
      manageBtnDropdownRef.current?.classList.toggle('active');
    };
  }, []);

  const handleUserDropDownModalOnClick = () =>
    userDropDownRef.current?.classList.remove('active');

  const handleManageModalOnClick = () =>
    manageBtnDropdownRef.current?.classList.remove('active');

  return (
    <section className='upload_article'>
      <ArticleHeader
        userButtonRef={userButtonRef}
        userDropDownRef={userDropDownRef}
        manageBtnRef={manageBtnRef}
        manageBtnDropdownRef={manageBtnDropdownRef}
        handleUserDropDownModalOnClick={handleUserDropDownModalOnClick}
        handleManageModalOnClick={handleManageModalOnClick}
      />
      <ArticleBody />
    </section>
  );
};

export default UploadArticle;

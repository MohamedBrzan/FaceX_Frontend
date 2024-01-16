import Blog from '../Interfaces/Blog/Blog';
import Hashtag from '../Interfaces/Hashtag/Hashtag';
import Job from '../Interfaces/Job/Job';
import Post from '../Interfaces/Post/Post';

export default (item: Post | Blog | Hashtag | Job) => {
  // const authorizedUser = JSON.parse(localStorage.getItem('user') as string);

  console.log('item', item);

  // const images = {
  //   like: 'http://localhost:5173/src/assets/expressions/thumbsUp.png',
  //   love: 'http://localhost:5173/src/assets/expressions/love.png',
  //   angry: 'http://localhost:5173/src/assets/expressions/angry.png',
  //   happy: 'http://localhost:5173/src/assets/expressions/happy.png',
  //   support: 'http://localhost:5173/src/assets/expressions/support.png',
  //   surprise: 'http://localhost:5173/src/assets/expressions/surprise.png',
  //   disgust: 'http://localhost:5173/src/assets/expressions/disgust.png',
  //   fear: 'http://localhost:5173/src/assets/expressions/shock.png',
  //   sad: 'http://localhost:5173/src/assets/expressions/sad.png',
  // };

  // for (const [key, value] of Object.entries(expressions)) {
  //   for (const person of value) {
  //     if (authorizedUser !== null) {
  //       if (person._id === authorizedUser.id) {
  //         return { found: true, key, image: images[`${key}`] };
  //       }
  //     } else {
  //       return { found: null, key: null, image: null };
  //     }
  //   }
  // }
};

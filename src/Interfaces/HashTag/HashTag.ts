import User from '../User/User';

interface Hashtag {
  user: User;
  text: string;
  followers: User[];
}

export default Hashtag;

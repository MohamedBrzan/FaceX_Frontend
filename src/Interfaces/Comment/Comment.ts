import Expressions from '../../types/Post/Expressions';
import VisiblePrivacy from '../../enums/VisiblePrivacy';
import Blog from '../Blog/Blog';
import Post from '../Post/Post';
import User from '../User/User';
import Reply from './Reply';

interface Comment {
  user: User;
  ref: {
    post?: Post;
    blog?: Blog;
  };
  message: string;
  replies: Reply[];
  expressions: Expressions;
  visiblePrivacy: VisiblePrivacy;
}

export default Comment;

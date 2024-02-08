import PostStatus from '../../enums/PostStatus';
import VisiblePrivacy from '../../enums/VisiblePrivacy';
import Expressions from '../../types/Post/Expressions';
import Comment from '../Comment/Comment';
import User from '../User/User';

interface Post {
  _id?: string;
  images?: string[];
  videos?: string[];
  content: string;
  status: PostStatus;
  user: User;
  comments: Comment[];
  expressions: Expressions;
  shares: User[];
  saves: User[];
  visiblePrivacy: VisiblePrivacy;
}

export default Post;

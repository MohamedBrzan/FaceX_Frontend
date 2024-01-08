import Expressions from '../../types/Post/GeneralExpressions';
import VisiblePrivacy from '../../enums/VisiblePrivacy';
import User from '../User/User';
import Comment from './Comment';

interface Reply {
  user: User;
  ref: Comment;
  reply: string;
  expressions: Expressions;
  visiblePrivacy: VisiblePrivacy;
}

export default Reply;

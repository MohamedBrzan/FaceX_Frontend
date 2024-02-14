import GetUser from '../../constants/GetUser';
import Expressions from '../../types/Post/Expressions';

type Props = {
  expressions: Expressions;
};

//* show the expression name and imageB when the user subscribe
const FindExpressionForComments = (props: Props) => {
  const user = GetUser;
  const { expressions } = props;

  let name: string = '';

  Object.keys(expressions).forEach((k) => {
    for (const subscriber of expressions[k as keyof typeof Expressions]) {
      if (subscriber === user._id) {
        name = k;
      }
    }
  });

  return { html: <div className='identifier'>{name || 'like'}</div>, name };
};

export default FindExpressionForComments;

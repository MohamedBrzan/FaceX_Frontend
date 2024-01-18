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
      if (subscriber === user.id) {
        name = k;
      }
    }
  });

  return <div className='identifier'>{name || 'Like'}</div>;
};

export default FindExpressionForComments;

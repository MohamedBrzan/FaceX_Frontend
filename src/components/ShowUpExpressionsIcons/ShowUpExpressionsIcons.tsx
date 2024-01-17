import like from '../../assets/expressions/thumbsUp.png';
import happy from '../../assets/expressions/happy.png';
import angry from '../../assets/expressions/angry.png';
import surprise from '../../assets/expressions/exciting.png';
import support from '../../assets/expressions/laugh.png';
import love from '../../assets/expressions/love.png';
import sad from '../../assets/expressions/sad.png';
import disgust from '../../assets/expressions/disgust.png';
import fear from '../../assets/expressions/shock.png';
import handleUpdateExpressionButton from '../handleUpdateExpressionButton/handleUpdateExpressionButton';
import ExpressionData from '../../types/Post/ExpressionData';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query';

const ShowUpExpressionsIcons = (
  _id: string,
  updateExpression: MutationTrigger<
    MutationDefinition<
      any,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      any,
      string
    >
  >,
  refetch: () => void
) => {
  const UIExpressions = [
    { id: 5, name: 'like', image: like },
    { id: 4, name: 'happy', image: happy },
    { id: 6, name: 'love', image: love },
    { id: 8, name: 'support', image: support },
    { id: 9, name: 'surprise', image: surprise },
    { id: 1, name: 'angry', image: angry },
    { id: 2, name: 'disgust', image: disgust },
    { id: 3, name: 'fear', image: fear },
    { id: 7, name: 'sad', image: sad },
  ];

  return UIExpressions.map(({ name, image }, i) => (
    <figure
      className='expression'
      key={i}
      title={name}
      onClick={(e) =>
        handleUpdateExpressionButton(e, _id, updateExpression, refetch)
      }
    >
      <img src={image} alt={name} />
    </figure>
  ));
};

export default ShowUpExpressionsIcons;

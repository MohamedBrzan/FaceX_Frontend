import Expressions from '../types/Post/Expressions';
import CheckIdentifierName from './CheckIdentifierName';

const ShowMiniExpressionsIcons = (expressions: Expressions) => {
  let sortable = [];

  for (const expressionKey in expressions) {
    if (expressions[expressionKey].length > 0) {
      sortable.push([expressionKey, expressions[expressionKey]]);
    }
  }

  sortable.sort(function (a, b) {
    return b[1].length - a[1].length;
  });

  return sortable.map(([key, value], i) => (
    <figure className='expression' key={i} title={key}>
      <img src={CheckIdentifierName(key)} alt={key} />
    </figure>
  ));
};

export default ShowMiniExpressionsIcons;

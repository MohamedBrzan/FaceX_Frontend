import ExpressionData from '../../types/Post/ExpressionData';

export default async (
  e: React.MouseEvent<HTMLElement>,
  _id: string,
  updateExpression: (data: ExpressionData) => Promise<void>,
  refetch: () => void
) => {
  const target = e.target as HTMLImageElement;

  //* changing the icon
  target.parentElement?.parentElement?.parentElement?.firstElementChild?.firstElementChild?.setAttribute(
    'src',
    target.src
  );

  //* changing the name
  const theIdentifier = target.parentElement?.parentElement?.parentElement
    ?.children[1] as HTMLDivElement;
  const name = target.alt[0].toUpperCase() + target.alt.substring(1);

  theIdentifier.textContent = name;

  const data = {
    expressionKey: target.alt,
    postId: _id,
  };

  await updateExpression(data);

  refetch();
};

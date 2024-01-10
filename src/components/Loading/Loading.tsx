type Props = {
  text: string;
};
const Loading = (props: Props) => {
  const { text } = props;

  return <h1>{text}</h1>;
};

export default Loading;

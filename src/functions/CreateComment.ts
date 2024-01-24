import { useGetPostQuery } from '../store/apis/Posts';

type Ref = {
  post?: string;
  blog?: string;
  reel?: string;
};

async function CreateComment(
  e: React.FormEvent<HTMLFormElement>,
  message: string,
  postId: string,
  ref: Ref
) {
  // console.log('hi');
  // const { data: post } = useGetPostQuery(postId);
  // console.log(post);

  // if (!isLoading) {
  //   console.log(post);
  // }
  // const [uploadComment] = useUploadCommentMutation();
  // const target = e.target as HTMLImageElement;

  // //* changing the icon
  // target.parentElement?.parentElement?.parentElement?.firstElementChild?.firstElementChild?.setAttribute(
  //   'src',
  //   target.src
  // );

  // //* changing the name
  // const theIdentifier = target.parentElement?.parentElement?.parentElement
  //   ?.children[1] as HTMLDivElement;
  // const name = target.alt[0].toUpperCase() + target.alt.substring(1);

  // theIdentifier.textContent = name;

  // const data = {
  //   message,
  //   visiblePrivacy: 'custom',
  //   ref,
  // };

  // await uploadComment(data);

  // refetch();
}

export default CreateComment;

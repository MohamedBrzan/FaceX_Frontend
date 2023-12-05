import { useEffect } from 'react';
import { useGetHashTagsQuery } from '../../store/apis/HashTags';

const HashTags = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetHashTagsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>HashTags</div>;
};

export default HashTags;

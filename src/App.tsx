import { useEffect } from 'react';
import Header from './Views/Header/Header';
import AppRoutes from './routes/Routes';
import { useGetVideoQuery } from './store/apis/Videos';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetVideoQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;

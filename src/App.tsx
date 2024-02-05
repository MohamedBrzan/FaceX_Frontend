import Header from './Views/Header/Header';
import AppRoutes from './routes/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.Auth);
  return (
    <>
      {user && <Header />}
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;

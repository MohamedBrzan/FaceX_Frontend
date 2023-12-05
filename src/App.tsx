import Header from './Views/Header/Header';
import AppRoutes from './routes/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
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

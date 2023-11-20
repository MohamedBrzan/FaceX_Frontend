import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from './Views/Footer/Footer';
import Header from './Views/Header/Header';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;

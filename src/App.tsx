import Header from './Views/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.scss';
import AppRoutes from './routes/Routes';
import Footer from './Views/Footer/Footer';

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

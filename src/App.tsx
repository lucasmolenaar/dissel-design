import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

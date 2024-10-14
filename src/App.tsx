import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './layouts/FooterNew';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/project/:slug' element={<Project />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

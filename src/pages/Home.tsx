import Grid from '../layouts/Grid';
import Navbar from '../layouts/Navbar';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Services from '../sections/Services';

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Grid>
          <Hero />

          <Services />

          <Projects />

          <About />

          <Contact />
        </Grid>
      </main>
    </>
  );
};

export default Home;

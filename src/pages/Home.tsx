import Grid from '../layouts/Grid';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Services from '../sections/Services';

const Home = () => {
  return (
    <main>
      <Grid>
        <Hero />

        <Services />

        <Projects />

        <About />
      </Grid>
    </main>
  );
};

export default Home;

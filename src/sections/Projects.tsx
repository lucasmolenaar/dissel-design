import CaseCard from '../components/CaseCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import Grid from '../layouts/Grid';

const Projects = () => {
  return (
    <section className='projects' id='work'>
      <Grid>
        <SectionTitle title={'Projecten'} side={'right'} />

        <div className='projects__cards'>
          <ProjectCard
            topTitle={'Ziggo Dome'}
            year={'2024'}
            large
            image={'/images/home/hp_hero-ziggodome.webp'}
            bottomTitle={'Lorem ipsum'}
            bottomSubtitle={'Mobile first'}
            ux
            design
            dev
            color='#1D1D22'
            link='/project/ziggo-dome'
          />

          <ProjectCard
            topTitle={'New Edition'}
            year={'2023'}
            image={'/images/home/hp_hero_newedition.webp'}
            bottomTitle={'Redesign'}
            bottomSubtitle={'Driven by living'}
            ux
            design
            color='#7E7469'
            link='/project/new-edition'
          />

          {/* <ProjectCard
            topTitle={'Marktzicht'}
            year={'2023'}
            image={'/images/placeholder.jpg'}
            bottomTitle={'Lorem ipsum'}
            bottomSubtitle={'Lorem ipsum'}
            design
            dev
            color='#743ecc'
            link='/project/ziggo-dome'
          /> */}
        </div>

        <div className='projects__cases'>
          <h3 className='projects__cases-title'>
            Cases
            <span className='projects__cases-title-line'></span>
          </h3>

          <ul className='projects__cases-list'>
            <CaseCard
              caseName={'Marktzicht'}
              label={'Restaurant'}
              image='/images/Cases/Marktzicht/Marktzicht-slider1.webp'
            />
            <CaseCard
              caseName={'De MuziekSpeelplaats'}
              label={'Stichting'}
              image='/images/Cases/MSP/MSP-slider-slider1.webp'
            />
            <CaseCard
              caseName={'Natasja Lammers'}
              label={'Portfolio'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'DTX'}
              label={'IT Bedrijf'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'16.08 Streetwear'}
              label={'Webshop'}
              image='/images/Cases/16.08/mockup-1.webp'
            />
            <CaseCard
              caseName={'Regius College Sporters'}
              label={'Scriptie HVA'}
              image='/images/placeholder.jpg'
            />
          </ul>
        </div>
      </Grid>
    </section>
  );
};

export default Projects;

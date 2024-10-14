import CaseCard from '../components/CaseCard';
import LogoSlider from '../components/LogoSlider';
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
            year={'JUN 2024'}
            large
            image={'/images/home/hp_hero-ziggodome.webp'}
            bottomTitle={'Het optimaliseren van de online ervaring'}
            ux
            design
            dev
            color='#1D1D22'
            link='/project/ziggo-dome'
          />

          <ProjectCard
            topTitle={'New Edition'}
            year={'JAN 2024'}
            image={'/images/home/hp_hero_newedition.webp'}
            bottomTitle={'Visuele identiteit optimaliseren voor betere UX.'}
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
              image='/images/cases/Marktzicht/Marktzicht-slider1.webp'
            />
            <CaseCard
              caseName={'De MuziekSpeelplaats'}
              label={'Stichting'}
              image='/images/cases/MSP/MSP-slider-slider1.webp'
            />
            <CaseCard
              caseName={'16.08 Streetwear'}
              label={'Webshop'}
              image='/images/cases/16.08/16.08-slider-slider1.webp'
            />
            <CaseCard
              caseName={'Dutch Technology Experts'}
              label={'IT Bedrijf'}
              image='/images/cases/DTX/dtx-slider-slider1.webp'
            />
            <CaseCard
              caseName={'In progress'}
              label={''}
              image='/images/cases/inprogress/inprogress-image.webp'
            />
            <CaseCard
              caseName={'In progress'}
              label={''}
              image='/images/cases/inprogress/inprogress-image.webp'
            />
          </ul>
        </div>

        <div className='projects__logos'>
          <LogoSlider />
        </div>
      </Grid>
    </section>
  );
};

export default Projects;

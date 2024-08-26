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
            image={'/images/placeholder.jpg'}
            bottomTitle={'Lorem ipsum'}
            bottomSubtitle={'Mobile first'}
            ux
            design
            dev
            color='#58c556'
          />

          <ProjectCard
            topTitle={'New Edition'}
            year={'2023'}
            image={'/images/placeholder.jpg'}
            bottomTitle={'Redesign'}
            bottomSubtitle={'Driven by living'}
            ux
            design
            color='#1da4ff'
          />

          <ProjectCard
            topTitle={'Marktzicht'}
            year={'2023'}
            image={'/images/placeholder.jpg'}
            bottomTitle={'Lorem ipsum'}
            bottomSubtitle={'Lorem ipsum'}
            design
            dev
            color='#743ecc'
          />
        </div>

        <div className='projects__cases'>
          <h3 className='projects__cases-title'>
            Cases
            <span className='projects__cases-title-line'></span>
          </h3>

          <ul className='projects__cases-list'>
            <CaseCard
              caseName={'Case 1'}
              label={'Mobile'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'Case 2'}
              label={'Web App'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'Case 3'}
              label={'Web App'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'Case 4'}
              label={'Webdesign'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'Case 5'}
              label={'Webdesign'}
              image='/images/placeholder.jpg'
            />
            <CaseCard
              caseName={'Case 6'}
              label={'Webdesign'}
              image='/images/placeholder.jpg'
            />
          </ul>
        </div>
      </Grid>
    </section>
  );
};

export default Projects;

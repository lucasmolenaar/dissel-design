import CaseCard from '../components/CaseCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import Grid from '../layouts/Grid';

const Projects = () => {
  return (
    <section className='projects'>
      <Grid>
        <SectionTitle title={'Projecten'} side={'right'} />

        <div className='projects__cards'>
          <ProjectCard
            topTitle={'Ziggo Dome'}
            year={'2024'}
            large
            image={''}
            bottomTitle={'Lorem ipsum'}
            bottomSubtitle={'Mobile first'}
            ux
            design
            dev
          />

          <ProjectCard
            topTitle={'New Edition'}
            year={'2023'}
            image={''}
            bottomTitle={'Redesign'}
            bottomSubtitle={'Driven by living'}
            ux
            design
          />

          <ProjectCard
            topTitle={'Marktzicht'}
            year={'2023'}
            image={''}
            bottomTitle={'Lorem ipsum'}
            bottomSubtitle={'Lorem ipsum'}
            design
            dev
          />
        </div>

        <div className='projects__cases'>
          <h3 className='projects__cases-title'>
            Cases
            <span className='projects__cases-title-line'></span>
          </h3>

          <ul className='projects__cases-list'>
            <CaseCard caseName={'Case 1'} label={'Mobile'} />
            <CaseCard caseName={'Case 2'} label={'Web App'} />
            <CaseCard caseName={'Case 3'} label={'Web App'} />
            <CaseCard caseName={'Case 4'} label={'Webdesign'} />
            <CaseCard caseName={'Case 5'} label={'Webdesign'} />
            <CaseCard caseName={'Case 6'} label={'Webdesign'} />
          </ul>
        </div>
      </Grid>
    </section>
  );
};

export default Projects;

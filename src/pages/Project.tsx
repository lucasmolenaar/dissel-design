import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Grid from '../layouts/Grid';
import { IProject } from '../types/Project';
import projects from '../assets/data/projects.json';
import ProjectNav from '../layouts/ProjectNav';
import useScreenWidth from '../hooks/useScreenWidth';
import ProjectSlider from '../components/ProjectSlider';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { RxExternalLink } from 'react-icons/rx';

const Project = () => {
  const { slug } = useParams();
  const screenwidth = useScreenWidth();
  const [project, setProject] = useState<IProject>();
  const [goalsBackground, setGoalsBackground] = useState(
    '/images/goals-background-mobile.jpg'
  );

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === slug);
    setProject(foundProject);
  }, []);

  useEffect(() => {
    if (slug === 'new-edition') {
      setGoalsBackground('/images/NewEdition/newedition-goals.png');
    } else {
      setGoalsBackground(
        screenwidth < 500
          ? '/images/goals-background-mobile.jpg'
          : screenwidth < 1024
          ? '/images/goals-background-tablet.jpg'
          : '/images/goals-background-desktop.jpg'
      );
    }
  }, [screenwidth]);

  return (
    <>
      <Helmet>
        <title>{`Dissel Design - ${project?.title}`}</title>
      </Helmet>

      <ProjectNav />

      <main className='project'>
        <Grid>
          <div className='project__container'>
            <motion.img
              src={project?.logo}
              alt='Logo'
              className='project__logo'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />

            <motion.h1
              className='project__title'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
            >
              {project?.title}
            </motion.h1>
            <motion.h2
              className='project__subtitle1'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {project?.subtitle1}
            </motion.h2>
            <motion.h3
              className='project__subtitle2'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45 }}
            >
              {project?.subtitle2}
            </motion.h3>

            <motion.img
              src={project?.image}
              alt='Header Image'
              className='project__image'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            <motion.div
              className='project__content'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <div className='project__info'>
                <div className='project__info-company'>
                  <span>Bedrijf</span>
                  <p>{project?.company}</p>
                </div>
                <div className='project__info-role'>
                  <span>Mijn rol</span>
                  <p>{project?.role}</p>
                </div>
                <div className='project__info-time'>
                  <span>Tijdlijn</span>
                  <p>{project?.spentTime}</p>
                </div>
                <div className='project__info-skills'>
                  <span>Vaardigheden</span>
                  <ul>
                    {project?.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className='project__info-button'>
                  <a href={project?.link} target='_blank'>
                    <span></span> Live bekijken
                  </a>
                </div>
              </div>

              <div className='project__description'>
                <h4 className='project__description-title'>Introductie</h4>

                <p
                  className='project__description-text'
                  dangerouslySetInnerHTML={{ __html: project?.text ?? '' }}
                ></p>
              </div>
            </motion.div>
          </div>

          <div
            className={`project__goalsbackground`}
            style={{
              backgroundImage: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(18, 18, 18, 0.35) 50%,
              rgba(18, 18, 18, 1) 95%
              ),
              url(${goalsBackground})`,
            }}
          >
            <Grid>
              <div className='project__goals'>
                <h4>Doelstellingen</h4>

                <p>{project?.goalsText}</p>

                <ul className='project__goals-list'>
                  {project?.goals.map((goal, index) => (
                    <li key={index}>
                      <span>0{index + 1}</span>
                      <p>{goal}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          </div>

          <div className='project__content2'>
            <div className='project__content2-challenge'>
              <h4>{project?.textTitle1}</h4>

              <p>{project?.textText1}</p>
            </div>

            <div className='project__content2-research'>
              <h4>{project?.textTitle2}</h4>

              <p
                dangerouslySetInnerHTML={{ __html: project?.textText2 ?? '' }}
              ></p>
            </div>
          </div>

          <ul
            className={`project__methods ${
              slug === 'ziggo-dome' ? 'ziggo' : ''
            }`}
          >
            {project?.methods.map((method, index) => (
              <li key={index}>
                <img src={method.img} alt={method.title} />

                <h4>{method.title}</h4>

                <p>{method.text}</p>
              </li>
            ))}
          </ul>

          <div className='project__microanimation'>
            <h4>{project?.textTitle3}</h4>

            <p
              dangerouslySetInnerHTML={{ __html: project?.textText3 ?? '' }}
            ></p>
          </div>

          {slug === 'ziggo-dome' && (
            <>
              <div className='project__microanimation-video'>
                <video autoPlay muted loop playsInline>
                  <source src='/images/ZiggoDome/ziggodome-animatie.mp4' />
                </video>
              </div>

              <div className='project__discover'>
                <h4>{project?.textTitle4}</h4>

                <p
                  dangerouslySetInnerHTML={{ __html: project?.textText4 ?? '' }}
                ></p>

                <a
                  href='https://ziggodome.nl/plattegrond/beganegrond'
                  target='_blank'
                >
                  Bekijk de plattegrond <RxExternalLink size={20} />
                </a>
              </div>
            </>
          )}

          <ProjectSlider images={project?.sliderImages ?? []} />

          <ul className='project__analytics'>
            {/* eslint-disable-next-line */}
            {project?.analytics.map(({ icon, title, text }, index) => (
              <li key={index}>
                <img src={icon} alt='Icon' />
                {/* <div></div> */}

                <h4 className={`${index === 3 || index === 4 ? 'small' : ''}`}>
                  {title}
                </h4>

                <p>{text}</p>
              </li>
            ))}
          </ul>

          <div className='project__end'>
            <h4>Next Project</h4>

            <h2>{project?.nextProjectTitle}</h2>

            <h3>{project?.nextProjectSubtitle}</h3>

            <div className='project__end-buttons'>
              <a href='/'>
                <FaArrowLeftLong />
                Back to home
              </a>

              <a href={project?.nextProjectLink}>
                Next project
                <FaArrowRightLong />
              </a>
            </div>

            <a href={project?.nextProjectLink} className='project__end-image'>
              <img
                src={project?.nextProjectImage}
                alt={project?.nextProjectTitle}
              />
            </a>
          </div>
        </Grid>
      </main>
    </>
  );
};

export default Project;

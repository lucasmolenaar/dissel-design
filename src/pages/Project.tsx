import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Grid from '../layouts/Grid';
import Image from '/images/placeholder.jpg';
import { IProject } from '../types/Project';
import projects from '../assets/data/projects.json';
import ProjectNav from '../layouts/ProjectNav';

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
  }, []);

  return (
    <>
      <ProjectNav />

      <main className='project'>
        <Grid>
          <div className='project__container'>
            <motion.img
              src={Image}
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
              src={Image}
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
        </Grid>
      </main>
    </>
  );
};

export default Project;

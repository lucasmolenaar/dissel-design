import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Grid from '../layouts/Grid';
import Image from '/images/placeholder.jpg';
import { IProject } from '../types/Project';
import projects from '../assets/data/projects.json';
import ProjectNav from '../layouts/ProjectNav';
import useScreenWidth from '../hooks/useScreenWidth';
import ProjectSlider from '../components/ProjectSlider';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Project = () => {
  const { slug } = useParams();
  const screenwidth = useScreenWidth();
  const [project, setProject] = useState<IProject>();
  const [goalsBackground, setGoalsBackground] = useState(
    '/images/goals-background-mobile.jpg'
  );

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
  }, []);

  useEffect(() => {
    setGoalsBackground(
      screenwidth < 500
        ? '/images/goals-background-mobile.jpg'
        : screenwidth < 1024
        ? '/images/goals-background-tablet.jpg'
        : '/images/goals-background-desktop.jpg'
    );
  }, [screenwidth]);

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

          <div
            className='project__goalsbackground'
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
              <h4>Design Challenge</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur. A eget phasellus sit
                porttitor. Semper ut non est hac. Velit dignissim sodales
                pellentesque ultrices libero rhoncus. Cras porta duis elementum
                sem tempor turpis mi sed turpis.
              </p>
            </div>

            <div className='project__content2-research'>
              <h4>UX-Research</h4>

              <p>
                Uit onderzoek is gebleken dat meer dan 76% van de huidige Ziggo
                Dome-gebruikers hun mobiele apparaat gebruikt. De grootste
                doelgroep is tussen de 25 en 34 jaar, maar opmerkelijk is dat
                alle leeftijdsgroepen significant gebruikmaken van mobiele
                apparaten, inclusief de oudere generatie. Om hierop in te
                spelen, richten we bij het redesign op focus mobile-first.
                <br />
                <br />
                In de afgelopen 10 jaar is het schermformaat van mobiele
                telefoons verdubbeld. Op kleine smartphones was elk gebied
                vrijwel gemakkelijk te bereiken, maar het bovenste gedeelte is
                nu onbereikbaar zonder de houding van je hand te veranderen.
                Voor duimbewegingen op smartphones zijn bepaalde zones sneller
                en makkelijker te bereiken dan andere zones. Door het
                implementeren van een bottom-navigatie worden de belangrijkste
                elementen onderaan de pagina geplaatst. De secundaire items
                worden naar boven verplaatst. De gebruikers zullen hierdoor
                gebruiksvriendelijker door de Ziggo Dome Webapplicatie navigeren
                en dat biedt een comfortabele interactie met de hand en duim.
                <br />
                <br />
                Naar aanleiding van de actuele UX-trends uit 2023 zijn er
                diverse innovaties geïntegreerd in de interface om de
                gebruikerservaring intuïtiever, gebruiksvriendelijker en visueel
                aantrekkelijker te maken voor verschillende doelgroepen. Enkele
                belangrijke elementen die hierbij een rol spelen zijn: dynamic
                scrolling, animation card transition, dark-modus,
                micro-interactions en het gebruiken van grote afbeeldingen die
                worden omgezet in video.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. A eget phasellus sit
                porttitor. Semper ut non est hac. Velit dignissim sodales
                pellentesque ultrices libero rhoncus. Cras porta duis elementum
                sem tempor turpis mi sed turpis.
              </p>
            </div>
          </div>

          <ul className='project__methods'>
            {project?.methods.map((_, index) => (
              <li key={index}>
                <img src='' alt='' />

                <h4>Title {index + 1}</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Auctor felis
                  condimentum fermentum donec in cras at pellentesque in. Vel a
                  facilisis nam risus in sit potenti leo. Enim ut integer id
                  aliquam tempus pellentesque. Vestibulum quisque aliquam
                  scelerisque quam purus in auctor vulputate. Cursus praesent
                  aliquet at auctor est consequat. Consequat in lobortis odio
                  sem sit.
                </p>
              </li>
            ))}
          </ul>

          <div className='project__microanimation'>
            <h4>Micro-animatie</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat nunc gravida
              congue adipiscing lobortis. At neque commodo consectetur sed diam
              sed. Pulvinar iaculis commodo phasellus sit donec eget enim
              gravida sit. At volutpat vestibulum dolor scelerisque suspendisse
              nibh quam. Urna gravida eget dui condimentum tempor dignissim at
              elit. Neque arcu ac et tortor sapien consequat.
            </p>
          </div>

          <div className='project__microanimation-video'></div>

          <div className='project__discover'>
            <h4>Ontdek de Ziggo Dome</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat nunc gravida
              congue adipiscing lobortis. At neque commodo consectetur sed diam
              sed. Pulvinar iaculis commodo phasellus sit donec eget enim
              gravida sit. At volutpat vestibulum dolor scelerisque suspendisse
              nibh quam. Urna gravida eget dui condimentum tempor dignissim at
              elit. Neque arcu ac et tortor sapien consequat.
            </p>
          </div>

          <ProjectSlider />

          <ul className='project__analytics'>
            {/* eslint-disable-next-line */}
            {project?.analytics.map(({ icon, title, text }, index) => (
              <li key={index}>
                {/* <img src={''} alt='Icon' /> */}
                <div></div>

                <h4 className={`${index === 3 || index === 4 ? 'small' : ''}`}>
                  {title}
                </h4>

                <p>{text}</p>
              </li>
            ))}
          </ul>

          <div className='project__end'>
            <h4>Next Project</h4>

            <h2>{project?.title}</h2>

            <h3>{project?.subtitle1}</h3>

            <div className='project__end-buttons'>
              <a href='/'>
                <FaArrowLeftLong />
                Back to home
              </a>

              <a href='/'>
                Next project
                <FaArrowRightLong />
              </a>
            </div>

            <div className='project__end-image'></div>
          </div>
        </Grid>
      </main>
    </>
  );
};

export default Project;

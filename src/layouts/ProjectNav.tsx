import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeftLong } from 'react-icons/fa6';

import Grid from './Grid';
import { useEffect, useState } from 'react';

const ProjectNav = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`project-nav ${
        showNavbar ? 'project-nav--visible' : 'project-nav--hidden'
      }`}
    >
      <Grid>
        <ul className='project-nav__list'>
          <li className='project-nav__item'>
            <a href='/'>
              <FaArrowLeftLong />
              Home
            </a>
          </li>
          <li className='project-nav__item'>
            <a href='/'>
              Volgende
              <FaArrowRightLong />
            </a>
          </li>
        </ul>
      </Grid>
    </nav>
  );
};

export default ProjectNav;
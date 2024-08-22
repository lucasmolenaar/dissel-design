import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Grid from './Grid';
import Hamburger from '../components/Hamburger';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

import LottieLogo from '../assets/lottie/Logo.json';
import Lottie from 'lottie-react';

const Navbar = () => {
  // const screenwidth = useScreenWidth();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
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
    <nav className={`nav ${showNavbar ? 'nav--visible' : 'nav--hidden'}`}>
      <Grid>
        <div className='nav__container'>
          {/* <img
            src={screenwidth < 1024 ? LogoSmall : Logo}
            alt='Dissel Design - Logo'
          /> */}
          <Lottie animationData={LottieLogo} loop={false} />

          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <AnimatePresence>{menuOpen && <MobileMenu />}</AnimatePresence>

          <DesktopMenu />
        </div>
      </Grid>
    </nav>
  );
};

export default Navbar;

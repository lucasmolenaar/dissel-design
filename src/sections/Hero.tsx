import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';

import Grid from '../layouts/Grid';
import SpinThingy from '../components/SpinThingy';
import BackgroundLogo from '/images/header-background-disseldesign.png';
import LottieArrow from '../assets/lottie/arrowdown.json';
import useScreenWidth from '../hooks/useScreenWidth';

const variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'just',
      stiffness: 100,
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const screenwidth = useScreenWidth();
  return (
    <section className='hero'>
      <motion.img
        src={BackgroundLogo}
        className='hero__logo'
        alt='Dissel Design Logo'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 2,
        }}
      />

      <Grid>
        <motion.h1
          className='hero__title'
          initial='hidden'
          animate='visible'
          variants={staggerChildren}
        >
          <motion.span variants={variants}>Hi,</motion.span>{' '}
          <motion.span variants={variants}>I</motion.span>{' '}
          <motion.span variants={variants}>Am</motion.span>{' '}
          <motion.span variants={variants}>Dissel</motion.span>{' '}
          <motion.span className='hero__title-typewriter' variants={variants}>
            {screenwidth < 768 ? (
              'Creatieve'
            ) : (
              <Typewriter
                words={['Creatieve', 'Innovatieve']}
                cursor
                loop
                typeSpeed={160}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            )}
          </motion.span>{' '}
          <br />
          <motion.span className='hero__title-stroke' variants={variants}>
            Product
          </motion.span>{' '}
          <motion.span className='hero__title-stroke' variants={variants}>
            Designer
          </motion.span>
          <motion.span
            className='hero__title-name'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.4 }}
          >
            Tim Disseldorp
          </motion.span>
          <motion.span
            className='hero__title-function'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4 }}
          >
            Webdesigner /
          </motion.span>
          <SpinThingy top={''} right={'-5.2rem'} bottom={'4rem'} left={''} />
        </motion.h1>
      </Grid>

      <motion.a
        className='hero__scroll'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        href='#services'
      >
        Scroll <Lottie animationData={LottieArrow} loop={true} />
      </motion.a>
    </section>
  );
};

export default Hero;

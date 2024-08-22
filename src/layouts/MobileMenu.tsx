import { motion } from 'framer-motion';

const MobileMenu = () => {
  return (
    <motion.ul
      className='mobile-menu'
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
    >
      <li>
        <a href='#service'>
          <span>01</span>
          Service
        </a>
      </li>

      <li>
        <a href='#work'>
          <span>02</span>
          Work
        </a>
      </li>

      <li>
        <a href='#about'>
          <span>03</span>
          About me
        </a>
      </li>

      <li>
        <a href='#contact'>
          <span>04</span>
          Let's talk
        </a>
      </li>
    </motion.ul>
  );
};

export default MobileMenu;

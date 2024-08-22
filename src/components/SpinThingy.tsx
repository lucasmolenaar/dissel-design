import { motion } from 'framer-motion';
import Thingy from '/svg/spin-thingy.svg';

interface Propsies {
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
}

const SpinThingy: React.FC<Propsies> = ({ top, right, bottom, left }) => {
  return (
    <motion.img
      className='spinny'
      style={{ top, right, bottom, left }}
      src={Thingy}
      alt='Spin Thingy'
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        rotate: {
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        },
        scale: {
          delay: 2,
          duration: 1,
          ease: 'easeInOut',
        },
      }}
    />
  );
};
export default SpinThingy;

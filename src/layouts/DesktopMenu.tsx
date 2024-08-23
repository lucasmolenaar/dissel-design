import { IoIosArrowRoundForward } from 'react-icons/io';

const DesktopMenu = () => {
  return (
    <ul className='desktop-menu'>
      <li>
        <a href='#services'>
          <span>01</span> Services
        </a>
      </li>

      <li>
        <a href='#work'>
          <span>04</span> Work
        </a>
      </li>

      <li>
        <a href='#about'>
          <span>03</span> About me
        </a>
      </li>

      <li className='desktop-menu__talk'>
        <a href='#contact'>
          Let's talk! <IoIosArrowRoundForward size={24} />
        </a>
      </li>
    </ul>
  );
};

export default DesktopMenu;

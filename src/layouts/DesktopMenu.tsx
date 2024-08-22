import { IoIosArrowRoundForward } from 'react-icons/io';

const DesktopMenu = () => {
  return (
    <ul className='desktop-menu'>
      <li>
        <a href='#services'>Services</a>
      </li>

      <li>
        <a href='#work'>Work</a>
      </li>

      <li>
        <a href='#about'>About me</a>
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

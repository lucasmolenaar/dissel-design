import { IoIosArrowRoundUp, IoIosArrowRoundForward } from 'react-icons/io';
import Grid from './Grid';
import FooterLogo from '/svg/logo-footer.svg';
import Mail from '/svg/mail.svg';
import Dribbble from '/svg/dribbble.svg';
import Instagram from '/svg/insta.svg';
import Twtter from '/svg/twitter.svg';
import LinkedIn from '/svg/linkedin.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <Grid>
        <div className='footer__container'>
          <div className='footer__mobile'>
            <img
              className='footer__logo'
              src={FooterLogo}
              alt='Dissel Design'
            />

            <ul className='footer__socials'>
              <li>
                <a href='#'>
                  <img src={Mail} alt='Mail' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={Dribbble} alt='Dribbble' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={Instagram} alt='Instagram' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={Twtter} alt='Twtter' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={LinkedIn} alt='LinkedIn' />
                </a>
              </li>
            </ul>

            <a href='#top' className='footer__totop footer__totop--mobile'>
              <IoIosArrowRoundUp color='#fafafa' size={32} />
            </a>

            <p className='footer__copy'>© 2024 · Tim Disseldorp</p>
            <p className='footer__developer'>DEVELOPED BY LUCAS MOLENAAR</p>
          </div>

          <ul className='footer__menu'>
            <li>
              <a href='#service'>
                <span>01</span>
                Service
              </a>
            </li>

            <li>
              <a href='#service'>
                <span>03</span>
                About me
              </a>
            </li>

            <li>
              <a href='#service'>
                <span>02</span>
                Projects
              </a>

              <ul className='footer__menu-sub'>
                <li>
                  <a href='/projects/ziggo-dome'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Ziggo Dome
                  </a>
                </li>
                <li>
                  <a href='/projects/new-edition'>
                    <IoIosArrowRoundForward color='#888888' size={20} /> New
                    Edition
                  </a>
                </li>
                <li>
                  <a href='/projects/marktzicht'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Marktzicht
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href='#service'>
                <span>02</span>
                Service
              </a>

              <ul className='footer__menu-sub footer__menu-sub--cases'>
                <li>
                  <a href='/cases/1'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Case 1
                  </a>
                </li>
                <li>
                  <a href='/cases/1'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Case 4
                  </a>
                </li>
                <li>
                  <a href='/cases/1'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Case 2
                  </a>
                </li>
                <li>
                  <a href='/cases/1'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Case 5
                  </a>
                </li>
                <li>
                  <a href='/cases/1'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Case 3
                  </a>
                </li>
                <li>
                  <a href='/cases/1'>
                    <IoIosArrowRoundForward color='#888888' size={20} />
                    Case 6
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default Footer;

import Grid from './Grid';
import FooterLogo from '/svg/logo-footer.svg';
import Mail from '/svg/mail.svg';
import Dribbble from '/svg/dribbble.svg';
import Instagram from '/svg/insta.svg';
import Twtter from '/svg/twitter.svg';
import LinkedIn from '/svg/linkedin.svg';
import { IoIosArrowRoundUp } from 'react-icons/io';

const FooterNew = () => {
  return (
    <footer className='footernew'>
      <Grid>
        <div className='footernew__container'>
          <div className='footernew__socials'>
            <img
              src={FooterLogo}
              className='footernew__socials-logo'
              alt='Dissel Design Logo'
            />

            <ul className='footernew__socials-list'>
              <li>
                <a href='mailto:tim.disseldorp@hotmail.com' target='_blank'>
                  <img src={Mail} alt='Mail' />
                </a>
              </li>
              <li>
                <a href='https://dribbble.com/Timotheus23' target='_blank'>
                  <img src={Dribbble} alt='Dribbble' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/timdisseldorp/?next=%2F'
                  target='_blank'
                >
                  <img src={Instagram} alt='Instagram' />
                </a>
              </li>
              <li>
                <a
                  href='https://x.com/i/flow/login?redirect_after_login=%2Ftim_disseldorp'
                  target='_blank'
                >
                  <img src={Twtter} alt='Twtter' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/timdisseldorp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                  target='_blank'
                >
                  <img src={LinkedIn} alt='LinkedIn' />
                </a>
              </li>
            </ul>
          </div>

          <div className='footernew__data'>
            <p>
              <strong>Bedrijfsnaam</strong>
            </p>
            <p>DISSELDESIGN</p>

            <p>
              <strong>KVK</strong>
            </p>
            <p>94838852</p>

            <p>
              <strong>Adres</strong>
            </p>
            <p>Heiloo, Nederland</p>
          </div>

          <a href='#top' className='footer__totop'>
            <IoIosArrowRoundUp color='#fafafa' size={32} />
          </a>
        </div>

        <div className='footernew__copy-container'>
          <p className='footer__copy'>© 2024 · Tim Disseldorp</p>
          <p className='footer__developer'>DEVELOPED BY LUCAS MOLENAAR</p>
        </div>
      </Grid>
    </footer>
  );
};

export default FooterNew;

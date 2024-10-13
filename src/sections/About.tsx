import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FiDownload } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

import SectionTitle from '../components/SectionTitle';
import Grid from '../layouts/Grid';

import Mail from '/svg/mail.svg';
import Dribbble from '/svg/dribbble.svg';
import Instagram from '/svg/insta.svg';
import Twtter from '/svg/twitter.svg';
import LinkedIn from '/svg/linkedin.svg';
import Figma from '/svg/figma.svg';
import Photoshop from '/svg/photoshop.svg';
import Illustrator from '/svg/illustrator.svg';
import Xd from '/svg/xd.svg';
import Miro from '/svg/miro.svg';
import Notion from '/svg/notion.svg';
import Chat from '/svg/chatgpt.svg';
import Spotify from '/svg/spotify.svg';
import PDF from '../assets/files/CV-TimDisseldorp.pdf';

const About = () => {
  const educationItems = [
    {
      year: '2018- 2022',
      info1: 'Bachelor',
      info2: 'Communicatie en Multimedia Design',
      info3: 'Hogeschool van Amsterdam',
    },
    {
      year: '2018- 2022',
      info1: 'Minor',
      info2: 'Visueel Interface Design',
      info3: 'Hogeschool van Amsterdam',
    },
    {
      year: '2018- 2022',
      info1: '',
      info2: 'Havo diploma (VAVO)',
      info3: 'R.O.C. Horizon College',
    },
    {
      year: '2018- 2022',
      info1: '',
      info2: 'Mavo diploma',
      info3: 'Jac.P.Thijsse College',
    },
  ];

  const experienceItems = [
    {
      year: '2024- heden',
      info1: 'Product Designer',
      info2: 'ShopCommerce',
      info3: 'Alkmaar',
    },
    {
      year: '2023- 2024',
      info1: 'UX & UI Designer',
      info2: 'Touch Creative',
      info3: 'Amsterdam',
    },
    {
      year: '2021- 2023',
      info1: 'Allround Designer',
      info2: 'yourdutchmedia',
      info3: 'Zwaag, Hoorn',
    },
    {
      year: '2020- 2020',
      info1: 'UX Designer stage',
      info2: 'Brick Zero',
      info3: 'Castricum',
    },
  ];

  return (
    <section className='about' id='about'>
      <Grid>
        <SectionTitle title='Over' title2='mij' side={'left'} about />

        <div className='about__grid'>
          <div className='about__image'>
            <img
              src='/images/home/tim-slider1.jpg'
              alt='Tim Disseldorp, Dissel Design'
            />
          </div>

          <div className='about__education'>
            <h3>Opleidingen.</h3>

            <ul className='about__education-list'>
              {educationItems.map(({ year, info1, info2, info3 }, index) => (
                <li className='about__education-item' key={index}>
                  <p className='about__education-item-year'>{year}</p>

                  <div className='about__education-item-info'>
                    {info1 && (
                      <p className='about__education-item-info-1'>{info1}</p>
                    )}
                    <p className='about__education-item-info-2'>{info2}</p>
                    <p className='about__education-item-info-3'>{info3}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='about__socials'>
            <p>
              Productontwerper met 5 jaar ervaring, gericht op het creëren van
              functionele en gebruiksvriendelijke digitale producten met visueel
              verbluffende ontwerpen.
            </p>

            <ul className='about__socials-list'>
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

          <div className='about__background'>
            <h3>Mijn achtergrond.</h3>

            <p>
              Mijn naam is Tim Disseldorp, een gedreven jongeman uit het
              Noord-Hollandse Heiloo. Na mijn afstuderen aan de Hogeschool van
              Amsterdam in 2022, begon mijn carrière bij YourDutchMedia in
              Hoorn. Hier ontdekte ik mijn passie voor het ontwerpen van
              gebruiksvriendelijke en esthetische interfaces.
              <br />
              <br />
              Maar ik wist dat er meer in me zat. De afgelopen jaren heb ik
              geleerd dat groeien betekent dat je soms buiten je comfortzone
              moet stappen. Daarom besloot ik als ZZP’er mijn eigen weg te gaan.
              Als zelfstandig ontwerper kan ik nu mijn visie en creativiteit
              volledig benutten om bedrijven te helpen met intuïtieve en
              effectieve designs.
              <br />
              <br />
              Naast mijn werk vind ik balans essentieel. Ik blijf fysiek en
              mentaal fit door veel te wandelen, hard te lopen en te zwemmen.
              Deze activiteiten geven me rust en energie, en vormen een perfecte
              aanvulling op mijn werk. Met passie en toewijding streef ik naar
              continue groei en ontwikkeling.
            </p>
          </div>

          <div className='about__software'>
            <h3>Software.</h3>

            <ul className='about__software-list'>
              <li>
                <img src={Figma} alt='Figma' />
              </li>
              <li>
                <img src={Photoshop} alt='Photoshop' />
              </li>
              <li>
                <img src={Illustrator} alt='Illustrator' />
              </li>
              <li>
                <img src={Xd} alt='Xd' />
              </li>
              <li>
                <img src={Miro} alt='Miro' />
              </li>
              <li>
                <img src={Notion} alt='Notion' />
              </li>
              <li>
                <img src={Chat} alt='Chat' />
              </li>
              <li>
                <img src={Spotify} alt='Spotify' />
              </li>
            </ul>
          </div>

          <div className='about__experience'>
            <h3>Werkervaring.</h3>

            <ul className='about__experience-list'>
              {experienceItems.map(({ year, info1, info2, info3 }, index) => (
                <li className='about__experience-item' key={index}>
                  <p className='about__experience-item-year'>{year}</p>

                  <div className='about__experience-item-info'>
                    {info1 && (
                      <p className='about__experience-item-info-1'>{info1}</p>
                    )}
                    <p className='about__experience-item-info-2'>{info2}</p>
                    <p className='about__experience-item-info-3'>{info3}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href={PDF} download className='about__experience-resume'>
              Resume <FiDownload color='#fafafa' />
            </a>
          </div>

          <div className='about__carousel'>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className='mySwiper'
              loop
            >
              <SwiperSlide>
                <img src='/images/home/tim-ydm.jpg' alt='Dissel Design 1' />
              </SwiperSlide>
              <SwiperSlide>Image 2</SwiperSlide>
              <SwiperSlide>Image 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default About;

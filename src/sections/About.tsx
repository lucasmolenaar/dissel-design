import { FiDownload } from 'react-icons/fi';

import SectionTitle from '../components/SectionTitle';
import Grid from '../layouts/Grid';

import Figma from '/svg/figma.svg';
import Photoshop from '/svg/photoshop.svg';
import Illustrator from '/svg/illustrator.svg';
import Xd from '/svg/xd.svg';
import Miro from '/svg/miro.svg';
import Notion from '/svg/notion.svg';
import Chat from '/svg/chatgpt.svg';
import Spotify from '/svg/spotify.svg';

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
    <section className='about'>
      <Grid>
        <SectionTitle title='Over' title2='mij' side={'left'} about />

        <div className='about__grid'>
          <div className='about__image'></div>

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
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
              <li>
                <a href='#'></a>
              </li>
            </ul>
          </div>

          <div className='about__background'>
            <h3>Mijn achtergrond.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur. Accumsan orci odio in leo.
              Interdum purus leo aliquet tempor arcu. Ut dui volutpat nunc
              blandit elementum felis a pretium. Ullamcorper condimentum mattis
              sed auctor bibendum at sed laoreet.
              <br />
              <br />
              Eu sapien ac sed bibendum quis neque imperdiet amet augue. Rhoncus
              laoreet eu semper ut. Augue eu purus adipiscing tincidunt varius
              cras adipiscing diam.
              <br />
              <br />
              Dictum morbi integer eget lorem adipiscing auctor porttitor ipsum
              urna. Vestibulum mi dictum aenean ullamcorper id lorem cursus
              pellentesque quis. Vitae euismod eu arcu quis sed enim massa. Nec
              in volutpat elit luctus. Luctus malesuada vel suspendisse iaculis
              sed aliquam volutpat.
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

            <button className='about__experience-resume'>
              Resume <FiDownload color='#fafafa' />
            </button>
          </div>

          <div className='about__carousel'></div>
        </div>
      </Grid>
    </section>
  );
};

export default About;

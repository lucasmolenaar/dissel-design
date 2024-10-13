import { motion } from 'framer-motion';

import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Grid from '../layouts/Grid';

import IconUX from '/svg/ux.svg';
import IconDesign from '/svg/webdesign.svg';
import IconDevelopment from '/svg/development.svg';
import BigSpin from '/svg/big-spin.svg';

interface Card {
  title: string;
  icon: string;
  text: string;
  items: string[];
  bgColor: string;
}

const Services = () => {
  const cards: Card[] = [
    {
      title: 'UX-Research',
      icon: IconUX,
      text: 'Richt zicht op het begrijpen van de behoeften, gedragingen, en verwachtingen van gebruikers om een gebruiksvriendelijke website te creëren.',
      items: [
        'Gebruikersinterviews & enquetes.',
        'Persona ontwikkeling.',
        'Customer journey mapping.',
        'Competitief analyse.',
        'Usability of A/B testing.',
      ],
      bgColor: '#059053',
    },
    {
      title: 'Webdesign',
      icon: IconDesign,
      text: 'Jouw visie omzetten in een aansprekend design voor website, app, webshop of andere online omgeving. Zodat jouw werk online kan schitteren.',
      items: [
        'Informatie architectuur.',
        'Wireframing.',
        'UI Design.',
        'Responsive Design.',
        'Figma Prototyping.',
        'Design Systems.',
      ],
      bgColor: '#2A34D8',
    },
    {
      title: 'Development',
      icon: IconDevelopment,
      text: 'Het proces van het creëren en bouwen van de website. De visuele en functionele kant die de gebruikers zien en gebruiken.',
      items: [
        'Codering.',
        'Responsive voor elk device..',
        'SEO.',
        'Gebruiksvriendelijke functionaliteiten.',
        'Regelen van een hosting.',
      ],
      bgColor: '#743ECC',
    },
  ];

  return (
    <section className='services' id='services'>
      <Grid>
        <SectionTitle title='Services' side='left' />
      </Grid>

      <Grid>
        <div className='services__cards'>
          {cards.map(({ title, icon, text, items, bgColor }, index) => (
            <ServiceCard
              key={index}
              title={title}
              icon={icon}
              text={text}
              items={items}
              bgColor={bgColor}
            />
          ))}
        </div>
      </Grid>

      <Grid>
        <div className='services__quote'>
          <Grid>
            <div className='grid services__quote-container'>
              <div className='services__quote-text'>
                <motion.img src={BigSpin} alt='Big Spin' />

                <h3>
                  "Elk geweldig ontwerp is een reactie op een probleem dat wacht
                  om opgelost te worden."
                </h3>

                <p>
                  Ontwerpen is de kunst van het oplossen van problemen -{' '}
                  <span>één uitdaging</span> tegelijk.
                </p>
              </div>

              <div className='services__quote-image'></div>
            </div>
          </Grid>
        </div>
      </Grid>
    </section>
  );
};

export default Services;

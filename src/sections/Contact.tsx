import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';
import Grid from '../layouts/Grid';
import Mail from '/svg/mail.svg';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <Grid>
        <SectionTitle title={'Contact'} side={'right'} />

        <div className='contact__container'>
          <div className='contact__info'>
            <p>
              <span>Tim staat klaar</span> om jouw merk of product naar het
              volgende niveau te tillen. Vul het formulier in en deel meer over
              je project. Of vertel ons meer over je bedrijf. Hoe dan ook, ik
              kijk ernaar uit om met je in gesprek te gaan.
            </p>

            <div className='contact__persona-container'>
              <div className='contact__persona'>
                <div className='contact__persona-image'></div>

                <div className='contact__persona-info'>
                  <p className='contact__persona-name'>Tim Disseldorp</p>
                  <p className='contact__persona-function'>Product Designer</p>
                  <a
                    href='mailto:info@disseldesign.nl'
                    className='contact__persona-mail'
                  >
                    <div className='contact__persona-icon'>
                      <img src={Mail} alt='Mail' />
                    </div>
                    Get in Touch!
                  </a>
                </div>
              </div>

              <div className='contact__persona'>
                <div className='contact__persona-image'></div>

                <div className='contact__persona-info'>
                  <p className='contact__persona-name'>Lucas Molenaar</p>
                  <p className='contact__persona-function'>Product Designer</p>
                  <a
                    href='mailto:info@disseldesign.nl'
                    className='contact__persona-mail'
                  >
                    <div className='contact__persona-icon'>
                      <img src={Mail} alt='Mail' />
                    </div>
                    Get in Touch!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='contact__form'>
            <ContactForm />
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default Contact;

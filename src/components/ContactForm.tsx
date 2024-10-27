import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    setSending(false);
    if (form.current) {
      setSending(true);
      emailjs
        .sendForm('service_ve7swns', 'template_z9bpzyh', form.current, {
          publicKey: 'Ym3GZJITaMIrsCLma',
        })
        .then(
          () => {
            form.current?.reset();
            setSubmitted(true);
          },
          () => {
            setSending(false);
            setMessage(
              'Er is iets fout gegaan. Probeer het later nog een keer.'
            );
          }
        );
    }
  };

  const onSubmit = () => {
    sendEmail();
  };

  if (message) return <p>{message}</p>;

  if (submitted)
    return (
      <p className='contactform__success'>
        Bedankt voor het invullen van het formulier! We nemen zo snel mogelijk
        contact met je op.
      </p>
    );

  return (
    <form className='contactform' onSubmit={handleSubmit(onSubmit)} ref={form}>
      <div className='contactform__group'>
        <label htmlFor='fname'>Voornaam</label>
        <div className='contactform__inputwrapper'>
          <input
            {...register('fname', {
              required: 'Voornaam is verplicht',
            })}
            type='text'
            id='fname'
            placeholder='Jouw voornaam'
            className={errors.fname ? 'inputerror' : ''}
          />
        </div>
      </div>

      <div className='contactform__group'>
        <label htmlFor='lname'>Achternaam</label>

        <div className='contactform__inputwrapper'>
          <input
            {...register('lname', {
              required: 'Achternaam is verplicht',
            })}
            type='text'
            id='lname'
            placeholder='Jouw achternaam'
            className={errors.lname ? 'inputerror' : ''}
          />
        </div>
      </div>

      <div className='contactform__group'>
        <label htmlFor='email'>E-mail</label>
        <div className='contactform__inputwrapper'>
          <input
            {...register('email', {
              required: 'E-mailadres is verplicht',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ongeldig e-mailadres',
              },
            })}
            type='email'
            id='email'
            placeholder='Jouw e-mailadres'
            className={errors.email ? 'inputerror' : ''}
          />
        </div>
      </div>

      <div className='contactform__group'>
        <label htmlFor='message'>
          Vertel meer over je bedrijf of project doelen:
        </label>
        <div className='contactform__textareawrapper'>
          <textarea
            id='message'
            placeholder='bijv; redesign van je website of het creëren van een hele nieuwe site...'
            rows={7}
            {...register('message', {
              required: 'Bericht is verplicht',
            })}
            className={errors.message ? 'inputerror' : ''}
          />
        </div>
      </div>

      <button className='contactform__submit' disabled={sending}>
        {sending ? 'Bezig...' : 'Verzenden'}
      </button>
    </form>
  );
};

export default ContactForm;

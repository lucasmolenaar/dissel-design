const ContactForm = () => {
  return (
    <form className='contactform'>
      <div className='contactform__group'>
        <label htmlFor='fname'>Voornaam</label>
        <div className='contactform__inputwrapper'>
          <input type='text' id='fname' placeholder='Jouw voornaam' />
        </div>
      </div>

      <div className='contactform__group'>
        <label htmlFor='lname'>Achternaam</label>

        <div className='contactform__inputwrapper'>
          <input type='text' id='lname' placeholder='Jouw achternaam' />
        </div>
      </div>

      <div className='contactform__group'>
        <label htmlFor='email'>E-mail</label>
        <div className='contactform__inputwrapper'>
          <input type='email' id='email' placeholder='Jouw e-mailadres' />
        </div>
      </div>

      <div className='contactform__group'>
        <label htmlFor='message'>
          Vertel meer over je bedrijf of project doelen:
        </label>
        <div className='contactform__textareawrapper'>
          <textarea
            id='email'
            placeholder='bijv; redesign van uw website of het creëren van een hele nieuwe site...'
            rows={7}
          />
        </div>
      </div>

      <button className='contactform__submit'>Verzenden</button>
    </form>
  );
};

export default ContactForm;

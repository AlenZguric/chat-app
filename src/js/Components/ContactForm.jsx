import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm  ()   {

    const [showNotification, setShowNotification] = useState(false);

    const form = useRef();

    

  const sendEmail = (e) => {
    e.preventDefault();

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    emailjs.sendForm
    ('service_soyjoy8',
     'template_txbujlx',
      form.current, 
      '5mjMjo7fMDxxxf0qd')
      .then(
        () => {         
          console.log("Poruka Poslana!!!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div>
            <h3>Kontaktiraj me</h3>
            <form ref={form} onSubmit={sendEmail}>
            <label>Ime i Prezime:</label>
            <input type="text" name="user_name" required/>
            <label>E-mail:</label>
            <input type="email" name="user_email"required />
            <label>Tvoja Poruka!!</label>
            <textarea name="message" required/>
            <input type="submit" value="Pošalji" />
         </form>
         {showNotification && (
            <div className='notificationForm' 
            style={{
                backgroundColor: 'green',
                color: "white",
                padding: "10px",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}>
              <p >Upit je uspješno poslan!</p>
              <span>Očekuj odgovor na email.</span>
            </div>
          )}
        </div>    
    );
};


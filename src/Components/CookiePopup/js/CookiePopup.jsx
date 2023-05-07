import React, { useState, useEffect } from 'react';
import '../../CookiePopup/css/CookiePopup.css';
import { Link } from 'react-router-dom';

export default function CookiePopup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
    if (hasAcceptedCookies) {
      setShowPopup(false);
    }
  }, []);

  function acceptCookies() {
    setShowPopup(false);
    localStorage.setItem('hasAcceptedCookies', true);
  }

  function closePopup() {
    setShowPopup(false);
  }

  if (!showPopup) {
    return null;
  }

  return (
    <div className="cookie-popup">
      <p>
        Ova web stranica koristi kolačiće kako bi se osiguralo najbolje iskustvo korisnika.
        <Link to="/pravila_privatnosti" > Pročitajte više o tome kako koristimo kolačiće.</Link>
      </p>
      <div className="button-group">
        <button className="accept" onClick={acceptCookies}>Prihvaćam</button>
        <button className="close" onClick={closePopup}>X</button>
      </div>
    </div>
  );
}


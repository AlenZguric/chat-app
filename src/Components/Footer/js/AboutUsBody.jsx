import React from "react";
import "../css/aboutUsBodyStyle.css";

export default function AboutUsBody(){
    return (
        <div>
            <article className="aboutusbody">

                <h1>Dobrodošli na moju web stranicu! </h1>

                <p className="leftA">Dakle, web stranica je rađena kao seminarski rad za front-end developera, 
                    s ciljem demonstracije znanja i vještina u korištenju različitih tehnologija i alata.
                     Za izradu stranice korišten je React kao glavni framework, a za stilizaciju i upravljanje CSS-om korišten je SCSS.
                </p>
                <p className="rightA">Jedna od glavnih funkcija web stranice je chat, koji je integriran u stranicu uz pomoć Scaledronea.
                     Korisnici mogu razgovarati u realnom vremenu i dijeliti svoje poglede, pitati pitanja i dijeliti ideje.
                 </p>
                 <p  className="leftA">Također, stranica ima i formu za slanje upita koji se mogu obraditi pomoću EmailJS-a. Ova funkcija
                     omogućuje korisnicima da jednostavno kontaktiraju vlasnike web stranice i postave pitanja ili ostave komentare.
                </p>
                <p className="rightA">Kako bi stranica bila dostupna širokom krugu posjetitelja, implementirana je responzivnost za desktop i mobilne uređaje. 
                    To znači da će se stranica prilagoditi veličini zaslona uređaja na kojem se prikazuje i osigurati optimalno korisničko iskustvo.
                </p>
                <p  className="leftA">Konačno, web stranica je hostana na GitHub Pages, što omogućuje besplatno i jednostavno hostanje web stranica.
                </p>

            </article>
        </div>
    )
}
import React from "react";
import ContactForm from "../../Components/Footer/js/ContactForm";
import Footer from "../../Components/Footer/js/Footer";
import "./contactStyle.css";
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";

export default function Contact(){
  
    return(
           <div >
                <PageTitle title="Kontakt" />
                <CookiePopup/>
                <ContactForm/>
                <Footer/>
           </div>         
    );
}
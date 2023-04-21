import React from "react";
import ContactForm from "./ContactForm";
import "../../css/footer.css";
import AboutUs from "./AboutUs";

export default function Footer () {
    
        const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-container">
                <div className="aboutUs">
                    <AboutUs/>
                </div>

                <div className="contact">
                    <ContactForm/>
                </div>

                <div className="copyright">  
                © <span>{currentYear} </span> 
                Završni rad Alen Zgurić, sva prava pridržana
                </div>
            </div>            
        </footer>
    );
}

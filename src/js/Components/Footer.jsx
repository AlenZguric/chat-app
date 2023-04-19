import React from "react";
import ContactForm from "./ContactForm";
import "../../css/footer.css";

export default function Footer () {
    
        const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-container">
                <div className="contact">
                    <ContactForm/>
                </div>
                <div className="about">
                    <h3>O Stranici</h3>
                    <p>Namjenjeno za završni rad za Front end Deleopera</p>
                </div>
                <div className="copyright">  © <span>{currentYear}</span> Završni rad Alen Zgurić, sva prava pridržana</div>
            </div>            
        </footer>
    );
}

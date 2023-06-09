import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import AboutUsBody from "../../Components/Footer/js/AboutUsBody";
import ContactForm from "../../Components/Footer/js/ContactForm";
import CopyRight from "../../Components/Footer/js/CopyRight";
import PageTitle from "../../Components/Header/js/PageTitle";
import React ,{ useEffect } from "react";


export default function About(){

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return(
        <div>
            <PageTitle title="O Stranici" />
            <CookiePopup/>
            <section>
                <AboutUsBody/>  
            </section>
            <hr/>
        <footer>
        <ContactForm/>    
        <CopyRight/>
        </footer>
        </div>
        
    );
}
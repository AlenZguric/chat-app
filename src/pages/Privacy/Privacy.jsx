import React, {useEffect} from "react";
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";
import PrivacyPolicy from "../../Components/Privacy/PrivacyPolicy";
import CopyRight from "../../Components/Footer/js/CopyRight";
import ContactForm from "../../Components/Footer/js/ContactForm";



export default function Privacy(){

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return(
        <div>
            <PageTitle title="O Stranici" />
            <CookiePopup/>
            <section>
                <PrivacyPolicy/>  
            </section>
        <hr/>
        <footer>
            <ContactForm/>    
            <CopyRight/>
        </footer>
    </div>
    );
}
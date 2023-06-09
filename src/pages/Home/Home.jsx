import FaReactIcons from "../../Components/DownloadIcons/FaReactIcons";
import "./homeStyle.css";
import "../../Components/Footer/css/footer.css";
import "../../Components/Footer/css/contactFormStyle.css";

import React, {useEffect} from "react";
import Footer from "../../Components/Footer/js/Footer"
import ContactForm from "../../Components/Footer/js/ContactForm";
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";




export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);


    return(
          <main>
            <CookiePopup/>
            <PageTitle title="Početna"/>
            <section>
                <div className="title">
                    <h1>FRONT-END DEVELOPER</h1>
                    <h3>završni rad</h3>
                </div>
                <div className="files">
                    <p >Kako bih olakšao pristup svojoj aplikaciji klikom na niže ikone 
                        možete pristupiti GitHub repozitoriju ili preuzeti .zip fajl.    
                     </p>
                    <h4>App Dostupan na:</h4>
                    <FaReactIcons/>
                </div>        
            </section><hr/><hr/>
            <ContactForm/>
            <Footer/>
        </main> 
       
    );
}
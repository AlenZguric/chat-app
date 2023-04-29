import FaReactIcons from "../../Components/DownloadIcons/FaReactIcons";
import "./homeStyle.css";
import "../../Components/Footer/css/footer.css";
import "../../Components/Footer/css/contactFormStyle.css";

import React from "react";
import Footer from "../../Components/Footer/js/Footer"
import ContactForm from "../../Components/Footer/js/ContactForm";




export default function Home(){
    return(
          <main>
            <section>
                <div className="title">
                    <h1>FRONT-END DEVELOPER</h1>
                    <h3>završni rad</h3>
                </div>
                <div className="files">
                    <p >Kako bih olakšao pristup svojoj aplikaciji klikom na niže ikone 
                        možete pristupiti GitHub repozitoriju ili downloadati .zip fajl.    
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
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";

export default function Chat(){
    return(
          <main>
            <PageTitle title="Chat" />
             <CookiePopup/>

            <section>
            <div className="title">
            <h1>FRONT-END DEVELOPER</h1>
            <h3>završni rad</h3>
            </div>
            <div className="files">
                <h4>App Dostupan na:</h4>
            </div>        
            </section>
        </main> 
    );
}
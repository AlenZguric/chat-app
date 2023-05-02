import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/Header/js/PageTitle";



export default function Privacy(){
    return(
          <main>
             <PageTitle title="Pravila i privatnost" />
            <CookiePopup/>
            <section>
                <div className="privacy">
                    <div className="title">
                        <h3><Link to="/" alt="Zguric Apps" >Zguric Apps</Link></h3>
                    </div>
                </div>
            </section>
        </main> 
    );
}
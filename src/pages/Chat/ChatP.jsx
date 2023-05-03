import ChatComponent from "../../Components/Chat/js/ChatComponent";
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";


export default function ChatP(){
    return(
          <main>
            <PageTitle title="Chat" />
             <CookiePopup/>

            <section>
                <ChatComponent/>
            </section>
        </main> 
    );
}
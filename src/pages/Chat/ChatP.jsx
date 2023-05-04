import ChatComponent from "../../Components/Chat/js/ChatComponent";
import JoinRoom from "../../Components/Chat/js/JoinRoom";
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";
import React from "react";


export default function ChatP(){
    return(
          <main>
            <PageTitle title="Chat" />
             <CookiePopup/>
             <JoinRoom/>
             
            <section>
                
                <ChatComponent/>
            </section>
        </main> 
    );
}
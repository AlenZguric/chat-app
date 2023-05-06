
import CookiePopup from "../../Components/CookiePopup/js/CookiePopup";
import PageTitle from "../../Components/Header/js/PageTitle";
import React from "react";
import JoinRoom from "../../Components/Chat/js/JoinRoom";
import ChatComponent from "../../Components/Chat/js/ChatComponent";
import { useState } from "react";


export default function ChatP(){
    const [showCompA, setShowCompA] = useState(true);
    const [name, setName] = useState("");


    function handleSendName(name) {
      setShowCompA(false);
      setName(name);
    }
      
    return(
          <main>
            <PageTitle title="Chat" />
             <CookiePopup/>
             
            <section>
            {showCompA ? (
        <JoinRoom onSend={handleSendName} />
      ) : (
        <ChatComponent name={name} />
      )}
            </section>
        </main> 
    );
}
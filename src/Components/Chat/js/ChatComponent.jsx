import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from "./ChatInput";
import "../css/ChatComponentStyle.css";

function randomName() {
  const adjectives = [
    "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
     "purple", "lively", "nameless"
  ];
  const nouns = [
    "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
   "star"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  useEffect(() => {
    const drone = new window.Scaledrone("phcr8VR9dJAbJ9IO", {
      data: member
    });

    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const newMember = {...member};
      newMember.id = drone.clientId;
      setMember(newMember);
    });

    const room = drone.subscribe("SobaZaProbu");
    room.on('data', (data, member) => {
      setMessages(prevMessages => [...prevMessages, {member, text: data}]);
    });

    return () => {
      drone.close();
    };
  },[] );

  const onSendMessage = (message) => {
    const drone = new window.Scaledrone("phcr8VR9dJAbJ9IO");
    drone.publish({
      room: "SobaZaProbu",
      message
    });
  }

  return (
    <div className="ChatBox">
      <div className="ChatBox-header">
        <h1>My Chat App</h1>
      </div>
      <ChatMessage
        messages={messages}
        currentMember={member}
      />
      <ChatInput
        onSendMessage={onSendMessage}
      />
    </div>
  );
}



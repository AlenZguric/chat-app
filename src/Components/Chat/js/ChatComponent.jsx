import { useState, useEffect } from 'react';
import "../css/chatComponentStyle.css";
const ScaleDrone = window.Scaledrone;

const CLIENT_ID = 'phcr8VR9dJAbJ9IO';

function ChatRoom  (props)  {
  const [drone, setDrone] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');


  
  useEffect(() => {
    const newDrone = new ScaleDrone(CLIENT_ID);
    setDrone(newDrone);    

    newDrone.on('open', () => {
      console.log('Successfully connected to Scaledrone');

      const room = newDrone.subscribe('observable-room');
      room.on('open', () => {
        console.log('Successfully joined room');
      });      

      room.on('members', (m) => {
        setMembers(m);
      });

      room.on('member_join', (member) => {
        setMembers((prevMembers) => [...prevMembers, member]);
      });

      room.on('member_leave', ({ id }) => {
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.id !== id)
        );
      });

      room.on('data', (text, member ) => {
        if (member) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text, member, name: props.name},
          ]);
        } else {
          
        }
      });
    });

    newDrone.on('close', (event) => {
      console.log('Connection was closed', event);
    });

    newDrone.on('error', (error) => {
      console.error(error);
    });

    return () => {
      if (newDrone) {
        newDrone.close();
      }
    };
  }, [] );

  const sendMessage = (e) => {
    e.preventDefault();
    if (name === '') {
      return;
    }
    const message = {
      sender: props.name,
      text: name,
    };
    
    setName('');
    drone.publish({
      room: 'observable-room',
      message : message,
      
    });
  };
   

    const updateMembersDOM = ({ members}) => {
      return (
        <div className="NumRoom">
          <p>{members.length} ON-LINE </p>
          <ul>
            {/* {members.map((member) => (
              <li  key={member.id.name}>
                {member.clientData}{name} 
              </li>
            ))}*/}
          </ul> 
        </div>
      );
    };



    const createMessageElement = (message, index) => {
      const senderClass = message.sender === props.name ? 'sender' : 'receiver';
    
      return (
        <div className={`message ${senderClass}`} key={index}>
          <div className="member" key={message.member?.id}>
            {message.member && message.member.clientData}
          </div>
          <div>
            <h4>{message.sender}: </h4>
            <p>{message.text}</p>
            <span className="sendTime"></span>
          </div>
        </div>
      );
    };
    
 

  return (
    <div className="chat-room">
      {drone && (
        <>
        <h1>Dobrodošli   {props.name}</h1>
        <p className='activeUsers'>{updateMembersDOM({ members: members, name: props.name })}</p>
          <div className="messages">
            {messages.map((message, index) =>
              createMessageElement(message.text, message.member, index)              
            )}
          </div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Unesi text...'
            />
            <button  onClick={sendMessage}>Pošalji</button>
          </form>
          </>
      )}
    </div>
  );
};

export default ChatRoom;
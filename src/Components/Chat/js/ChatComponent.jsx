import { useState, useEffect } from 'react';
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
          // Message is from server
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
      text: name
    };
    
    setName('');
    drone.publish({
      room: 'observable-room',
      message : message,
    });
  };


 
  const updateMembersDOM = () => {
    return (
      <div className='NumRoom'>
        <p>{members.length} Korisnika je u sobi </p>
        <ul>
          {members.map((member) => (
            <li key={member.id}>
              {member.clientData} <span></span>
            </li>
          ))}
        </ul>
      </div>
    );
  };



  const createMessageElement = (message, index) => {
    return (
      <div className="message" key={index}>
        <div className="member" key={message.member?.id}>
          {message.member && message.member.clientData}
        </div>
        <div>
          <strong>{message.sender}: </strong>
          {message.text}
        </div>
      </div>
    );
  };
 

  return (
    <div>
      {drone && (
        <>
        <h1>Dobrodošli,   {props.name}</h1>
          {updateMembersDOM()}
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
            />
            <button  onClick={sendMessage}>Send</button>
          </form>
          </>
      )}
    </div>
  );
};

export default ChatRoom;
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useChatContext } from './ChatContext';

const ScaleDrone = window.Scaledrone;

const CLIENT_ID = 'phcr8VR9dJAbJ9IO';

const ChatRoom = () => {
  const [drone, setDrone] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { username } = useChatContext();
  const { roomId } = useParams();

  useEffect(() => {
    const newDrone = new ScaleDrone(CLIENT_ID);
    setDrone(newDrone);

    newDrone.on('open', () => {
      console.log('Successfully connected to Scaledrone');

      const room = newDrone.subscribe(`observable-room-${roomId}`);
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

      room.on('data', (text, member) => {
        if (member) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text, member },
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
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    setInputValue('');
    drone.publish({
      room: `observable-room-${roomId}`,
      message: inputValue,
    });
  };

  const updateMembersDOM = () => {
    return (
      <div>
        {members.length} users in room:
        <ul>
          {members.map((member) => (
            <li key={member.id} style={{ color: member.clientData }}>
              {member.clientData.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const createMessageElement = (text, member) => {
    return (
      <div className="message">
        <div className="member" style={{ color: member.clientData }}>
          {member.clientData.name}
        </div>
        <div>{text}</div>
      </div>
    );
  };


  return (
    <div>
      {drone && (
        <>
          {updateMembersDOM()}
          <div className="messages">
            {messages.map((message, index) =>
              createMessageElement(message.text, message.member, index)
            )}
          </div>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ChatRoom;

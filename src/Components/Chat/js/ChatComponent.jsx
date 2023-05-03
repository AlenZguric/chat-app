import { useState, useEffect } from 'react';
const Scaledrone = window.Scaledrone; 

export default function ChatComponent() {
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const drone = new Scaledrone('phcr8VR9dJAbJ9IO');
    const room = drone.subscribe('room_name');

    room.on('data', (data, member) => {
      setMessages(prevMessages => [...prevMessages, { text: data, name: member.clientData.name }]);
    });

    return () => {
     drone.disconnect(drone);
    };
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
   const handleMessageSubmit = (event) => {
    event.preventDefault();
    const drone = new Scaledrone('phcr8VR9dJAbJ9IO');
    const room = drone.subscribe('room_name');
    room.publish({ message });
    setMessage('');
  };

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          {message.name}: {message.text}
        </div>
      ))}
      <form onSubmit={handleMessageSubmit}>
        <input type="text" value={message} onChange={handleMessageChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

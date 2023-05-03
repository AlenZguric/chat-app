import { useState } from 'react';
import PropTypes from 'prop-types';

const JoinRoom = ({ onJoin }) => {
  const [username, setUsername] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onJoin(username.trim());
    }
  };

  return (
    <form onSubmit={handleJoin}>
      <label htmlFor="username">Enter your username:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Join</button>
    </form>
  );
};

JoinRoom.propTypes = {
  onJoin: PropTypes.func.isRequired,
};

export default JoinRoom;

import { useState } from "react";

const JoinRoom = ({ onJoin }) => {
  const [name, setName] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();
    onJoin(name );
    setName("");
  };

  return (
    <form onSubmit={handleJoin}>
      <label>
        Unesi Svoje Ime:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Prijavi se</button>
    </form>
  );
};

export default JoinRoom;
import { useState } from "react";
import "../css/JoinRoomStyle.css";

export default function JoinRoom(props) {
  const [name, setName] = useState("");

  function handleSend() {
    if (name.length >= 3) {
      props.onSend(name);
    } else {
      alert("Ime mora sadržavati minimalno 3 slova.");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="insertChatname">
      <h2>Unesi Ime </h2>
      <input value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleKeyPress} />
      <button onClick={handleSend}>Prijavi se</button>
    </div>
  );
}



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

  return (
    <div className="insertChatname">
      <h2>Unesi Ime </h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSend}>Prijavi se</button>
    </div>
  );
}



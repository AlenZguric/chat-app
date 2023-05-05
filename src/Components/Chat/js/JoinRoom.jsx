import { useState } from "react";

export default function JoinRoom(props) {
  const [name, setName] = useState("");

  function handleSend() {
    props.onSend(name);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSend}>Pošalji</button>
    </div>
  );
}



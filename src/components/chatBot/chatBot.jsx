import { useState } from "react";

export default function ChatBot() {
  const [chat, setChat] = useState([]);

  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

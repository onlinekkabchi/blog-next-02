"use client";

import "./chat-bot.css";

import { useEffect, useState, useRef } from "react";

export default function ChatBot() {
  const [chat, setChat] = useState([{ type: "bot", text: "hi" }]);
  const [text, setText] = useState("");
  const chatRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setChat([...chat, { type: "user", text: text }]);
    setText("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const scrollToBottom = () => {
    chatRef.current.lastElementChild.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="chat-bot">
      <form onSubmit={onSubmit}>
        <ul ref={chatRef}>
          {chat.map((item, index) => (
            <li key={index} className={`chat-msg--${item.type}`}>
              {item.text}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import io from "socket.io-client"

const socket  = io()

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('chat message', (msg) => {
      setMessages((prevState) => [...prevState, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      socket.emit('chat message', inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>  )
}

export default Chat
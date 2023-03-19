import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const socket  = io("http://localhost:9090" ,{transports : ['websocket']});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {

  //   socket.on("connectcted")

  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      // socket.emit('chat message', inputValue);
      socket.emit("sendMessage" , {message : inputValue})
      socket.send("hello")
      setInputValue('');
    }
  };

  socket.on("messageList" ,)

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
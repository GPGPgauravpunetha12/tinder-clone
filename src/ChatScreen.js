import React from 'react'
import {useState} from 'react'
import  Avatar  from '@mui/material/Avatar';
import "./ChatScreen.css"

function ChatScreen() {
    const [input,setInput]=useState('');
  const [messages,setMessage]=useState([
      {
          name:'thor',
          image:"https://cdn.wionews.com/sites/default/files/2021/01/22/179571-8.jpg",
          message:'Whats up'
      },
      {
        name:'thor',
        image:"https://cdn.wionews.com/sites/default/files/2021/01/22/179571-8.jpg",
        message:'how its going'
    },
    {
           message:'everything is fine'
    },
  ])
  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...messages, { message: input }]);
    setInput("");
  };

    return (
    <div className="chat__Screen">
     <p className="chatScreen__timestamp"> YOU MATCHED WITH THOR ON 10/12/20</p>
     {messages.map((message) =>
         message.name ?
         (   
         <div className="chatScreen__message">
         <Avatar className="chatScreen__image"
             alt={message.name}
             src={message.image}
             />
         <p className="chatScreen__text">{message.message}</p>   
        </div>  ):(
        <div className="chatScreen__message">
           <p className="chatScreen__textUser">{message.message}</p>   
          </div>
          )
      
      )}
  
        <form action=""className="chatScreen__input">
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
             placeholder="Type a message"type="text"/>
            
            <button
            onClick={handleSend}
            type="submit"
             className="chatScreen__inputButton">Send</button>
        </form>
   
    </div>
  );
};

export default ChatScreen;
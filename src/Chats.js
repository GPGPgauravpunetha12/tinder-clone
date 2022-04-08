import React from 'react'
import './Chats.css'
import Chat from './Chat.js'
function Chats() {
  return (
    <div className="chats">
        <Chat 
        name="thor"
        message="Yo whatsup!"
        timestamp="40 seconds ago"
        profilePic="https://cdn.wionews.com/sites/default/files/2021/01/22/179571-8.jpg"
        />
        
        <Chat 
        name="Natasha"
        message="Yo whatsup!"
        timestamp="4 seconds ago"
        profilePic="https://i.ytimg.com/vi/g-HWIXXvIQo/maxresdefault.jpg"
        />
        
        <Chat 
        name="wonder woman"
        message="Yo whatsup!"
        timestamp="10 days ago"
        profilePic="https://wegotthiscovered.com/wp-content/uploads/2020/07/Wonder-Woman-1984-Gal-Gadot-640x321.jpg"
        />
        
        <Chat 
        name="Hulk"
        message="Yo whatsup!"
        timestamp="4 minutes ago"
        profilePic="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/30/Pictures/_19298b80-a255-11ea-b043-295af9ca78f2.jpg"
        />
    </div>
  )
}

export default Chats
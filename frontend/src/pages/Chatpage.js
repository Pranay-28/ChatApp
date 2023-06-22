import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios'
const Chatpage = () => {
    const [chats,setchats]=useState([]);
    const fetchchats= async()=>{
        const {data}= await axios.get('/API/chat');
        setchats(data);
    };
    useEffect(()=>{
        fetchchats();
    },[])
  return (
    <div>{chats.map((chats)=>(
      <div key={chats._id}>{chats.chatname}</div>
    ))}</div>
  )
}

export default Chatpage

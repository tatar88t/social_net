import React from 'react';
import stl from './chatMessage.module.css';
import { NavLink } from 'react-router-dom';


const ChatMessage =(props) => {
    return(
        <div className = {stl.chatMessage}>
           {props.message}
        </div>
    )
}

export default ChatMessage
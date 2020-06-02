import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';




const Chat =(props) => {

    
    const allmessages = props.messages.map(item => <ChatMessage message = {item.message} id = {item.id} />)

    return(
        <div className = {stl.chat}>
            {allmessages}
        </div>
    )
}

export default Chat
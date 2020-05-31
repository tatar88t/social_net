import React from 'react';
import stl from './chatListItem.module.css';
import { NavLink } from 'react-router-dom';




const ChatListItem =(props) => {
    const chatPath = `/dialogs/${props.id}`
    return(
        <div className = {stl.chatListItem}>
            <NavLink to = {chatPath}>{props.name}</NavLink>   
        </div>
    )
}

export default ChatListItem
import React from 'react';
import stl from './chatListItem.module.css';
import { NavLink } from 'react-router-dom';




const ChatListItem =(props) => {
    const chatPath = `/dialogs/${props.id}`

    
    return(
        <div className = {stl.chatListItem}>
            <img className = {stl.chatListItemImg} src = {props.profileAvatarPath} />
            <NavLink to = {chatPath}>{props.name}</NavLink>   
        </div>
    )
}

export default ChatListItem
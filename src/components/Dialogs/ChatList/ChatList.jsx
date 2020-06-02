import React from 'react';
import stl from './chatList.module.css';
// import { NavLink } from 'react-router-dom';
import ChatListItem from './ChatListItem/ChatListItem';





const ChatList =(props) => {

   

    const chatDialogs = props.data.map(dialogItem => <ChatListItem name = {dialogItem.name} id = {dialogItem.id} profileAvatarPath = {dialogItem.profileAvatarPath} />)
    
    return(
        <div className = {stl.chatList}>
            {chatDialogs}
        </div>
    )
}

export default ChatList
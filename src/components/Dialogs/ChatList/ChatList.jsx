import React from 'react';
import stl from './chatList.module.css';
// import { NavLink } from 'react-router-dom';
import ChatListItem from './ChatListItem/ChatListItem';





const ChatList =(props) => {

   let state = props.store.getState()

    const chatDialogs = state.dialogPage.contacts.map(dialogItem => <ChatListItem name = {dialogItem.name} id = {dialogItem.id} profileAvatarPath = {dialogItem.profileAvatarPath} />)
    
    return(
        <div className = {stl.chatList}>
            {chatDialogs}
        </div>
    )
}

export default ChatList
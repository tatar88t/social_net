import React from 'react';
import stl from './chatList.module.css';
import { NavLink } from 'react-router-dom';
import ChatListItem from './ChatListItem/ChatListItem';

const data = [
    {name: 'Ariana', id: 1},
    {name: 'Amina', id: 2},
    {name: 'Arina', id: 3},
    {name: 'Afina', id: 4}
]
const chatDialogs = data.map(dialogItem => <ChatListItem name = {dialogItem.name} id = {dialogItem.id} />)

const ChatList =(props) => {
    return(
        <div className = {stl.chatList}>
            {chatDialogs}
        </div>
    )
}

export default ChatList
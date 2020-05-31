import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';

const data = [
    {message: 'How Are you?', id: "01"},
    {message: 'Fine, And you?', id: "02"},
    {message: 'I\'m OK as well', id: "03"},
    {message: 'Do you want to go for a walk tonight', id: "04"},
    {message: 'Sure, meet me in the park at 6', id: "05"}
]

const allmessages = data.map(item => <ChatMessage message = {item.message} id = {item.id} />)
const Chat =(props) => {
    return(
        <div className = {stl.chat}>
            {allmessages}
        </div>
    )
}

export default Chat
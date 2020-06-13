import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';




const Chat =(props) => {

   

    const allmessages = props.dialogPage.messages.map(item => <ChatMessage message = {item.message} id = {item.id} />)

    const onSendMessage = () => {
        props.sendMessage()
    }
    
    const onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessage(text)
    }

    return(
        <div className = {stl.chatWrapper}>
            <div className = {stl.chat}>
                {allmessages}    
            </div>
            <textarea onChange = {onMessageChange} value = {props.dialogPage.newMessageText} className = {stl.newMessage} placeholder = 'Enter your message here...'></textarea>
            <div className = {stl.btnWrapper}>
                <button onClick = {onSendMessage}>Send</button>    
            </div>
        </div>
    )
}

export default Chat
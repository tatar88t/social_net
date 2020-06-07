import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';
import {sendMessageCreator, onMessageBodyChangeCreator} from '../../redux/dialogPageReducer';



const Chat =(props) => {

    
    const allmessages = props.messages.map(item => <ChatMessage message = {item.message} id = {item.id} />)

    const sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    
    const onMessageChange = (e) => {
        let text = e.target.value;
        let action = onMessageBodyChangeCreator(text);
        props.dispatch(action);
    }

    return(
        <div className = {stl.chatWrapper}>
            <div className = {stl.chat}>
                {allmessages}    
            </div>
            <textarea onChange = {onMessageChange} value = {props.newMessageText} className = {stl.newMessage} placeholder = 'Enter your message here...'></textarea>
            <div className = {stl.btnWrapper}>
                <button onClick = {sendMessage}>Send</button>    
            </div>
        </div>
    )
}

export default Chat
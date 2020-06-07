import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';
import {sendMessageCreator, onMessageBodyChangeCreator} from '../../redux/dialogPageReducer';
import Chat from './Chat'


const ChatContainer =(props) => {

    
    let state = props.store.getState()

    

    const onSendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    
    const onMessageChange = (text) => {
        
        let action = onMessageBodyChangeCreator(text);
        props.store.dispatch(action);
    }

    return(
        <Chat 
            sendMessage = {onSendMessage} 
            updateMessage = {onMessageChange} 
            messages = {state.dialogPage.messages} 
            newMessageText = {state.dialogPage.newMessageText} />
    )
}

export default ChatContainer
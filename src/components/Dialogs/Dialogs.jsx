import React from 'react';
import stl from './dialogs.module.css';
import ChatList from './ChatList/ChatList';
import Chat from './Chat/Chat';
import {Redirect} from "react-router-dom";




const Dialogs =(props) => {
    // if (props.isAuth == false) return <Redirect to={'/login'} />

    return(
        <div className = {stl.dialogs}>
            <ChatList contacts = {props.contacts} />
            <Chat
                  newMessageText = {props.newMessageText}
                  messages = {props.messages}
                  sendMessage = {props.sendMessage}
                  updateMessage ={props.updateMessage}
                  />
        </div>
    )
}

export default Dialogs
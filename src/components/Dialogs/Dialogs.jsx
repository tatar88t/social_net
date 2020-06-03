import React from 'react';
import stl from './dialogs.module.css';
import ChatList from './ChatList/ChatList';
import Chat from './Chat/Chat';




const Dialogs =(props) => {

    
    

    return(
        <div className = {stl.dialogs}>
            <ChatList contacts = {props.state.contacts} />
            <Chat messages = {props.state.messages} />
        </div>
    )
}

export default Dialogs
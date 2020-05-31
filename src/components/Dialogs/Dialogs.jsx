import React from 'react';
import stl from './dialogs.module.css';
import ChatList from './ChatList/ChatList';
import Chat from './Chat/Chat';

const Dialogs =(props) => {
    return(
        <div className = {stl.dialogs}>
            <ChatList />
            <Chat />
        </div>
    )
}

export default Dialogs
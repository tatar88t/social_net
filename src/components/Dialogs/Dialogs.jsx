import React from 'react';
import stl from './dialogs.module.css';
import ChatList from './ChatList/ChatList';
import ChatContainer from './Chat/ChatContainer';




const Dialogs =(props) => {

    
    

    return(
        <div className = {stl.dialogs}>
            <ChatList store = {props.store} />
            <ChatContainer 
                //   newMessageText = {props.state.newMessageText}
                //   messages = {props.state.messages} 
                //   dispatch = {props.dispatch}
                  store = {props.store} />
        </div>
    )
}

export default Dialogs
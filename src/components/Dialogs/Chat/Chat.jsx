import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';




const Chat =(props) => {

    const newMessage = React.createRef()
    
    const allmessages = props.messages.map(item => <ChatMessage message = {item.message} id = {item.id} />)

    const addNewMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return(
        <div className = {stl.chatWrapper}>
            <div className = {stl.chat}>
                {allmessages}    
            </div>
            <textarea ref = {newMessage} className = {stl.newMessage}></textarea>
            <div className = {stl.btnWrapper}>
                <button onClick = {addNewMessage}>Send</button>    
            </div>
        </div>
    )
}

export default Chat
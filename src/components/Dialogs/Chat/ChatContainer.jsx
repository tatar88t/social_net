import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';
import {sendMessageCreator, onMessageBodyChangeCreator} from '../../redux/dialogPageReducer';
import Chat from './Chat';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    
    return{
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
     return{
        sendMessage: () => {dispatch(sendMessageCreator())},
        updateMessage: (text) => {
            dispatch(onMessageBodyChangeCreator(text));
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
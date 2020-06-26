import React from 'react';
import {sendMessageCreator, onMessageBodyChangeCreator} from '../redux/dialogPageReducer';

import {connect} from 'react-redux';
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {

    return{
        contacts: state.dialogPage.contacts,
        newMessageText: state.dialogPage.newMessageText,
        messages: state.dialogPage.messages,
        isAuth: state.auth.isAuth
    }
}
debugger;
let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {dispatch(sendMessageCreator())},
        updateMessage: (text) => {
            dispatch(onMessageBodyChangeCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
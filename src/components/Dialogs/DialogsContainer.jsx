import React from 'react';
import {sendMessageCreator, onMessageBodyChangeCreator} from '../redux/dialogPageReducer';

import {connect} from 'react-redux';
import Dialogs from "./Dialogs";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return{
        contacts: state.dialogPage.contacts,
        newMessageText: state.dialogPage.newMessageText,
        messages: state.dialogPage.messages
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

// -- Заменяем следующие 2 строчки на compose --
// let AuthRedirectComponent = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
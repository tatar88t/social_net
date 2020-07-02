import React from 'react';
import stl from './chat.module.css';
import { NavLink } from 'react-router-dom';
import ChatMessage from './ChatMessage/ChatMessage';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";




const Chat =(props) => {

   

    const allmessages = props.messages.map(item => <ChatMessage message = {item.message} id = {item.id} />)

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }
    return(
        <div className = {stl.chatWrapper}>
            <div className = {stl.chat}>
                {allmessages}    
            </div>
            <AddMessageFormRedux onSubmit = {addNewMessage}/>

        </div>
    )
}
const maxLength = maxLengthCreator(50)
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component = {Textarea}
                   name = {'newMessageText'}
                   className = {stl.newMessage}
                   placeholder ={'Enter your message here...'}
                   validate={[required, maxLength]}/>
            <div className = {stl.btnWrapper}>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm ({
    form: 'AddMessageForm'
})(AddMessageForm)

export default Chat
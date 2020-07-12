import React from "react";
import stl from './formsControls.module.css';
import {required} from "../../../utils/validators";
import {Field} from "redux-form";


export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return(
        <div className = {hasError? stl.textareaWrapper + ' ' + stl.error : stl.textareaWrapper} >
            <textarea  className = {stl.textarea}  {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>

    )
}
export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return(
        <div className = {hasError? stl.inputWrapper + ' ' + stl.error : stl.inputWrapper} >
            <input  className = {stl.input }  {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>

    )
}
export const createField = (placeholder, name, component, validators, props= {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name ={name}
                   component = {component}
                   validate = {validators}

                   {...props}/>
            {text}
        </div>

    )
}
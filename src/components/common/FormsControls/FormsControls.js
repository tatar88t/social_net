import React from "react";
import stl from './formsControls.module.css';
// const textareaWrapperStyle = {
//     width:  '76%',
//     borderRadius: '10px',
//     display: 'block',
//     marginRight: '50px',
//     fontSize: '16px',
//     height: '104px'
// }
// const textareaStyle = {
//     width: '100%',
//     height: '100%',
//     padding: '12px 28px',
//     borderRadius: '10px',
//     resize: 'none',
//     outline: 'none',
//     border: '1px solid #636e72',
// }

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className = {hasError? stl.textareaWrapper + ' ' + stl.error : stl.textareaWrapper} >
            <textarea  className = {stl.textarea}  {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className = {hasError? stl.inputWrapper + ' ' + stl.error : stl.inputWrapper} >
            <input  className = {stl }  {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}
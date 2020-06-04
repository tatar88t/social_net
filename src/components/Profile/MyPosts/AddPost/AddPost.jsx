import React from 'react';
import stl from './addPost.module.css'

const AddPost = (props) => {
    
    let newPostElement = React.createRef()

    const addNewPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'ADD-POST'});
        
    }
    

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);

    }
    return(
        
        <div className = {stl.addPost}>
            <button className = {stl.addPostBtn} onClick = {addNewPost}>Send</button>
            <textarea ref = {newPostElement} onChange = {onPostChange} className= {stl.addPostArea} placeholder = "Type here..." value = {props.newPostText} />
            
        </div>
                
              
                
    )
}
export default AddPost;

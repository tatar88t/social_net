import React from 'react';
import stl from './addPost.module.css';
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profilePageReducer';


const AddPost = (props) => {
    
    let newPostElement = React.createRef()

    const addNewPost = () => {
        
        props.dispatch(addNewPostActionCreator());
        
    }
    

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
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

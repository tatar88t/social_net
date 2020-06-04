import React from 'react';
import stl from './addPost.module.css'

const AddPost = (props) => {
    
    let newPostElement = React.createRef()

    const addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
        
    }
    

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }
    return(
        
        <div className = {stl.addPost}>
            <button className = {stl.addPostBtn} onClick = {addNewPost}>Send</button>
            <textarea ref = {newPostElement} onChange = {onPostChange} className= {stl.addPostArea} placeholder = "Type here..." value = {props.newPostText} />
            
        </div>
                
              
                
    )
}
export default AddPost;

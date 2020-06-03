import React from 'react';
import stl from './addPost.module.css'

const AddPost = () => {
    
    let newPostElement = React.createRef()

    const addNewPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    
    return(
        
        <div className = {stl.addPost}>
            <button className = {stl.addPostBtn} onClick = {addNewPost}>Send</button>
            <textarea ref = {newPostElement} name="addPost" className= {stl.addPostArea} placeholder = "Type here..."></textarea>
            
        </div>
                
              
                
    )
}
export default AddPost;

import React from 'react';
import stl from './addPost.module.css'

const AddPost = () => {
    return(
        
        <div className = {stl.addPost}>
            <button className = {stl.addPostBtn}>Send</button>
            <textarea name="addPost" className= {stl.addPostArea} placeholder = "Type here..."></textarea>
            
        </div>
                
              
                
    )
}
export default AddPost;

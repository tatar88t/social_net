import React from 'react';
import stl from './addPost.module.css';
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profilePageReducer';
import PostItem from './../PostItem/PostItem';

const AddPost = (props) => {
    
    let newPostElement = React.createRef()

  

    const allmessages = props.profilePage.posts.map(item => <PostItem message = {item.post} likes = {item.likes}/>)

    const onAddNewPost = () => {
        props.addPost()
      
        
    }
    

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return(
        <div>
            <div className = {stl.addPost}>
                <button className = {stl.addPostBtn} onClick = {onAddNewPost}>Send</button>
                <textarea ref = {newPostElement} onChange = {onPostChange} className= {stl.addPostArea} placeholder = "Type here..." value = {props.profilePage.newPostText} />
            </div>
                <div className = {stl.posts}>
                    {allmessages} 
                </div>   
        </div>
                
    )
}
export default AddPost;

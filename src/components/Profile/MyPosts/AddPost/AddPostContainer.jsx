import React from 'react';
import stl from './addPost.module.css';
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profilePageReducer';
import AddPost from './AddPost';


const AddPostContainer = (props) => {
    
    let state = props.store.getState()

    const onAddNewPost = () => {
        
        props.store.dispatch(addNewPostActionCreator());
        
    }
    

    let onPostChange = (text) => {
        
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);

    }
    return(    
        <AddPost updateNewPostText = {onPostChange} addPost = {onAddNewPost} newPostText = {state.profilePage.newPostText} />
    )
}
export default AddPostContainer;

import React from 'react';
import stl from './myPosts.module.css'


import AddPost from "./AddPost/AddPost";
// import messages from '../../Messages/posts'


const MyPosts = (props) => {
    
    


    return(
        <div className = {stl.myPostsSect}>
            <h2 className = {stl.myPostsTitle}>My posts</h2>
            <AddPost posts = {props.posts}
                     newPostText = {props.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText = {props.updateNewPostText}/>
        </div>
    )
}
export default MyPosts;

import React from 'react';
import stl from './myPosts.module.css'


import AddPost from "./AddPost/AddPost";

const MyPosts = React.memo((props) => {




    return(
        <div className = {stl.myPostsSect}>
            <h2 className = {stl.myPostsTitle}>My posts</h2>
            <AddPost posts = {props.posts}
                     addPost = {props.addPost}
                     deletePost = {props.deletePost}
                     profile = {props.profile}
                     addLike ={props.addLike}
                     addMark ={props.addMark}
                     />
        </div>
    )
})
export default MyPosts;

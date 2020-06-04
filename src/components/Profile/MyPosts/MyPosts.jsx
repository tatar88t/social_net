import React from 'react';
import stl from './myPosts.module.css'
import PostItem from './PostItem/PostItem'
import AddPost from './AddPost/AddPost'
// import messages from '../../Messages/posts'


const MyPosts = (props) => {

    
    const allmessages = props.posts.map(item => <PostItem message = {item.post} likes = {item.likes}/>)

    return(
        <div className = {stl.myPostsSect}>
                <h2 className = {stl.myPostsTitle}>My posts</h2>

               <AddPost addPost = {props.addPost}  newPostText = {props.newPostText} updateNewPostText = {props.updateNewPostText} />
              
                <div className = {stl.posts}>
                   { allmessages} 
                </div>
        </div>
    )
}
export default MyPosts;

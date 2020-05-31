import React from 'react';
import stl from './myPosts.module.css'
import PostItem from './PostItem/PostItem'
import AddPost from './AddPost/AddPost'
import messages from './../../Messages/postedMessages'

const MyPosts = () => {
    return(
        <div className = {stl.myPostsSect}>
                <h2 className = {stl.myPostsTitle}>My posts</h2>

               <AddPost />
              
                <div className = {stl.posts}>
                   <PostItem message = {messages[0].post_1}/>
                   <PostItem message = {messages[1].post_2}/> 
                   <PostItem message = {messages[2].post_3}/> 
                   <PostItem message = {messages[3].post_4}/>  
                </div>
        </div>
    )
}
export default MyPosts;

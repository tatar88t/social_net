import React from 'react';
import stl from './myPosts.module.css'
import PostItem from './PostItem/PostItem'
import AddPostContainer from './AddPost/AddPostContainer'
// import messages from '../../Messages/posts'


const MyPosts = (props) => {
    
    let state = props.store.getState()
    
    const allmessages = state.profilePage.posts.map(item => <PostItem message = {item.post} likes = {item.likes}/>)

    return(
        <div className = {stl.myPostsSect}>
                <h2 className = {stl.myPostsTitle}>My posts</h2>

               <AddPostContainer store = {props.store} />
              
                <div className = {stl.posts}>
                   {allmessages} 
                </div>
        </div>
    )
}
export default MyPosts;

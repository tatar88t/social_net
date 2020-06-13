import React from 'react';
import stl from './myPosts.module.css'

import AddPostContainer from './AddPost/AddPostContainer'
// import messages from '../../Messages/posts'


const MyPosts = (props) => {
    
    


    return(
        <div className = {stl.myPostsSect}>
            <h2 className = {stl.myPostsTitle}>My posts</h2>
            <AddPostContainer store = {props.store} />
        </div>
    )
}
export default MyPosts;

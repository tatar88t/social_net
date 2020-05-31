import React from 'react';
import stl from './PostItem.module.css'
const PostItem = (props) => {
    return(
        
        <div className = {stl.postItem}>
                <img src = {require("./img/avatar.jpg")} alt = 'ava-pic' className = {stl.postItemImg}/>
                <div className = {stl.postItemMessage}> {props.message} </div>
        </div>
                   
        
    )
}
export default PostItem;

import React from 'react';
import stl from './PostItem.module.css'
import icn from './css/fontello.css'
const PostItem = (props) => {
    return(
        
        <div className = {stl.postItem}>
                <img src = {require("./../../img/avatar.jpg")} alt = 'ava-pic' className = {stl.postItemImg}/>
                <div className = {stl.postItemMessage}> {props.message} </div>
                <div className = {stl.postItemIcons} >
                    <div className = {stl.postItemLike}>{props.likes}<div className = 'icon-heart-empty'></div></div>
                    <div className = {stl.postItemStar}><div className = 'icon-star-empty'></div></div>
                    <div className = {stl.postItemTrash}><div className = 'icon-trash'></div></div>
                </div>
                
        </div>
                   
        
    )
}
export default PostItem;

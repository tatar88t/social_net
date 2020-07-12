import React, {useState, useEffect} from 'react';
import stl from './PostItem.module.css'
import icn from './css/fontello.css'
import cn from 'classnames'
import defaultAvaImg from "../../../../Assets/img/userAlt.png";
const PostItem = (props) => {
 const [img, setImg] = useState( defaultAvaImg)
    useEffect(()=> {
        props.profile? setImg(props.profile.photos.large) : setImg( defaultAvaImg)
    },[props.profile])


    const onDeletePost = (e) => {
        let target = (e.currentTarget.id)
        props.deletePost(target)
    }
    const onLike = (e) => {
        props.addLike(props.id)

    }
    const onMark = () => {
        props.addMark(props.id)
        console.log(props.id, props.marked)
    }
    return(
        <div className = {stl.postItem} id ={props.id}>
                <img src = {img ?
                    img  :
                    defaultAvaImg
                } alt = 'ava-pic' className = {stl.postItemImg}/>
                <div className = {stl.postItemMessage}> {props.message} </div>
                <div className = {stl.postItemIcons} >
                    <div className = {stl.postItemLike} id ={props.id}  >{props.likes}<div onClick = {onLike} className = {cn('icon-heart', {['icon-heart-empty'] : !props.liked })}></div></div>
                    <div className = {stl.postItemStar} id ={props.id}><div onClick = {onMark} className = {cn('icon-star', {['icon-star-empty'] : !props.marked })}></div></div>
                    <div onClick = {onDeletePost} id ={props.id} className = {stl.postItemTrash}><div className = 'icon-trash'></div></div>
                </div>
                
        </div>
                   
        
    )
}
export default PostItem;

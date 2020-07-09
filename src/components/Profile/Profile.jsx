import React from 'react';
import stl from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Redirect} from "react-router-dom";


    

const Profile = (props) => {
console.log(props.isAuth, 'ISAUTH')
    // if (props.isAuth == false) return <Redirect to={'/login'} />

    return(
        <div className = {stl.profile}>
            <div className = {stl.profileHeadImg}></div>
            <ProfileInfo profile = {props.profile}
                         status = {props.status}
                         updateStatus = {props.updateStatus}
                         isOwner ={props.isOwner}
                         savePhoto = {props.savePhoto}
                         saveProfileInfo = {props.saveProfileInfo}
                         />
            <MyPosts 
                    posts = {props.posts}
                    newPostText = {props.newPostText}
                    addPost = {props.addPost}
                    updateNewPostText = {props.updateNewPostText}
                    deletePost = {props.deletePost}

                      />
        </div>
    )
}
export default Profile;

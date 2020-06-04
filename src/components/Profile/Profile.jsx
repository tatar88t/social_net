import React from 'react';
import stl from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


    

const Profile = (props) => {

    

    return(
        <div className = {stl.profile}>
            <div className = {stl.profileHeadImg}></div>
            <ProfileInfo profileImg = {props.state.profileImg}/>
            <MyPosts posts = {props.state.posts} 
                     newPostText = {props.state.newPostText} 
                     addPost = {props.addPost}
                     updateNewPostText = {props.updateNewPostText} />
        </div>
    )
}
export default Profile;

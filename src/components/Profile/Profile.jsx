import React from 'react';
import stl from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


    

const Profile = (props) => {

    

    return(
        <div className = {stl.profile}>
            <div className = {stl.profileHeadImg}></div>
            <ProfileInfo profileImg = {props.state.profileImg}/>
            <MyPosts posts = {props.state.posts} />
        </div>
    )
}
export default Profile;

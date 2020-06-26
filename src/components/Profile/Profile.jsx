import React from 'react';
import stl from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Redirect} from "react-router-dom";


    

const Profile = (props) => {

    if (props.isAuth == false) return <Redirect to={'/login'} />

    return(
        <div className = {stl.profile}>
            <div className = {stl.profileHeadImg}></div>
            <ProfileInfo store = {props.store} profile = {props.profile} />
            <MyPosts 
                    // posts = {props.state.posts} 
                    //  newPostText = {props.state.newPostText}
                    // dispatch = {props.dispatch} 
                    //  store = {props.store}
                      />
        </div>
    )
}
export default Profile;

import React from 'react';
import stl from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


    

const Profile = (props) => {

    

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

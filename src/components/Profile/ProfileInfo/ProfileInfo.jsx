import React from 'react';
import stl from './profileInfo.module.css';
import ProfileDescr from './ProfileDescr/ProfileDescr';


const ProfileInfo = (props) => {
    return(
        <div className = {stl.profileInfo}>
            
            <img src = {props.profileImg} alt = 'ava-pic' className = {stl.profileAvatar} />
            <ProfileDescr />
            

        </div>
    )
}
export default ProfileInfo;

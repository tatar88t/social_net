import React from 'react';
import stl from './profileInfo.module.css';
import ProfileDescr from './ProfileDescr/ProfileDescr';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvaImg from '../../../Assets/img/userAlt.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let state = props.store.getState()
    

    return(
        <div className = {stl.profileInfo}>
            
            {/* <img src = {state.profilePage.profileImg} alt = 'ava-pic' className = {stl.profileAvatar} /> */}
            <img src = {props.profile.photos.large ? props.profile.photos.large : defaultAvaImg } alt = 'ava-pic' className = {stl.profileAvatar} />
            <ProfileDescr profile = {props.profile} />
            

        </div>
    )
}
export default ProfileInfo;

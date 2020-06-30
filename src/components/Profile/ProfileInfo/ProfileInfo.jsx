import React from 'react';
import stl from './profileInfo.module.css';
import ProfileDescr from './ProfileDescr/ProfileDescr';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvaImg from '../../../Assets/img/userAlt.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    

    return(
        <div className = {stl.profileInfo}>

            <img src = {props.profile.photos.large ? props.profile.photos.large : defaultAvaImg } alt = 'ava-pic' className = {stl.profileAvatar} />
            <ProfileDescr profile = {props.profile}
                          status = {props.status}
                          updateStatus = {props.updateStatus}/>
            

        </div>
    )
}
export default ProfileInfo;

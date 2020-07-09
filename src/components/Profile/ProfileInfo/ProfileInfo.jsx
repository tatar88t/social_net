import React from 'react';
import stl from './profileInfo.module.css';
import ProfileDescr from './ProfileDescr/ProfileDescr';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvaImg from '../../../Assets/img/userAlt.png'



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onProfilePhotoSelected = (e) => {

       if (e.target.files.length) {
           props.savePhoto(e.target.files[0])

       }
    }

    return(
        <div className = {stl.profileInfo}>

            <img src = {props.profile.photos.large ? props.profile.photos.large : defaultAvaImg } alt = 'ava-pic' className = {stl.profileAvatar} />
            {props.isOwner && <input type={'file'} onChange = {onProfilePhotoSelected}/>}
            <ProfileDescr profile = {props.profile}
                          status = {props.status}
                          updateStatus = {props.updateStatus}
                            isOwner = {props.isOwner}
                          saveProfileInfo = {props.saveProfileInfo}/>
            

        </div>
    )
}
export default ProfileInfo;

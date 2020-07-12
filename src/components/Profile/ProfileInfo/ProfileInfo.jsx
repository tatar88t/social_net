import React, {useState} from 'react';
import stl from './profileInfo.module.css';
import ProfileDescr from './ProfileDescr/ProfileDescr';
import Preloader from '../../common/Preloader/Preloader';
import Modal from 'react-modal';
import defaultAvaImg from '../../../Assets/img/userAlt.png';

// Modal.defaultStyles.overlay.backgroundColor = '#7f8c8d';

const ProfileInfo = (props) => {
    const [profilePicShow, setProfilePicShow] = useState(false)

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

            <img onClick={() => setProfilePicShow(true)}
                 src = {props.profile.photos.large ? props.profile.photos.large : defaultAvaImg }
                 alt = 'ava-pic'
                 className = {stl.profileAvatar} />

            <Modal isOpen={profilePicShow}
                   className={stl.photoInModal}
                   overlayClassName = {stl.overlay}
                   ariaHideApp={false}
                    onRequestClose = {() => setProfilePicShow(false)}>
                {/*<div onClick = {() => setProfilePicShow(false)} className = {stl.closePhoto}></div>*/}
                <img src = {props.profile.photos.large ? props.profile.photos.large :
                        defaultAvaImg}
                         alt = 'ava-pic-big' />
                 <div className = {stl.changePhoto}>
                     {props.isOwner &&
                     <div>
                         <label for = 'uploadInputId' className={stl.changePhotoLabel}>
                             Change photo
                         </label>
                         <input type='file'
                                className = {stl.changePhotoInput}
                                onChange = {onProfilePhotoSelected}
                                name ='photoUpload'
                         id={'uploadInputId'}/>
                     </div>

                     }
                 </div>

            </Modal>
            {/*{props.isOwner && <input type={'file'} onChange = {onProfilePhotoSelected}/>}*/}
            <ProfileDescr profile = {props.profile}
                          status = {props.status}
                          updateStatus = {props.updateStatus}
                            isOwner = {props.isOwner}
                          saveProfileInfo = {props.saveProfileInfo}
                          profilePicShow = {profilePicShow}/>
            

        </div>
    )
}
export default ProfileInfo;

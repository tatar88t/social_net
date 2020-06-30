import React from 'react';
import stl from './profileDescr.module.css';
import ProfileStatus from "./ProfileStatus";


const ProfileDescr = (props) => {
    return(
        <div className = {stl.profileDescr}>
            <div>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus  className = {stl.profileStatus} status = {props.status} updateStatus = {props.updateStatus} />
                <div>
                    About me: <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    Occupation: <span>{props.profile.lookingForAJob ? 'Looking for a job' : 'Occupied'}</span>
                </div>
                <div>
                    The job i look for: <span>{props.profile.lookingForAJobDescription}</span> 
                </div>
                <div>
                    VK: <span>{props.profile.contacts.vk}</span> 
                </div>
                <div>
                    Instagram: <span>{props.profile.contacts.instagram}</span> 
                </div>
                <div>
                    GitHub: <span>{props.profile.contacts.github}</span> 
                </div>
            </div>

        </div>
    )
}
export default ProfileDescr;

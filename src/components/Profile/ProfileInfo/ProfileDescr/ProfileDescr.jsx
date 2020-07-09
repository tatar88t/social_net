import React, {useState} from 'react';
import stl from './profileDescr.module.css';
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormRedux from "./ProfileDataForm";


const ProfileDescr = (props) => {
    const [editMode, setEditMode] = useState(false);
    const turnOnEditMode = () => {
        setEditMode(true)
    }
    const onSubmit = (formData) => {
        props.saveProfileInfo(formData).then (
            () => setEditMode(false)
        )

    }
    return(
        <div className = {stl.profileDescr}>
            <div>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusHooks  className = {stl.profileStatus} status = {props.status} updateStatus = {props.updateStatus} />

                {editMode ? <ProfileDataFormRedux initialValues = {props.profile} {...props} onSubmit = {onSubmit} /> :
                <ProfileData turnOnEditMode = {turnOnEditMode} {...props} />
                }
            </div>

        </div>
    )
}
const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: <span>{contactValue}</span>
        </div>
    )
}

const ProfileData = (props) => {
    return(
        <div>
            <div>
                {props.isOwner && <button onClick = {props.turnOnEditMode}>Edit</button>}
            </div>

            <div>
                Information
            </div>
            <div>
                Looking for a job: <span>{props.profile.lookingForAJob ? 'yes' : 'No'}</span>
            </div>
            {props.profile.lookingForAJob &&
            <div>
                The job i look for: <span>{props.profile.lookingForAJobDescription}</span>
            </div>}
            <div>
                About me: <span>{props.profile.aboutMe}</span>
            </div>
            <div>
                Contacts: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key = {key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            }) }
            </div>
        </div>
            )
}

export default ProfileDescr;

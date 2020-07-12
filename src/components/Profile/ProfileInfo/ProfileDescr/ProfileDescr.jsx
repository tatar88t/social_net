import React, {useState} from 'react';
import stl from './profileDescr.module.css';
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormRedux from "./ProfileDataForm";
import cn from 'classnames';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'


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
                <ProfileStatusHooks  className = {stl.profileStatus} status = {props.status} isOwner = {props.isOwner} updateStatus = {props.updateStatus } />

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
    const [contactsVisible, setContactsVisible] = useState(false)
    const toggleContacts = () =>{
        setContactsVisible(!contactsVisible)
    }
    return(
        <>
            <div className={cn({[stl.infoBlockClosed] : props.profilePicShow}, stl.infoBlock)} >

                <div className={stl.turnOnEditModeBlock}>
                    <div/>
                    {props.isOwner && <button className = {stl.toEditMode} onClick = {props.turnOnEditMode}>Edit</button>}
                </div>
                <div className={stl.information}>
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
                </div>

                <div className = {stl.contactsLabel}>
                    Contacts:
                    <span
                        onClick = {toggleContacts}>{contactsVisible ?
                        <MdKeyboardArrowUp /> :
                        <MdKeyboardArrowDown/>}

                </span>
                </div>

            </div>
            <div className = {cn({[stl.contactsOn]: contactsVisible},  stl.contacts)}>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </>
            )
}

export default ProfileDescr;

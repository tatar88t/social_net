import React, {useEffect, useState} from 'react';
import stl from './profileDescr.module.css';

const ProfileStatusHooks = (props) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <div>
            {!editMode && <div>
                <span className = {stl.profileStatus}
                     onClick = {props.isOwner && activateEditMode} > {
                        props.status || (props.isOwner ? 'Click to change status...' : 'no status')
                    }
                </span>
            </div>}
            {editMode && <div>
                <input onChange = {onStatusChange}
                       value = {status}
                       autoFocus = {true}
                       onBlur = {deActivateEditMode}/>
            </div>}
        </div>
    )
}
export default ProfileStatusHooks
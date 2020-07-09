import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import stl from "../../../common/FormsControls/formsControls.module.css";


const ProfileDataForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                {props.isOwner && <button >Save</button>}
            </div>
            {props.error && <div className={stl.sumError}>
                {props.error}
            </div>}
            <div>
                Full Name:
                {createField('Full name', 'fullName', Input, [] )}
            </div>

            <div>
                Looking for a job:
                {createField('Looking for a job?', 'lookingForAJob', Input, [], { type: 'checkbox'} )}
            </div>

            <div>
                The job i look for:
                {createField('What kind of job are you looking for?', 'lookingForAJobDescription', Textarea, [] )}
            </div>
            <div>
                About me:
                {createField('About me', 'aboutMe', Textarea, [] )}
            </div>

            <div>
                Contacts:

                {Object.keys(props.profile.contacts).map(key => {

                    return (
                        <div key = {key}>
                            {key} : {createField(key, `contacts.${key}`, Input,[] )}
                        </div>
                    )

                }) }
            </div>



        </form>
    )

}

const ProfileDataFormRedux = reduxForm ({

    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataFormRedux
// export default ProfileDataForm
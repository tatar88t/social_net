import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import stl from '../common/FormsControls/formsControls.module.css'


const maxLength = maxLengthCreator(40)
const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit} >

                {createField('Email', 'email', Input, [required, maxLength])}
                {createField('Password', 'password', Input, [required, maxLength],
                    {type: 'password'})}
                {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}

                {error && <div className={stl.sumError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>

            </form>
        )
}

const LoginReduxForm = reduxForm ({

    form: 'login'
})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit} />
        </div>
        )

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login})(Login);

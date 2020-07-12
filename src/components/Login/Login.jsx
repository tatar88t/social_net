import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {getCaptcha, captchaSuccess, login} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import stl from '../common/FormsControls/formsControls.module.css'


const maxLength = maxLengthCreator(40)
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit} >
                <div className={stl.loginFormAuthDescr}> For test use following data: <br/>
                    Email: email from resume <br/>
                    Password: 32167bubba
                </div>
                {createField('Email', 'email', Input, [required, maxLength])}
                {createField('Password', 'password', Input, [required, maxLength],
                    {type: 'password'})}
                <div className={stl.rememberBlock}>
                    {createField(null, 'rememberMe', Input, [], {type: 'checkbox'})}
                    <span>remember me</span>
                </div>

                {captchaUrl && <img src={captchaUrl} alt = 'captcha' />}
                {captchaUrl && createField('Enter symbols from picture', 'captcha', Input, [required])}
                {error && <div className={stl.sumError}>
                    {error}
                </div>}
                <div>
                    <button className={stl.btn}>Login</button>
                </div>

            </form>
        )
}

const LoginReduxForm = reduxForm ({

    form: 'login'
})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return(
        <div className={stl.loginForm}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit} captchaUrl = {captchaUrl} />
        </div>
        )

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})
export default connect (mapStateToProps, {login, getCaptcha})(Login);

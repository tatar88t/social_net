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
                <div> For test use following data: <br/>
                    Email: tatar_88@bk.ru <br/>
                    Password: 32167bubba
                </div>
                {createField('Email', 'email', Input, [required, maxLength])}
                {createField('Password', 'password', Input, [required, maxLength],
                    {type: 'password'})}
                {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
                {captchaUrl && <img src={captchaUrl} alt = 'captcha' />}
                {captchaUrl && createField('Enter symbols from picture', 'captcha', Input, [required])}
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

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return(
        <div>
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

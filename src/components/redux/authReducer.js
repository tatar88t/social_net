import {authAPI} from "../../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./usersPageReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false 
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.payload
            }
          
        
        default:
            return state;
    }

}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export default authReducer;

export const getAuthUserData = () => {
    return async(dispatch) => {
        const response = await(authAPI.setAuthUser())
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}
export const login = (email, password, rememberMe) => async(dispatch) => {


    const response = await (authAPI.login(email, password, rememberMe))
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let errMessage = response.data.messages.length > 0 ?
                    response.data.messages[0] :
                    'Check your data, unidentified error occurred'
                dispatch(stopSubmit('login', {_error: errMessage}))
            }
}
export const logout = () => async(dispatch) => {
    const response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}
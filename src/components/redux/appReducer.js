import {authAPI} from "../../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./usersPageReducer";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./authReducer";

const INIT_SUCCESS= 'INIT_SUCCESS';


let initialState = {
    initialized: false,

};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}
export const initSuccess = () => ({type: INIT_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let dispatchPromise = dispatch(getAuthUserData());

    Promise.all([dispatchPromise])
        .then(() => {
        dispatch(initSuccess())
    })


}

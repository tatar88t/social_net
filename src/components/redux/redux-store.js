import {createStore, combineReducers, applyMiddleware} from "redux";
import profilePageReducer from './profilePageReducer';
import dialogPageReducer from './dialogPageReducer';
import usersPageReducer from './usersPageReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;


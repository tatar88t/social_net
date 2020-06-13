import { createStore, combineReducers } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogPageReducer from './dialogPageReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer
});

let store = createStore(reducers);

window.store = store

export default store;


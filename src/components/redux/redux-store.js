import { createStore, combineReducers } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogPageReducer from './dialogPageReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer
});

let store = createStore(reducers);

export default store;


import React from 'react';
import stl from './addPost.module.css';
import {addNewPostActionCreator, onPostChangeActionCreator} from '../../../redux/profilePageReducer';
import AddPost from './AddPost';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
     return{
        addPost: () => {dispatch(addNewPostActionCreator())},
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        }
    }
}


const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;

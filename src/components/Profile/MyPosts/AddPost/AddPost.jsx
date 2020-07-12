import React from 'react';
import stl from './addPost.module.css';
import PostItem from './../PostItem/PostItem';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const AddPost = (props) => {

    const allmessages = props.posts.map(item => <PostItem
                        addLike ={props.addLike}
                        addMark ={props.addMark}
                        profile = {props.profile}
                        deletePost = {props.deletePost}
                        key = {item.id}
                        id = {item.id}
                        liked = {item.liked}
                        message = {item.post}
                        likes = {item.likes}
                        marked = {item.marked}/>)

    const onAddNewPost = (values) => {
        props.addPost(values.newPostText)

    }

    return(
        <div>
                <AddPostFormRedux onSubmit = {onAddNewPost} />
                <div className = {stl.posts}>
                    {allmessages} 
                </div>   
        </div>
                
    )
}
const maxLength30 = maxLengthCreator(30)
const AddPostForm = (props) => {
    return (
        <form className = {stl.addPost} onSubmit={props.handleSubmit}>
            <button className = {stl.addPostBtn} >Send</button>
            <Field component = {Textarea}
                   name = 'newPostText'
                   // className= {stl.addPostArea}
                   placeholder = "Type here..."
                   validate={[required, maxLength30]}
            />
        </form>
        )
}
const AddPostFormRedux = reduxForm({
    form: "AddPostForm"
})(AddPostForm)
export default AddPost;

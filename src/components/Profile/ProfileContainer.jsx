import React from 'react'
import Profile from './Profile';
import {
    addPost,
    deletePost,
    getStatus,
    getUserProfile,
    savePhoto, saveProfileInfo,
    updateStatus,
    uploadPhoto
} from '../redux/profilePageReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedId;
            if (!userId) {
                this.props.history.push('/login')
            }
        };
        // if (!userId) {userId = 2};
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile ()
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile ()
        }

    }

    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}
                 isOwner = {!this.props.match.params.userId}
                 profilePage ={this.props.profilePage}
                 posts ={this.props.profilePage.posts}
                 addPost = {this.props.addPost}
                 status = {this.props.status}
                 updateStatus = {this.props.updateStatus}
                 savePhoto = {this.props.savePhoto}
                     saveProfileInfo = {this.props.saveProfileInfo}
                     />
        )
    }
}

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    loggedId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});


export default compose (
    WithAuthRedirect,
    connect(mapStateToProps,{getUserProfile, addPost, getStatus, updateStatus, deletePost, savePhoto, saveProfileInfo}),
    withRouter,

)(ProfileContainer)
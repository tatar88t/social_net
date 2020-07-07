import React from 'react'
import Profile from './Profile';
import {addPost, deletePost, getStatus, getUserProfile, updateStatus} from '../redux/profilePageReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component {

    
    componentDidMount() {
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
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}
                 profilePage ={this.props.profilePage}
                 posts ={this.props.profilePage.posts}
                 addPost = {this.props.addPost}
                 status = {this.props.status}
                 updateStatus = {this.props.updateStatus} />
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
    connect(mapStateToProps,{getUserProfile, addPost, getStatus, updateStatus, deletePost}),
    withRouter,

)(ProfileContainer)
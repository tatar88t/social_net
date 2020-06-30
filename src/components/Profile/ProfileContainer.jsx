import React from 'react'
import Profile from './Profile';
import {addPost, getStatus, getUserProfile, updateNewPostText, updateStatus} from '../redux/profilePageReducer';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component {

    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = this.props.loggedId};
        // if (!userId) {userId = 2};
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}
                 profilePage ={this.props.profilePage}
                 posts ={this.props.profilePage.posts}
                 newPostText ={this.props.profilePage.newPostText}
                 addPost = {this.props.addPost}
                 updateNewPostText = {this.props.updateNewPostText}
                 status = {this.props.status}
                 updateStatus = {this.props.updateStatus} />
        )
    }
}
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);


// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })


let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    loggedId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps,{getUserProfile, addPost, updateNewPostText})(WithUrlDataContainerComponent)

export default compose (
    connect(mapStateToProps,{getUserProfile, addPost, updateNewPostText, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
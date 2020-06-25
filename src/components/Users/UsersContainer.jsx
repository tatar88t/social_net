
import React from 'react';
// import Users from './Users';
import Users from './Users';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow, unfollow, setCurrentPage, getUsers, toggleIsFetching, setUsers, toggleFollowingProgress} from './../redux/usersPageReducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';



class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            
        });
    }
    render() {
        return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      toggleFollowingProgress = {this.props.toggleFollowingProgress}
                      followingInProgress = {this.props.followingInProgress}
                    />
        </>
    }
} 
let mapStateToProps = (state) => {

    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//      return{
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalCount)  => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }

        
//     }
// }

export default connect(mapStateToProps, { 
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers})(UsersContainer);



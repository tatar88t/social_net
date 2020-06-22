
import React from 'react';
// import Users from './Users';
import Users from './Users';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from './../redux/usersPageReducer';
import Preloader from '../common/Preloader/Preloader';


class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
        
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            
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
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, 
                                      { follow,
                                        unfollow,
                                        setUsers,
                                        setCurrentPage,
                                        setTotalUsersCount,
                                        toggleIsFetching  })(UsersAPIComponent);



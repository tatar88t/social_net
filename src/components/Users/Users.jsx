import React from 'react';
import stl from './users.module.css'
import Paginator from "../common/Pagination/Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div className = {stl.usersBlock}>
            <Paginator totalUsersCount = {props.totalUsersCount}
                       pageSize ={props.pageSize}
                       onPageChanged = {props.onPageChanged}
                       currentPage = {props.currentPage} />

            {props.users.map(user => (
                <User key={user.id}
                      user={user}
                      followingInProgress={props.followingInProgress}
                      follow={props.follow}
                      unfollow={props.unfollow} />)

                )
            }
        </div>
        )

}

export default Users;
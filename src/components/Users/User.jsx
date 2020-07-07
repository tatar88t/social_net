import React from 'react';
import stl from './users.module.css'
import userPhoto from './../../Assets/img/userAlt.png';
import { NavLink } from 'react-router-dom';


let User = ({user, followingInProgress, follow, unfollow }) => {

    return (
        <div className={stl.userItem}>
            <NavLink to = {'/profile/' + user.id}>
                <div className = {stl.userItemAvatar}>
                    <img src = {user.photos.small != null ? user.photos.small : userPhoto} alt = "profile-pic" />
                </div>
            </NavLink>
            <div className = {stl.userItemDescr}>
                <div className = {stl.userItemName}>{user.name}</div>
                <div className = {stl.userItemStatus}>{user.status}</div>
            </div>
            <div className = {stl.userItemBtn}>

                {user.followed ? <button disabled = {followingInProgress.some(id => id === user.id)} onClick = {() => {
                        unfollow(user.id)
                    }}>
                        Unfollow
                    </button> :
                    <button disabled = {followingInProgress.some(id => id === user.id)} onClick = {() => {
                        follow(user.id)
                    }}>
                        Follow
                    </button>}

            </div>
        </div>
    )
}

export default User;


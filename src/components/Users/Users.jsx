import React from 'react';
import stl from './users.module.css'  
import userPhoto from './../../Assets/img/userAlt.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages =[];
// ------------------------pagesCount--------
        for (let i=1; i <= 10; i++) {
            pages.push(i)
        }

    return <div className = {stl.usersBlock}>

    <div className = {stl.pages}>
       
    {pages.map(p => {
                    return <span onClick = {(e) => {props.onPageChanged(p)}} className = {props.currentPage === p && stl.activePage}>{p}</span>})
                }
    </div>
    {   
        
        props.users.map(user => <div key = {user.id} className = {stl.userItem}>
            
            <div className = {stl.userItemAvatar}>
                <img src = {user.photos.small != null ? user.photos.small : userPhoto} alt = "profile-pic" />
            </div>
            
            <div className = {stl.userItemDescr}>
                <div className = {stl.userItemName}>{user.name}</div>
                <div className = {stl.userItemLocation}>{"user.location.city"}, {"user.location.country"}</div>
                <div className = {stl.userItemStatus}>{user.status}</div>
            </div>    
            <div className = {stl.userItemBtn}>
               
                {user.followed ? <button onClick = {() => {props.unfollow(user.id)}}>Unfollow</button> : 
                <button onClick = {() => {props.follow(user.id)}}>Follow</button>}
                   
            </div>   
            
         </div>)

    }
</div>
}

export default Users;
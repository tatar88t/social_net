import React from 'react';
import stl from './users.module.css'  
import * as axios from 'axios';
import userPhoto from './../../Assets/img/userAlt.png';

let Users = (props) => {
    
    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {id: 1, followed: true, name: 'Anna Alien', status: 'Hello', location: {city: 'Moscow', country: 'Russia'}, avatar: 'https://cdn.pixabay.com/photo/2015/10/12/15/10/model-984246__340.jpg'},
    //         {id: 2, followed: false, name: 'Alena Apple', status: 'Hello', location: {city: 'Minsk', country: 'Belarus'}, avatar: 'https://cdn.pixabay.com/photo/2018/01/29/17/01/beautiful-3116587__340.jpg'},
    //         {id: 3, followed: true, name: 'Arina Armstrong', status: 'Слава Украине!', location: {city: 'Kiev', country: 'Ukraine'}, avatar: 'https://cdn.pixabay.com/photo/2015/09/02/13/24/woman-919047__340.jpg'},
    //         {id: 4, followed: false, name: 'Anabel Atkinson', status: 'Hello', location: {city: 'Nursultan', country: 'Kazakhstan'}, avatar: 'https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831__340.jpg'}
    //         ]
        
    //     )
    // }
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
            });
        }
    }
    
   

    return <div className = {stl.usersBlock}>
            <button onClick = {getUsers}Get Users></button>
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
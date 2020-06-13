import React from 'react';
import stl from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
    <nav className = {stl.nav}>
        <div><NavLink to = "/profile" activeClassName = {stl.activeLink}> Profile</NavLink></div>
        <div><NavLink to = "/dialogs" activeClassName = {stl.activeLink}> Messages</NavLink></div>
        <div><NavLink to = "/News" activeClassName = {stl.activeLink}> News</NavLink></div>
        <div><NavLink to = "/Music" activeClassName = {stl.activeLink}> Music</NavLink></div>
        <div><NavLink to = "/users" activeClassName = {stl.activeLink}> Users</NavLink></div>

        <div><NavLink to = "/Settings" activeClassName = {stl.activeLink}> Settings</NavLink></div>
        
      </nav>
    )
}
export default Nav;
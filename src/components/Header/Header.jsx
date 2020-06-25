import React from 'react';
import stl from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className = {stl.header}>
            <img src = {require("./img/logo.svg")} alt = 'logo-pic'/>
            <div className = {stl.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to = {'/login'}>Login</NavLink>}
            </div>
        </header>
    )
    
}

export default Header
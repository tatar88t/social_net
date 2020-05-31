import React from 'react';
import stl from './header.module.css';

const Header = () => {
    return(
        <header className = {stl.header}>
            <img src = {require("./img/logo.svg")} alt = 'logo-pic'/>
        </header>
    )
    
}

export default Header
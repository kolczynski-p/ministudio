import React from "react";
import {
    NavLink
} from "react-router-dom";
import './Navbar.scss'
import logo from '../../assets/logo.svg'


function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Navbar_logoContainer'>
                <img src={logo} alt='Logo' />
                <h4>Minis</h4>
                <h4>Bartini</h4>
            </div>
            <div className='Navbar_menuIconContainer___closed'>
                <NavLink to="/" activeClassName="Navbar-homeLink">
                    Home
            </NavLink>
                <br></br>
                <NavLink to="/gallery" activeClassName="Navbar-galleryLink">
                    Gallery
            </NavLink>
            </div>
        </div>
    );
}

export default Navbar;

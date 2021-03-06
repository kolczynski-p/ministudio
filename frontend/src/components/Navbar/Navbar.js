import React from "react";
import {
    NavLink
  } from "react-router-dom";


function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to="/" activeClassName="home-nav">
                Home
            </NavLink>
            <NavLink to="/gallery" activeClassName="gallery-nav">
                Gallery
            </NavLink>
        </div>
    );
}

export default Navbar;

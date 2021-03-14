import React from "react";
import {
    NavLink
} from "react-router-dom";
import './Navbar.scss'
import logo from '../../assets/logo.svg'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.mouseOut = this.handleMenuClick.bind(this);
        this.state = {
            menuState: 'closed'
        }
    }

    handleMenuClick() {
        const menuIconContainer = document.querySelector('.Navbar-menuIconContainer');
        const navbarExpandableContainer = document.querySelector('.Navbar-expandable');


        if (this.state.menuState == 'closed') {

            menuIconContainer.classList.remove('Navbar-menuIconContainer__closed');
            menuIconContainer.classList.add('Navbar-menuIconContainer__open');

            navbarExpandableContainer.classList.remove('Navbar-expandable__hidden');
            navbarExpandableContainer.classList.add('Navbar-expandable__show');
            this.setState({ menuState: 'open' });
        }
        else if (this.state.menuState == 'open') {

            menuIconContainer.classList.remove('Navbar-menuIconContainer__open');
            menuIconContainer.classList.add('Navbar-menuIconContainer__closed');

            navbarExpandableContainer.classList.remove('Navbar-expandable__show');
            navbarExpandableContainer.classList.add('Navbar-expandable__hidden');
            this.setState({ menuState: 'closed' });
        }
    }
    mouseOut
    render() {
        return (
            <div className='Navbar'>
                <div className='Navbar-expandable Navbar-expandable__hidden'>
                    <div className='Navbar-expandable-linksContainer'>
                        <NavLink to="/" activeClassName="Navbar-homeLink">
                            <h2>Home</h2>
                        </NavLink>
                        <NavLink to="/gallery" activeClassName="Navbar-galleryLink">
                            <h2>Gallery</h2>
                        </NavLink></div>

                </div>
                <div className='Navbar-logoContainer'>
                    <img src={logo} alt='Logo' />
                    <h4>Minis</h4>
                    <h4>Bartini</h4>
                </div>
                <div className={`Navbar-menuIconContainer Navbar-menuIconContainer__${this.state.menuState}`} onClick={this.handleMenuClick}>
                    <div className='Navbar-menuIconLine Navbar-menuIconLine__l'></div>
                    <div className='Navbar-menuIconLine Navbar-menuIconLine__m'></div>
                    <div className='Navbar-menuIconLine Navbar-menuIconLine__s'></div>
                </div>

            </div>
        );
    }
}

export default Navbar;



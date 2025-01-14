import React from 'react';
import './Header.css';
import logo from './logo.svg';
import userIcon from './userIcon.svg'; // Assuming you have a user icon image
import notificationsIcon from './notificationsIcon.svg'; // Assuming you have a notifications icon image

function Header() {
    return (
        <header className="Header">
        <div className="Header-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="Header-search">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="Header-icons">
            <img src={notificationsIcon} alt="notifications" className="Header-icon" />
            <img src={userIcon} alt="user profile" className="Header-icon" />
        </div>
        </header>
    );
}

export default Header;
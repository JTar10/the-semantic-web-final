import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import Profile from '../images/profile.png'

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="logo" className="logo"/>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courseCatalog">Course Catalog</Link></li>
                <li><Link to="/purchaseCourse">Purchase Course</Link></li>
                <li><Link to="/practice">Monitored Practice</Link></li>
                <li><Link to="/schedule">Scheduling</Link></li>
                <li><Link to="/chat">Chat</Link></li>
            </ul>
            <img src={Profile} alt="profile" className="logo"/>
        </nav>
	);
};

export default Navbar;

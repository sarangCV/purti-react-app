import React from 'react';
import { useUserContext } from '../../context/userContext';

import './style.css';

const Navbar = ({title}) => {

    const { signInUser, user, logoutUser} = useUserContext();

    const handleSignout = () => {
        logoutUser()
    }
    
    return (
        <nav className="navbar-items">
            <h2>{title}</h2>
            <button className="btn btn-primary login-btn nav-signout-btn" type="submit" onClick={handleSignout}>
                Sign Out
            </button>
        </nav>
    )
}

export default Navbar

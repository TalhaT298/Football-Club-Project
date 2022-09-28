import React from 'react';
import logo from '../../images/icons8-football-64.png';
import './Header.css';
const Header = () => {
    return (
       <nav className='header'>
            <img src={logo} alt=''></img>
            <h4>Football Clubs</h4>
       </nav>
    );
};

export default Header;
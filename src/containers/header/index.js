import React from 'react';
import logo from '../../logo.svg';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src = {logo} alt = 'logo' height = {80}/>
                <ul>
                    <li><a href = "#home">Home</a></li>
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#work">Work</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;
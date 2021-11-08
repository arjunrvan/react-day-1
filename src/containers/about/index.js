import React from 'react';
import './about.css';
import CardImg from '../img/app.jpg';

class About extends React.Component {
    render() {
        return (
            <div id = 'about'>
                <h1>About</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div id = 'card-container'>
                    <div id = 'card'>
                        <img src = {CardImg} alt = 'App Image'/>
                        <h2>Information</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div id = 'card'>
                        <img src = {CardImg} alt = 'App Image'/>
                        <h2>Data Secure</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div id = 'card'>
                        <img src = {CardImg} alt = 'App Image'/>
                        <h2>Add Card</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
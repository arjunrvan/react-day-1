import React from 'react';
import './work.css';
import workImg from '../img/hand.jpg';

class Work extends React.Component {
    render() {
        return (
            <div id = 'work'>
                <img src = {workImg} alt = 'work image'/>
                <div id = 'container'>
                    <h1>Work</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. </p>
                </div>
                
            </div>
        );
    }
}

export default Work;
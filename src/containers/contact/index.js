import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div id = 'contact'>
                <h1>Contact</h1>
                <p>Submit your email below to receive newsletter</p>
                <form>
                    <input id = 'email-input' type = 'email' placeholder = 'example@example.com'/>
                    <button>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default Contact;
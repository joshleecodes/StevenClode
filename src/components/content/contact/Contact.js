import React from 'react';
import Lines from '../../../assets/imgs/svg/lines.svg';

export default () => (
    <div className="contact-wrapper" id="contact-content">
        <img className='lines' src={Lines}/>
        <div className='contact-content-wrapper'>
            <div className="contact-title-wrapper">
                <h1 className="contact-title">CONTACT</h1>
            </div>
            <div className='contact-text-wrapper'>
                <p className="contact-text">Want to work together or find out more about my projects?</p>
                <p className="contact-text">Drop me a message and I'll be happy to arrange a chat.</p>            
            </div>
            <a className="contact-button" href="mailto: stevenclode@gmail.com">GET IN TOUCH</a>
        </div>
    </div>
);
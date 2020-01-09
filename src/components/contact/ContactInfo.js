import React from 'react';
import './Contact.css';

const ContactInfo = (props) => {
    return (
        <div className='d-flex flex-row align-items-center mb-3'>
            <div className='contactImageContainer'>
                <img className='contactImage' src={props.icon} alt={props.alt} />
            </div>
            <p className='contactText'>{props.text}</p>
        </div>
    );
};

export default ContactInfo;
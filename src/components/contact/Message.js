import React from 'react';

const Message = props => {
    return (
        <div className='mb-4 text-white messageContainer'>
            <div className="mb-2">
                <h5 className='mb-0'>{`${props.fullName} (${props.email})`}</h5>
                <small>{props.date}</small>
            </div>
            <p className="mb-0 text-justify messageContent">
                {props.message}
            </p>
        </div>
    );
};


export default Message;
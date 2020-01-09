import React from 'react';
import './Portfolio.css';

const Button = props => {
    const handleClick = (link) => {
        window.open(link, '_blank');
    }
    return (
        <button className='buttonPortfolio' disabled={props.disabled} onClick={() => handleClick(props.url)}>
            {props.children}
        </button>
    );
};

export default Button;
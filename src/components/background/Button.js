import React from 'react';
import './Background.css';

const Button = props => {
    const classes = props.active ? 'buttonBackground active' : 'buttonBackground';
    return (
        <div className='sectionWrapper'>
            <button className={classes} disabled={props.disabled} onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    );
};

export default Button;
import React from 'react';

const Pagination = props => {
    return (
        <button className='buttonPortfolio active' disabled={props.disabled} onClick={props.handleClick}>
            {props.children}
        </button>
    );
};

export default Pagination;
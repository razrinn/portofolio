import React from 'react';
import './Background.css';

const Background = (props) => {
    const { title, data } = props;
    return (
        <>
            <h2 className='text-white titleSection mb-4'>{title}</h2>
            <div className="backgroundContainer">
                <ul className='backgroundList mr-3'>
                    {
                        data.map((item, idx) => (
                            <li key={idx} className='backgroundItem'>
                                <div className='text-white openSans'>
                                    <h5 className='font-weight-bold mb-0'>{item.date}</h5>
                                    <p className='font-weight-bold mb-0'>{item.place}</p>
                                    <p className='font-weight-bold mb-0'>{item.title}</p>
                                    {
                                        item.detail
                                            ?
                                            <p className='mb-0 font-weight-light text-justify'>{item.detail}</p>
                                            :
                                            null
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default Background;
import React from 'react';
import './Background.css';

const Background = (props) => {
    const { title, data } = props;
    return (
        <>
            <h2 className='text-white titleAbout mb-4'>{title}</h2>
            <div className="backgroundContainer">
                <ul className='backgroundList'>
                    {
                        data.map((item, idx) => (
                            <li key={idx} className='backgroundItem'>
                                <div className='text-white'>
                                    <h5 className='font-weight-bold mb-0'>{item.date}</h5>
                                    <p className='font-weight-bold mb-0'>{item.place}</p>
                                    <p className='mb-0'>{item.title}</p>
                                    {
                                        item.detail
                                            ?
                                            <p className='mb-0 font-weight-light text-justify mr-2'>{item.detail}</p>
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
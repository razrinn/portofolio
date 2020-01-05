import React from 'react';
import Header from '../../components/navbar/Header';
import './LandingPage.css';
import Home from './section/home/Home';

const LandingPage = () => {
    return (
        <div className='mainContent'>
            <Header />
            <Home />
        </div>
    )
};

export default LandingPage;
import React from 'react';
import Header from '../../components/navbar/Header';
import './LandingPage.css';
import Home from './section/home/Home';
import About from './section/about/About';

const LandingPage = () => {
    return (
        <div className='mainContent'>
            <Header />
            <Home />
            <About />
        </div>
    )
};

export default LandingPage;
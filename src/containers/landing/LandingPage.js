import React from 'react';
import Header from '../../components/navbar/Header';
import './LandingPage.css';
import Home from './section/home/Home';
import About from './section/about/About';
import Portfolio from './section/portfolio/Portfolio';

const LandingPage = () => {
    return (
        <div className='mainContent'>
            <Header />
            <Home />
            <About />
            <Portfolio />
        </div>
    )
};

export default LandingPage;
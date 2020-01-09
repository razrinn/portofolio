import React from 'react';
import Header from '../../components/navbar/Header';
import './LandingPage.css';
import Home from './section/home/Home';
import About from './section/about/About';
import Portfolio from './section/portfolio/Portfolio';
import Contact from './section/contact/Contact';

const LandingPage = () => {
    return (
        <div className='mainContentLanding'>
            <Header />
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
};

export default LandingPage;
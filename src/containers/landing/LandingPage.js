import React from 'react';
import './LandingPage.css';
import Home from './section/home/Home';
import About from './section/about/About';
import Portfolio from './section/portfolio/Portfolio';
import Contact from './section/contact/Contact';
import Sidebar from '../../components/navbar/Sidebar';
import Header from '../../components/navbar/Header';
import { useInView } from 'react-intersection-observer';



const LandingPage = () => {
    const [homeRef, homeInView] = useInView({
        threshold: 0.3,
    });
    const [aboutRef, aboutInView] = useInView({
        threshold: 0.3,
    });
    const [portfolioRef, portfolioInView] = useInView({
        threshold: 0.3,
    });
    const [contactRef, contactInView] = useInView({
        threshold: 0.3,
    });

    return (
        <div className='mainContentLanding'>
            <Header />
            <Sidebar home={homeInView} about={aboutInView} portfolio={portfolioInView} contact={contactInView} />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={portfolioRef}>
                <Portfolio />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    )
};

export default LandingPage;
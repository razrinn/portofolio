import React from 'react';
import Header from '../../components/navbar/Header';
import ComingSoon from '../../assets/coming-soon.svg';
import './ComingSoon.css';
import { Container } from 'react-bootstrap';

const ComingSoonPage = () => {
    return (
        <div className='mainContentComing'>
            <Header />
            <img src={ComingSoon} alt="coming soon" className='comingSoonAsset' />
            <Container className='d-flex justify-content-end'>
                <h1 className='text-right display-2 mt-5 comingSoonText'>Coming soon. Please stay tuned.</h1>
            </Container>
        </div>
    );
};

export default ComingSoonPage;
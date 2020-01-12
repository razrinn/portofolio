import React from 'react';
import Header from '../../components/navbar/Header';
import './NotFound.css';
import NotFoundImage from '../../assets/not-found.svg';
import { Container } from 'react-bootstrap';

const NotFoundPage = () => {
    return (
        <section className='wrapperNotFound'>
            <Header />
            <Container className='mainContentNotFound'>
                <div>
                    <img className='imageNotFound' src={NotFoundImage} alt="not found" />
                    <h1 className='text-center font-weight-bold' style={{ color: '#1c1c1c' }}>Oops! Page not Found</h1>
                </div>
            </Container>
        </section >
    );
};

export default NotFoundPage;
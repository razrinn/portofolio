import React from 'react';
import '../Section.css';
import './Home.css';
import OrangeBox from '../../../../assets/landing/home/orange-box.svg';
import BlueLine from '../../../../assets/landing/home/blue-line.svg';
import LinkedIn from '../../../../assets/landing/home/linkedin.svg';
import Instagram from '../../../../assets/landing/home/instagram.svg';
import ProfilePicture from '../../../../assets/landing/home/ray.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <section id='home' className='sectionWrapper'>
            <Container className='sectionWrapper'>
                <img src={OrangeBox} className='orangeBox' alt='orange box' />
                <div className="contentHome">
                    <h1 className='headline display-3 font-weight-bold py-5'>Growing Student, Software Engineer, Web Developer, Casual Gamer, and Movie Enthusiast</h1>
                </div>
                <Row>
                    <Col md={1}>
                        <img src={BlueLine} className='blueLine' alt="blue line" />
                    </Col>
                    <Col md={6} className='socialList'>
                        <span>
                            <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/razrinn">
                                <img src={LinkedIn} className='linkedin' alt="linkedin" />
                            </a>
                            <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/razrinn">
                                <img src={Instagram} className='instagram' alt="instagram" />
                            </a>
                        </span>
                        <p className='openSans description mb-0'>
                            Hello! <br />
                            I am <span className="highlight">Ray Azrin Karim</span> <br />
                            I develop website application both its <span className="highlight">Frontend</span> and <span className="highlight">Backend</span> <br />
                            I also do website/application <span className="highlight">design</span> ocasionally
                        </p>
                    </Col>
                    <Col md={5}>
                        <div className="profilePictureContainer">
                            <img src={ProfilePicture} alt="profile" className='profilePicture' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <h1 className='watermark watermarkHome'>who I am</h1>
        </section>
    );
};

export default Home;
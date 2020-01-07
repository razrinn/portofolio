import React from 'react';
import './Portfolio.css';
import { Card, Col } from 'react-bootstrap';
import Button from './Button';

const PortfolioCard = () => {
    return (
        <Col md={3}>
            <Card className='cardContainer'>
                <div className="cardImage">
                    <Card.Img variant="top" src="https://i.ibb.co/gFzmdRR/tokpedai.png" />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>Tokopedia-UI AI Center Fasilkom UI</Card.Title>
                    <Card.Text>
                        Develop website front-end consist of company profile, blog, and board member
                    </Card.Text>
                    <Button
                        disabled={false}
                    >
                        Visit Website
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PortfolioCard;
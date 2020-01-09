import React from 'react';
import './Portfolio.css';
import { Card, Col } from 'react-bootstrap';
import Button from './Button';

const PortfolioCard = props => {
    return (
        <Col md={3}>
            <Card className='cardContainer'>
                <div className="cardImage">
                    <Card.Img variant="top" src={props.imageUrl} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{props.title}</Card.Title>
                    <Card.Text className='text-justify'>
                        {props.description}
                    </Card.Text>
                    <Button
                        disabled={props.private}
                        url={props.url}
                    >
                        {props.private ? 'Private Project' : 'Visit Website'}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PortfolioCard;
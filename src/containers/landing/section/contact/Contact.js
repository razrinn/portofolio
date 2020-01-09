import React from 'react';
import './Contact.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Email from '../../../../assets/landing/contact/email.svg';
import Location from '../../../../assets/landing/contact/location.svg';
import Phone from '../../../../assets/landing/contact/phone.svg';
import Website from '../../../../assets/landing/contact/website.svg';
import WhiteCircle from '../../../../assets/landing/contact/white-circle.svg';
import ContactInfo from '../../../../components/contact/ContactInfo';
import Message from '../../../../components/contact/Message';


const Contact = () => {

    const [newMessage, setNewMessage] = React.useState({
        fullName: '',
        email: '',
        message: '',
        date: ''
    });

    const [messages, setMessages] = React.useState([
        {
            id: 1,
            fullName: 'Ray Azrin Karim',
            email: 'rayazrin19@gmail.com',
            message: 'kren bgt brooo',
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        },
        {
            id: 2,
            fullName: 'Ray Azrin Karim',
            email: 'rayazrin19@gmail.com',
            message: 'kren bgt brooo',
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        },
        {
            id: 3,
            fullName: 'Ray Azrin Karim',
            email: 'rayazrin19@gmail.com',
            message: 'kren bgt brooo',
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        },
        {
            id: 4,
            fullName: 'Ray Azrin Karim',
            email: 'rayazrin19@gmail.com',
            message: 'Keren lo bro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi facilis molestias, perferendis sit, neque doloremque, optio beatae unde officiis qui numquam recusandae sint laboriosam fuga eum laudantium explicabo facere veniam.',
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        },
        {
            id: 5,
            fullName: 'Ray Azrin Karim',
            email: 'rayazrin19@gmail.com',
            message: 'Keren lo bro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi facilis molestias, perferendis sit, neque doloremque, optio beatae unde officiis qui numquam recusandae sint laboriosam fuga eum laudantium explicabo facere veniam.',
            date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        }
    ]);

    const [isAnonymous, setIsAnonymous] = React.useState(false);

    const contacts = [
        {
            image: Phone,
            alt: 'phone-icon',
            text: '+62 878 8317 7019'
        },
        {
            image: Website,
            alt: 'website-icon',
            text: 'www.razrinn.tech'
        },
        {
            image: Email,
            alt: 'email-icon',
            text: 'rayazrin19@gmail.com'
        },
        {
            image: Location,
            alt: 'location-icon',
            text: 'Jakarta, Indonesia'
        },

    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewMessage(prev => ({ ...prev, [name]: value }));
    };

    const handleAnonymous = () => {
        setNewMessage(prev => ({ ...prev, fullName: '', email: '' }));
        setIsAnonymous(!isAnonymous);
    };

    return (
        <section className="pb-5 overflow-hidden contact sectionWrapper">
            <img src={WhiteCircle} className='whiteCircle' alt='white circle' />
            <Container>
                <h2 id='contact' className='text-white titleSection mb-4'>Send me a message</h2>
                <Row>
                    <Col md={6}>
                        {
                            contacts.map((item, idx) => (
                                <ContactInfo key={idx} icon={item.image} text={item.text} alt={item.alt} />
                            ))
                        }
                        <p className='divider mb-4'>or</p>
                        <Form.Group className='position-relative'>
                            <Form.Control
                                className='form'
                                size="lg"
                                type="text"
                                required
                                name='fullName'
                                maxLength={20}
                                value={newMessage.fullName}
                                onChange={handleChange}
                                disabled={isAnonymous}
                            />
                            <span className={isAnonymous ? 'formLabel disabled' : 'formLabel'}>Fullname</span>
                        </Form.Group>
                        <Form.Group className='position-relative'>
                            <Form.Control
                                className='form'
                                size="lg"
                                type="text"
                                required
                                name='email'
                                value={newMessage.email}
                                onChange={handleChange}
                                disabled={isAnonymous}
                                maxLength={32}
                            />
                            <span className={isAnonymous ? 'formLabel disabled' : 'formLabel'}>Email Address</span>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="Go Anonymous"
                                checked={isAnonymous}
                                onChange={handleAnonymous}
                            />
                        </Form.Group>
                        <Form.Group className='position-relative'>
                            <Form.Control
                                className='form'
                                as="textarea"
                                size='lg'
                                rows="3"
                                required
                                name='message'
                                value={newMessage.message}
                                onChange={handleChange}
                            />
                            <span className='formLabel'>Message</span>
                        </Form.Group>
                        <button className='buttonContact'>SEND</button>
                    </Col>
                    <Col md={6}>
                        <div className='messagesContainer'>
                            {
                                messages.map(item => (
                                    <Message key={item.id} fullName={item.fullName} email={item.email} message={item.message} date={item.date} />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
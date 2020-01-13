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
import Loader from 'react-loader-spinner';
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true


const Contact = () => {

    const [isAnonymous, setIsAnonymous] = React.useState(false);

    const [isCompleted, setIsCompleted] = React.useState(false);

    const [newMessage, setNewMessage] = React.useState({
        fullName: '',
        email: '',
        message: '',
    });

    React.useEffect(() => {
        if (isAnonymous) {
            setIsCompleted(newMessage.message !== '');
        }
        else {
            if (newMessage.fullName !== '' && newMessage.email !== '' && newMessage.message !== '') {
                if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(newMessage.email)) {
                    setIsCompleted(true);
                }
            }
            else {
                setIsCompleted(false);
            }
        }
    }, [newMessage, isAnonymous]);

    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://razrinn-core.herokuapp.com/api/v1/messages')
            .then(res => setMessages(res.data.data))
            .catch(err => console.log(err));
    }, []);

    const [isSending, setIsSending] = React.useState(false);

    const contacts = [
        {
            image: Phone,
            alt: 'phone-icon',
            text: '+62 878 8317 7019'
        },
        {
            image: Website,
            alt: 'website-icon',
            text: 'razrinn.tech'
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

    const handleSend = () => {
        const msg = {
            fullName: isAnonymous ? 'John Doe' : newMessage.fullName,
            email: isAnonymous ? 'johndoe@mail.com' : newMessage.email,
            message: newMessage.message
        }
        axios.post('http://razrinn-core.herokuapp.com/api/v1/messages', msg)
            .then(setIsSending(true))
            .catch(err => console.log(err));
    };

    const handleCloseSend = () => {
        setIsSending(false);
        setIsAnonymous(false);
        setNewMessage({
            fullName: '',
            email: '',
            message: '',
        });
    }

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
                        {
                            isSending
                                ?
                                <div className='d-flex justify-content-center'>
                                    <div className='w-50'>
                                        <Loader className='text-center' type="Triangle" color="#ffffff" />
                                        <p className='mt-3 text-center text-white font-weight-bold'>Your message is being sent and waiting approval from the author</p>
                                        <p className='text-center'><span className='backButton' onClick={handleCloseSend}>Back</span></p>
                                    </div>
                                </div>
                                :
                                <>
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
                                    <button className='buttonContact' disabled={!isCompleted} onClick={handleSend}>SEND</button>
                                </>
                        }
                    </Col>
                    <Col md={6}>
                        <div className='messagesContainer'>
                            {
                                messages.length > 0
                                    ?
                                    messages.map(item => (
                                        <Message key={item.id} fullName={item.fullName} email={item.email} message={item.message} date={item.date} />
                                    ))
                                    :
                                    <p className='text-center text-white'>No approved message yet. Send me a message.</p>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
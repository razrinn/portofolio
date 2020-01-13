import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './About.css';
import BlueBox from '../../../../assets/landing/about/blue-square.svg';
import Background from '../../../../components/background/Background';
import Button from '../../../../components/background/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';



const About = () => {
    const [active, setActive] = React.useState('education');
    React.useEffect(() => {
        switch (active) {
            case 'education':
                loadEducation();
                break;
            case 'volunteer':
                loadVolunteer();
                break;
            case 'work':
                loadWorkExperience();
                break;
            default:
                break;
        }
    }, [active]);
    const [background, setBackground] = React.useState({
        title: '',
        data: []
    });
    const [isLoading, setIsLoading] = React.useState(true);
    const loadEducation = () => {
        setIsLoading(true);
        setTimeout(() => {
            setBackground({
                title: 'Education',
                data: [
                    {
                        date: 'August 2017 - Present',
                        place: 'Faculty of Computer Science, Universitas Indonesia',
                        title: 'Bachelor of Information System',
                    },
                    {
                        date: 'August 2014 - July 2017',
                        place: 'SMAN 1 Bekasi',
                        title: 'Science Study',
                    }
                ]
            });
            setIsLoading(false);
        }, 2000);
    };
    const loadVolunteer = () => {
        setIsLoading(true);
        setTimeout(() => {
            setBackground({
                title: 'Volunteer',
                data: [
                    {
                        date: 'February 2019 - December 2019',
                        place: 'BEM Faculty of Computer Science Universitas Indonesia',
                        title: 'Staff of Project Development Bureau',
                        detail: 'Helped the organization\'s funding by working on freelance web development project from various client. Act as a project manager and front-end developer'
                    },
                    {
                        date: 'November 2018 - June 2019',
                        place: 'Educare 2019',
                        title: 'Project Officer',
                        detail: 'Held the first Educare event with objective to support students to find their professional career paths in form of a seminar, job fair, workshop, and TOEFL test held in Faculty of Computer Science Universitas Indonesia.'
                    },
                    {
                        date: 'June 2018 - August 2018',
                        place: 'OKK UI 2018',
                        title: 'Mentor',
                        detail: 'Became a mentor for 16 new Universitas Indonesia students. Did a several sharing sessions to give insights becoming UI student.'
                    },
                    {
                        date: 'June 2018 - November 2018',
                        place: 'PMB (Pembinaan Mahasiswa Baru) 2018 Fasilkom Universitas Indonesia',
                        title: 'Staff of Supporting Division',
                        detail: 'Provided any equipment, rooms, and places needed for the whole event to sucessfully run'
                    },
                    {
                        date: 'February 2018 - September 2018',
                        place: 'COMPFEST X',
                        title: 'Staff of Business IT Case Competition Division',
                        detail: 'With the team, held national-level business case competition'
                    },
                    {
                        date: 'February 2018 - December 2018',
                        place: 'FUKI Faculty of Computer Science Universitas Indonesia',
                        title: 'Staff of Muslim Development Center Department',
                    },
                    {
                        date: 'February 2018 - December 2018',
                        place: 'BEM Faculty of Computer Science Universitas Indonesia',
                        title: 'Staff of Academic and Leadership Department',
                        detail: 'Improve students\' academic by creating Ekstrak Scele (Platform to retrieve courses notes and practices) and improve students\' leadership skill by creating Tech Leader Camp (2-days bootcamp filled by seminar, workshop, and games)'
                    },
                ],
            });
            setIsLoading(false);
        }, 2000);
    };
    const loadWorkExperience = () => {
        setIsLoading(true);
        setTimeout(() => {
            setBackground({
                title: 'Work Experience',
                data: [
                    {
                        date: 'November 2019 - Present',
                        place: 'Haer.co.id',
                        title: 'Front-end Developer',
                        detail: 'Currently creating the application\'s front-end for human resource management information system with ReactJS'
                    }, {
                        date: 'September 2019 - January 2020',
                        place: 'Faculty of Computer Science Universitas Indonesia',
                        title: 'Teaching Assitant of Web Development and Design',
                        detail: 'Graded 17 student\'s lab tasks and their group tasks, created lab task, and assited any student who needs a help'
                    }, {
                        date: 'June 2019 - August 2019',
                        place: 'DailySocial.id',
                        title: 'Software Engineer Intern',
                        detail: 'Created web services and admin dashboard for hackathon judging application, created web services and admin dashboard for internal blogging CMS, and created a front-end page for an article with Django'
                    },
                    {
                        date: 'February 2019 - June 2019',
                        place: 'Faculty of Computer Science Universitas Indonesia',
                        title: 'Teaching Assistant of Foundation of Computer Architecture',
                        detail: 'Graded 18 students\' lab tasks and homework, created lab task, and assisted any student who needs a help'
                    }
                ]
            });
            setIsLoading(false);
        }, 2000);
    };
    const handleClick = (background) => {
        setActive(background);
    };
    return (
        <section className='about sectionWrapper'>
            <h1 className='watermark watermarkAbout'>what <br /> I <br /> do</h1>
            <img src={BlueBox} className='blueBox' alt='blue box' />
            <Container className='sectionWrapper'>
                <div className="contentAbout">
                    <Row id="about" className='justify-content-between'>
                        <Col md={7}>
                            {
                                isLoading
                                    ?
                                    <div className='d-flex justify-content-center align-items-center loading'>
                                        <Loader type="Triangle" color="#ffffff" />
                                    </div>
                                    :
                                    <Background
                                        title={background.title}
                                        data={background.data}
                                    />
                            }
                            <Row className='justify-content-center mt-5'>
                                <Button disabled={isLoading} active={active === 'education'} handleClick={() => handleClick('education')}>
                                    Education
                                </Button>
                                <Button disabled={isLoading} active={active === 'volunteer'} handleClick={() => handleClick('volunteer')}>
                                    Volunteer
                                </Button>
                                <Button disabled={isLoading} active={active === 'work'} handleClick={() => handleClick('work')}>
                                    Work Experience
                                </Button>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <p className='text-white text-justify openSans'>
                                Ray Azrin Karim is a 19-years-old information system student whose life is dominated by gadgets and technologies. It was in 5th grade when he started to like computer.
                                <br />
                                <br />
                                He is a hard worker and a fast learner who really likes to find what's best for him. And as for right now, he really likes to do web development.
                                <br />
                                <br />
                                He even did some freelance projects with his team to gain more and more real-world working experience. His friends also play a big part in this stage of his life. Many of his friends supported him for what he's been doing, so nothing really could stop him from doing what he likes.
                                <br />
                                <br />
                                He grew up in a loving family who support whatever things he like. So, he always feels confident when he does anything. Even though any hardships, he still keeps smiling.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default About;
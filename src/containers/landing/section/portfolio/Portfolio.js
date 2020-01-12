import React from 'react';
import './Portfolio.css';
import OrangeBox from '../../../../assets/landing/portfolio/orange-box-diagonal.svg';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from '../../../../components/portfolio/PortfolioCard';
import Pagination from '../../../../components/portfolio/Pagination';
import Loader from 'react-loader-spinner';

const Portfolio = () => {
    const [portfolios, setPortfolios] = React.useState([
        {
            id: 1,
            title: 'Haer',
            description: 'Currently developing Human Resource Management System platform\'s front-end. Built using ReactJS',
            private: false,
            url: 'https://haer.co.id',
            imageUrl: 'https://i.ibb.co/HYTg1VT/haer.png'
        },
        {
            id: 2,
            title: 'Tokopedia-UI AI Center Fasilkom UI',
            description: 'Developed website front-end consist of company profile, blog, and board member page. Built using Django',
            private: false,
            url: 'https://tokopedia-ai.cs.ui.ac.id',
            imageUrl: 'https://i.ibb.co/xshHgJZ/tokpedai.png'
        },
        {
            id: 3,
            title: 'BPKP E-Risks',
            description: 'Developed Risk Analytics platform\'s, both its back-end and front-end. Built using Laravel and MySQL',
            private: true,
            url: '',
            imageUrl: 'https://i.ibb.co/3r0KvyM/bpkp.png'
        },
        {
            id: 4,
            title: 'Personal Website',
            description: 'Developed this website from scratch. Built using Figma for design, ReactJS for front-end, and Django for back-end',
            private: false,
            url: 'https://tokopedia-ai.cs.ui.ac.id',
            imageUrl: 'https://i.ibb.co/StCnv0z/thisweb.png'
        },
        {
            id: 5,
            title: 'Penni',
            description: 'Designed and developed whole website front-end consist of landing, register, profile, and marketplace. Built using Django',
            private: false,
            url: 'https://penni.id',
            imageUrl: 'https://i.ibb.co/MphCS2V/penni.png'
        },
        {
            id: 6,
            title: 'BEM FKUI 2019',
            description: 'Developed website both its front-end and back-end. Built using Laravel, MySQL, and Wordpress',
            private: false,
            url: 'https://bem.fk.ui.ac.id',
            imageUrl: 'https://i.ibb.co/wKTsVQ3/bemfk.png'
        },
        {
            id: 7,
            title: 'RS Bhayangkara Lemdiklat Polri',
            description: 'Recreated and developed whole website front-end. Built using Laravel',
            private: false,
            url: 'http://rumkitbhayangkaralemdiklatpolri.com',
            imageUrl: 'https://i.ibb.co/2tF7sd4/rslemdiklat.png'
        },
        {
            id: 8,
            title: 'DTS Indonesia',
            description: 'Develop website front-end consist of profile, article, research, gallery, and FAQ. Build using Laravel',
            private: false,
            url: 'http://dts-indonesia.com',
            imageUrl: 'https://i.ibb.co/yNCtM9C/dts.png'
        },
        {
            id: 9,
            title: 'DailySocial Longform',
            description: 'Developed a page called Longform, research by professional writer packed with interactive and good-looking design',
            private: false,
            url: 'https://dailysocial.id/longform/kecerdasan-buatan-menuju-pilar-ekonomi-indonesia',
            imageUrl: 'https://i.ibb.co/L9ZP8Lc/dailysocial.png'
        },
    ]);
    const [currentPage, setCurrentPage] = React.useState(0);
    React.useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setCurrentPortfolios(portfolios.slice(currentPage * 4, (currentPage + 1) * 4));
            setIsLoading(false);
        }, 1000);
    }, [currentPage, portfolios]);
    const [currentPortofolios, setCurrentPortfolios] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    };
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    return (
        <section className="portfolio sectionWrapper">
            <h1 className='watermark watermarkPortfolio'>what I did</h1>
            <img src={OrangeBox} className='orangeBoxPortfolio' alt='orange box' />
            <Container className='workContainer sectionWrapper'>
                <div className="contentPortfolio">
                    <h2 id='work' className='text-white text-center titleSection mb-4'>Portfolio</h2>
                    <Row className='justify-content-between mt-5 mb-2'>
                        {
                            isLoading
                                ?
                                null
                                :
                                <>
                                    <Col md={2}>
                                        {
                                            currentPage !== 0
                                                ?
                                                <Pagination
                                                    handleClick={handlePrev}
                                                >
                                                    Previous
                                        </Pagination>
                                                :
                                                null
                                        }
                                    </Col>
                                    <Col md={2} className='text-right'>
                                        {
                                            Math.floor(portfolios.length / 4) !== currentPage
                                                ?
                                                <Pagination
                                                    handleClick={handleNext}
                                                >
                                                    Next
                                        </Pagination>
                                                :
                                                null
                                        }
                                    </Col>
                                </>
                        }
                    </Row>
                    <Row>
                        {
                            isLoading
                                ?
                                <div className='d-flex justify-content-center align-items-center loadingPortfolio'>
                                    <Loader type="Triangle" color="#ffffff" />
                                </div>
                                :
                                currentPortofolios.map(porto => (
                                    <PortfolioCard
                                        key={porto.id}
                                        title={porto.title}
                                        description={porto.description}
                                        private={porto.private}
                                        url={porto.url}
                                        imageUrl={porto.imageUrl}
                                    />
                                ))
                        }
                    </Row>

                </div>
            </Container>
        </section>
    );
};

export default Portfolio;
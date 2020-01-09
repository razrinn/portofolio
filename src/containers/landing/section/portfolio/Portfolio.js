import React from 'react';
import './Portfolio.css';
import OrangeBox from '../../../../assets/landing/portfolio/orange-box-diagonal.svg';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from '../../../../components/portfolio/PortfolioCard';
import Pagination from '../../../../components/portfolio/Pagination';
import Loader from 'react-loader-spinner';

const Portfolio = ({ ref }) => {
    const [portfolios, setPortfolios] = React.useState([
        0,
        1,
        2,
        12,
        12,
        12,
        12,
        12,
        12,
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
        <section ref={ref} className="portfolio sectionWrapper">
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
                                currentPortofolios.map((porto, index) => (
                                    <PortfolioCard key={index} idx={porto} />
                                ))
                        }
                    </Row>

                </div>
            </Container>
        </section>
    );
};

export default Portfolio;
import React from 'react';
import './section5.css'
import { Col, Container, Row } from 'react-bootstrap';
import chair from '../../aswetsss/1.png21.png'
import chair2 from '../../aswetsss/1.png25.png'
import chair3 from '../../aswetsss/1.png20.png'
import chair4 from '../../aswetsss/1.png24.png'
import chair5 from '../../aswetsss/1.png23.png'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Section5 = () => {
  return (
    <section className='min-section-5'>
        <Container className='container'>
            <span className='span'></span>
            <h2>Deal of the Week Let's <span>Shopping</span> Today</h2>
            <Swiper
             slidesPerView={1}
             spaceBetween={50}
             modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
             navigation
             pagination={{ clickable: true }}
             autoplay={{delay:2000}}
             className='swiper'
            >
                <SwiperSlide>
            <div className='div'>
            <Row className='d-flex align-items-center'>
            <Col lg={6} md={12} sm={12} className='col-img'>
                <img src={chair} className='chair' />
            </Col>
            <Col lg={6} md={12} sm={12} className='text'>
                <h4>Serenity Chair</h4>
                <p><small>$400</small> $300 </p>
                <Link to='/product'className='link'>shop now</Link>
                <div className='p'>
                    <p>Available : 12</p>
                    <p>Already Sold : 25</p>
                </div>
                <div className='shap'>
                </div>

            </Col>
            </Row>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='div'>
            <Row className='d-flex align-items-center'>
            <Col lg={6} md={12} sm={12} className='col-img'>
                <img src={chair2} className='chair chair2' />
            </Col>
            <Col lg={6} md={12} sm={12} className='text'>
                <h4>Serenity Chair</h4>
                <p><small>$400</small> $300 </p>
                <Link to='/product'className='link'>shop now</Link>
                <div className='p'>
                    <p>Available : 12</p>
                    <p>Already Sold : 25</p>
                </div>
                <div className='shap'>
                </div>

            </Col>
            </Row>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='div'>
            <Row className='d-flex align-items-center'>
            <Col lg={6} md={12} sm={12} className='col-img'>
                <img src={chair3} className='chair chair3' />
            </Col>
            <Col lg={6} md={12} sm={12} className='text'>
                <h4>Serenity Chair</h4>
                <p><small>$400</small> $300 </p>
                <Link to='/product' className='link'>shop now</Link>
                <div className='p'>
                    <p>Available : 12</p>
                    <p>Already Sold : 25</p>
                </div>
                <div className='shap'>
                </div>

            </Col>
            </Row>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='div'>
            <Row className='d-flex align-items-center'>
            <Col lg={6} md={12} sm={12} className='col-img'>
                <img src={chair4} className='chair chair4' />
            </Col>
            <Col lg={6} md={12} sm={12} className='text'>
                <h4>Serenity Chair</h4>
                <p><small>$400</small> $300 </p>
                <Link to='/product' className='link'>shop now</Link>
                <div className='p'>
                    <p>Available : 12</p>
                    <p>Already Sold : 25</p>
                </div>
                <div className='shap'>
                </div>

            </Col>
            </Row>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='div'>
            <Row className='d-flex align-items-center'>
            <Col lg={6} md={12} sm={12} className='col-img'>
                <img src={chair5} className='chair chair5' />
            </Col>
            <Col lg={6} md={12} sm={12} className='text'>
                <h4>Serenity Chair</h4>
                <p><small>$400</small> $300 </p>
                <Link to='/product' className='link'>shop now</Link>
                <div className='p'>
                    <p>Available : 12</p>
                    <p>Already Sold : 25</p>
                </div>
                <div className='shap'>
                </div>

            </Col>
            </Row>
            </div>
            </SwiperSlide>
            </Swiper>
        </Container>
    </section>
  )
}

export default Section5
import React from 'react';
import './section6.css'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Section6 = () => {
  return (
    <>
    <section className='blog'>
        <Container>
        <h1>latest Blogs & news </h1>
            <Row className='row'>
                <Swiper 
                slidesPerView={3}
                spaceBetween={0}
                modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
                navigation
                pagination={{ clickable: true }}
                className='swiper'
                >
               <SwiperSlide>
            <div className='box-parent'>
            <div className='img-box'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdetail' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='box-parent'>
            <div className='img-box img-box-2'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdetail' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='box-parent'>
            <div className='img-box img-box-3'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdetail' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='box-parent'>
            <div className='img-box img-box-4'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdetail' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </SwiperSlide>
            </Swiper>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section6
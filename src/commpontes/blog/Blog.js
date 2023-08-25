import React from 'react';
import './blog.css';
import Banner from '../banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import imag1 from '../../aswetsss/1.png27.jpg'
import imag2 from '../../aswetsss/1.png28.jpg'
import imag3 from '../../aswetsss/1.png29.jpg'
import { BsCalendarDate } from 'react-icons/bs';

const Blog = () => {
  return (
   <>
   <Banner tittle='Blog' smtittle='Blog'/>
   <section className='blog'>
    <Container>
        <Row>
            <Col lg={4} md={6} sm={12}>
            <div className='box-parent'>
            <div className='img-box'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdeatial1' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <div className='box-parent'>
            <div className='img-box img-box-2'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdeatial2' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <div className='box-form'>
                   <h5>Latest Post</h5>
                   <div className='images-box'>
                    <img src={imag1}/>
                    <div>
                    <p>Trends in Furniture Design: Embrace Modernity with these Stylish Pieces</p>
                    <h6><span><BsCalendarDate /></span>14 MAR 2023</h6>
                    </div>
                   </div>
                   <div className='images-box'>
                    <img src={imag2}/>
                    <div>
                    <p>Transforming Your Living Space: Creative Ideas for Furniture</p>
                    <h6><span><BsCalendarDate /></span>14 MAR 2023</h6>
                    </div>
                   </div>
                   <div className='images-box'>
                    <img src={imag3}/>
                    <div>
                    <p>Sustainable Furniture: Exploring Eco-Friendly Options for a Greener Home</p>
                    <h6><span><BsCalendarDate /></span>14 MAR 2023</h6>
                    </div>
                   </div>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <div className='box-parent'>
            <div className='img-box img-box-3'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdeatial3' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <div className='box-parent'>
            <div className='img-box img-box-4'></div>
            <p>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</p>
            <Link to='/blogdeatial4' className='link'>Read more<span><AiOutlineArrowRight /></span> </Link>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <div className='box-form-2'>
                    <h5>Tags Cloud</h5>
                    <div className='span'>
                    <span>chairs</span>
                    <span>bed room</span>
                    <span>bed</span>
                    <span>cabiniet</span>
                    </div>
                   <div className='span'>
                   <span>sofa</span>
                    <span>decor</span>
                    <span>office</span>
                    <span>lamp</span>
                   </div>
            
                    <div className='pp'>
                        <p>Accent furniture</p>
                        <p>speacial offer</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default Blog
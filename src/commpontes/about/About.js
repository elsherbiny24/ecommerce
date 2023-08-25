import React from 'react'
import Banner from '../banner/Banner';
import './about.css'
import { Col, Container, Row } from 'react-bootstrap';
import { BiCartDownload } from 'react-icons/bi';
import { SiTruenas } from 'react-icons/si';
import { FaBabyCarriage } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { PiArmchairLight } from 'react-icons/pi';
import { GoLocation } from 'react-icons/go';
import { BiBed } from 'react-icons/bi';
import { BsPersonHeart } from 'react-icons/bs';
import person1 from '../../aswetsss/1.png17.jpg';
import person2 from '../../aswetsss/1.png18.jpg';
import person3 from '../../aswetsss/1.png19.jpg';
import person4 from '../../aswetsss/1.png20.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const About = () => {
  return (
       <>
        <Banner tittle="About Us" smtittle ="About"/>
        <section className='about-1'>
          <Container>
            <Row>
              <Col lg={3} md={6} sm={12} className='text'>
                <BiCartDownload className='icon'/>
                <h5>
                Original Products
                </h5>
                <p>
                There are many variations of passages of our
                </p>
              </Col>
              <Col lg={3} md={6} sm={12} className='text'>
              <SiTruenas className='icon'/>
              <h5>
              Satisfaction Guarantee
                </h5>
                <p>
                There are many variations of passages of our
                </p>
              </Col>
              <Col lg={3} md={6} sm={12} className='text'>
              <FaBabyCarriage className='icon'/>
              <h5>
              New Arrival Everyday
                </h5>
                <p>
                There are many variations of passages of our
                </p>
              </Col>
              <Col lg={3} md={6} sm={12} className='text'>
              <BsTruck className='icon'/>
              <h5>
              Fast & Free Shipping
                </h5>
                <p>
                There are many variations of passages of our
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='about-2'>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} className='boxs-imges'>
                <div className='img-1'></div>
                <div className='img-2'></div>
                <div className='img-3'></div>
                <div className='img-4'></div>
              </Col>
              <Col lg={6} md={12} sm={12} className='box-text'>
                <h6>our About us</h6>
                <h2>We Believe in pure and<br /> organic quality</h2>
                <p className='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. molestias, 
                  officia vel vero asperiores optio pariatur porro? Eligendi, beatae a. Distinctio rem architecto,
                   error mollitia quis vero non beatae harum. Possimus corrupti,
                  reiciendis fuga doloribus obcaecati magnam ipsa mode nemo quis, 
                  et cum sed ipsam dolorum!</p>
                  <div className='box-icon'>
                    <BsArrowReturnLeft className='icon' />
                    <div>
                      <h4>Products return Policy</h4>
                      <p>Sure there isn't anything embarrassing hidden<br /> in the middle of text</p>
                    </div>
                  </div>
                  <div className='box-icon'>
                  <PiArmchairLight className='icon' />
                    <div>
                      <h4>Products return Policy</h4>
                      <p>Sure there isn't anything embarrassing hidden<br /> in the middle of text</p>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='about-3'>

          <Container>
            <h1>We can Easily buy our Products within<br /> your Budget</h1>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className='boxs'>
                  <BiBed className='icon' />
                  <h5>Choose product</h5>
                  <p>Randomised words which don't look<br /> ours even slightly believable. 
                    if you<br /> are going to use a passages</p>
                    <span>01</span>
                </div>
               
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className='boxs'>
                  <GoLocation className='icon' />
                  <h5>Details Address</h5>
                  <p>Randomised words which don't look<br /> ours even slightly believable. 
                    if you<br /> are going to use a passages</p>
                    <span>02</span>
                </div>
               
              </Col>
              <Col lg={4} md={6} sm={12}>
              <div className='boxs'>
                  <BsPersonHeart className='icon' />
            
                  <h5>Enjoy Products</h5>
                  <p>Randomised words which don't look<br /> ours even slightly believable. 
                    if you<br /> are going to use a passages</p>
                    <span>03</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='customer'>
          <Container>
            <h1>What our clients say</h1>
            <Row className='customer-1'>
              <Swiper
              slidesPerView={3}
              spaceBetween={40}
            
              className='swiper'
              >
                <SwiperSlide>
              <div className='custom'>
                <h1></h1>
                <p>Stylish, high-quality furniture. User-friendly interface.
                   Excellent customer service. 
                   Top choice for finding perfect pieces 
                   for any home or office.</p>
                   <div className='person'>
                    <img src={person1} className='img' />
                    <span>cindy baker</span>
                   </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='custom'>
                <h1></h1>
                <p>Stylish, high-quality furniture. User-friendly interface.
                   Excellent customer service. 
                   Top choice for finding perfect pieces 
                   for any home or office.</p>
                   <div className='person'>
                    <img src={person2} className='img' />
                    <span>cindy baker</span>
                   </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='custom'>
                <h1></h1>
                <p>Stylish, high-quality furniture. User-friendly interface.
                   Excellent customer service. 
                   Top choice for finding perfect pieces 
                   for any home or office.</p>
                   <div className='person'>
                    <img src={person3} className='img' />
                    <span>cindy baker</span>
                   </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='custom'>
                <h1></h1>
                <p>Stylish, high-quality furniture. User-friendly interface.
                   Excellent customer service. 
                   Top choice for finding perfect pieces 
                   for any home or office.</p>
                   <div className='person'>
                    <img src={person4} className='img' />
                    <span>cindy baker</span>
                   </div>
              </div>
              </SwiperSlide>
              </Swiper>
            </Row>
          </Container>
        </section>
        </>
  )
}

export default About
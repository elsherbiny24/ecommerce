import React from 'react';
import './section1.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../aswetsss/1.png06.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Section1 = () => {
  return (
    <section className='min-sec1'>
      <Container>
        <Row className='d-flex align-items-center row1'>
         <Col lg={7} md={12} sm={12} className='col-1'>
          <Swiper
           slidesPerView={1}
           spaceBetween={0}
           modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
           navigation
           pagination={{ clickable: true }}
           autoplay={{delay:2500}}
          
           className='swiper'
          >
            <SwiperSlide>
            <div className='content1'>
            <h6>30% Discount</h6>
            <h1>New Stylish<br /> Decor Furniture</h1>
            <p>Unique Furniture Stylr Design for Your Family</p>
            <h5><span>$400</span> $250</h5>
            <Link to='/product' className='link'>shop now</Link>
          </div>
            </SwiperSlide>
          <SwiperSlide>
          <div className='content1 content2 '>
            <h6>30% Discount</h6>
            <h1>New Stylish<br /> Decor Furniture</h1>
            <p>Unique Furniture Stylr Design for Your Family</p>
            <h5><span>$400</span> $250</h5>
            <Link to='/product' className='link'>shop now</Link>
          </div>
          </SwiperSlide>
         
          </Swiper>
          
         </Col>
         <Col lg={5} md={12} sm={12}>
          <div className='content3'>
            <p>Mega Offer 36% Off</p>
            <h4>Latest Collection Of Furniture</h4>
            <h6>$280</h6>
            <Link to='/product' className='link'>shop now</Link>
          </div>
          <div className='content3 content4'>
          <p>Mega Offer 36% Off</p>
            <h4>Farmaat Wooden<br /> Chaire</h4>
            <h6>$280</h6>
            <Link to='/product' className='link'>shop now</Link>
          </div>
         </Col>
        </Row>
        <Row className='row2'>
          <Col lg={6} md={12} sm={12}>
            <div className='img-text'>
              <img src={chair}  className='chair'/>
              <div className='text-text'>
                <h6>Latest Offer</h6>
                <h4><span>40% Off</span> Only This Friday And<br /> Get Special Gift</h4>
                <Link to='/product' className='link'>shop now</Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className='boxs-textes'>
            <div>
              <h1>975+</h1>
              <p>Home furniture</p>
            </div>
            <div>
              <h1>975+</h1>
              <p>Home furniture</p>
            </div>
            <div>
              <h1>975+</h1>
              <p>Home furniture</p>
            </div>
          </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Section1
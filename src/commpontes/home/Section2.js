import React from 'react'
import './section2.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsTruck } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';







const Section2 = () => {
  return (
    <>
    <div className='min-sec-2'>
    <Container>
        <Row className='row'>
            <Col lg={3} md={12} sm={12}>
                <div className='boxs-icons'>
                <BsTruck className='icon' />
                <div  className='shopping-box'>
                <h5>Free Shipping</h5>
                <p>Free shipping on all US<br/> order or order above $100</p>
                </div>
                </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='boxs-icons'>
                <AiOutlineShoppingCart className='icon' />
                <div className='shopping-box'>
                <h5>Securety Payment</h5>
                <p>Free shipping on all US<br/> order or order above $100</p>
                </div>
                </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='boxs-icons'>
                <BsArrowReturnLeft className='icon' />
                <div className='shopping-box'>
                <h5>14-Day Return</h5>
                <p>Free shipping on all US<br/> order or order above $100</p>
                </div>
                </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='boxs-icons'>
                <BiSupport className='icon'/>
                <div className='shopping-box'>
                <h5>24/7 Support</h5>
                <p>Free shipping on all US<br/> order or order above $100</p>
                </div>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Section2
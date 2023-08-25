import React from 'react';
import './foot.css';
import { Col, Container, Row } from 'react-bootstrap';
import google from '../../aswetsss/1.png31.jpg';
import Appstore from '../../aswetsss/1.png32.jpg';
const Foot = () => {
  return (
    <>
    <div className='foot'>
   <Container>
    <Row>
        <Col lg={6} md={12} sm={12} className='col-1'>
            <div className='text'>
             <h5>Get Surprise Discount</h5>
             <p>join our email subscription now</p>
            </div>
            <div className='email'>
             <input  type='email' placeholder='enter your email'/>
             <a href='#'>supscribe</a>
            </div>
        </Col>
        <Col lg={6} md={12} sm={12} className='col-2'>
        <div className='text'>
             <h5>Download App</h5>
             <p>Save With App & New User Only</p>
            </div>
            <div className='imges'>
                <img  src={google}/>
                <img src={Appstore} />
            </div>
        </Col>
    </Row>
   </Container>
    </div>
    </>
  )
}

export default Foot
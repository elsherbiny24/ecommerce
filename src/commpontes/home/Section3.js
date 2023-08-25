import React from 'react';
import './section3.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
   <>
   <section className='min-section-4'>
    <Container>
        <h1>One Stop Custom and Factory<br />
          Furniture Shopping
        </h1>
        <Row>
            <Col lg={7} md={12} sm={12} className='boxs-imges'>
                <div className='img1 imaeg'>
                    <div>
                        <h5>Bedroom side Table</h5>
                        <h6>Up to <span>40%</span> of item</h6>
                        <Link to="/product" className='link'>shop now</Link>
                    </div>
                </div>
                <div className='img2 imaeg'>
                <div className='div2'>
                        <h5>Bedroom side Table</h5>
                        <h6>Up to <span>40%</span> of item</h6>
                        <Link to="/product" className='link'>shop now</Link>
                    </div>
                </div>
                <div className='img3 imaeg'>
                <div className='div2'>
                        <h5>Bedroom side Table</h5>
                        <h6>Up to <span>40%</span> of item</h6>
                        <Link to="/product" className='link'>shop now</Link>
                    </div>
                </div>
                <div className='img4 imaeg'>
                <div>
                        <h5>Bedroom side Table</h5>
                        <h6>Up to <span>40%</span> of item</h6>
                        <Link to="/product" className='link'>shop now</Link>
                    </div>
                </div>
            </Col>
            <Col lg={5} md={12} sm={12}>
                <div className='img5 imaeg'>
                <div className='div3'>
                        <h5>Bedroom side Table</h5>
                        <h6>Up to <span>40%</span> of item</h6>
                        <Link to="/product" className='link'>shop now</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
   </>
  )
}

export default Section3
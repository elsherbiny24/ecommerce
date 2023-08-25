import React from 'react';
import './blogdeaiail3.css';
import Banner from '../../banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import imag1 from '../../../aswetsss/1.png27.jpg'
import imag2 from '../../../aswetsss/1.png28.jpg'
import imag3 from '../../../aswetsss/1.png29.jpg';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';

const Blogdeatail3 = () => {
  return (
   <>
   <Banner tittle='Blog Details' smtittle='Blog Details'/>
     <section className='blog'>
    <Container>
        <Row>
            <Col lg={8} md={12} sm={12}>
                <div className='contant'>
                    <h3>The Ultimate Guide to Choosing the Perfect Furniture for Your Home</h3>
                    <div className='box-icon'>
                        <span><small><AiOutlineUser className='icon'/></small>tarek Elsherbiny</span>
                        <span><small><BsCalendarDate className='icon'/></small>Furniture</span>
                        <span><small><GiGraduateCap className='icon' /></small>24 FEB 2023</span>
                        <span><small><AiOutlineEye className='icon'/></small>3000K</span>
                    </div>
                    <div className='box-images-3'></div>
                    <p>Choosing the perfect furniture for your home is an exciting yet challenging task. To make the process easier,
                         start by assessing your space and defining your style. Consider the functionality and durability of each piece, 
                         ensuring they align with your lifestyle. Comfort and ergonomics should also be prioritized. Set a realistic budget,
                          mix and match styles, and test furniture before making a purchase. Long-term maintenance and seeking expert advice 
                          can further enhance your decision-making. By following these guidelines, you'll be able to select furniture that not only
                           complements 
                        your space but also reflects your personal taste and meets your functional needs.</p>
                </div>
                <div className='share'>
                    <div className='share-text'>
                        <h5>Tags :<span>#e-commerce , #furniture , #Data , #Sofa , # Chair</span></h5>
                     <div className='text-icons'>
                      <p>Share :
                        <span><BsFacebook className='icon'/></span>
                        <span><BsInstagram className='icon'/></span>
                        <span><AiFillLinkedin className='icon'/></span>
                        <span><BiLogoYoutube className='icon'/></span>
                      </p>
                     </div>
                    </div>
                </div>
                <div className='componant'>
                    <p>Comments</p>
                </div>
                <div className='form'>
                    <h5>Write your Comment</h5>
                 <form>
                    <div className='inputs'>
                        <input type='text' placeholder='Name*' required/>
                        <input type="email" placeholder='Email*' required/>
                    </div>
                    <input type='text' placeholder='Your Comment*' className='input'/>
                    <input type="submit" value="Submit Comment" className='supmit'/>
                 </form>
                </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
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

export default Blogdeatail3
import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from '../../aswetsss/1.png01 (1).png';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TbBrandPicsart } from 'react-icons/tb';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12} className="col-1">
            <h5>About Us</h5>
            <p className="p">
              Etoshi is an exating contrmpotary brand<br /> which focuses on high
              quality products<br /> graphics with britich style
            </p>
            <h6><span><MdEmail /></span>info@mydomain.com</h6>
            <h6><span><BsFillTelephoneFill /></span>+201027752397</h6>
          </Col>
          <Col lg={4} md={12} sm={12} className="col-2">
            <div className="table">
                <img src={logo}/>
              <div className="icons">
                <h6>Follow Us</h6>
                <BsFacebook className="icon" />
                <AiOutlineTwitter className="icon" />
                <TbBrandPicsart className="icon"/>
                <BiLogoLinkedinSquare className="icon" />
                <BsWhatsapp className="icon" />
              </div>
              <div className="pp">
              <p>home</p>
               <p>about</p>
               <p>shop</p>
               <p>blogs</p>
               <p>contact</p>
              </div>
               
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="col-3">
            <h5>My Account</h5>
            <ul>
                <li>My Order</li>
                <li>My Credit</li>
                <li>My Adresses</li>
                <li>My Personal Info</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

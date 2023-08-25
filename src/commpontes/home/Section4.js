import React, { useEffect, useState } from 'react';
import './section4.css';
import Homeproduct from './homeproduct';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Section4 = ({addtocart}) => {
    const [product , setproduct] = useState(Homeproduct)
    let [limitArray, setLimitArray] =useState([])
    let limit = true
    useEffect(() =>{
      if(limit){
        setLimitArray(Homeproduct.slice(0,8))
      }
      else{
        setLimitArray(Homeproduct)
      }
    },[])
    //console.log(limitArray)
  return (
    <>
    <section className='product'>
        <Container>
            <h1>featured products</h1>
        <Swiper
        slidesPerView={4}
        spaceBetween={15}
        >
            <Row>
           
              <Col lg={3} md={6} sm={12}>
              {
                limitArray.map((curElm)=>
                {
                   
                    return(
                        
                        <SwiperSlide className='product-items' key={curElm.id}>
                         <div className='box-imges'>
                            <img src={curElm.Img} className='imge' />
                         </div>
                         <div className='product-text'>
                            <h5>{curElm.tittle}</h5>
                            <div className='icons'>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <BsStarHalf className='icon icon1'/>
                            </div>
                            <p>${curElm.price}</p>
                         </div>
                         <Link className='link' onClick={() => addtocart(curElm)}>ADD TO CART</Link>
                        </SwiperSlide>
                )
                }
                )
               }
              </Col>
              
            </Row>
            </Swiper>
        </Container>
    </section>
    </>
  )
}

export default Section4
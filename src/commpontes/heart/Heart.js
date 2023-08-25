import React from 'react';
import Banner from '../banner/Banner';
import { BsFillHeartbreakFill } from 'react-icons/bs';
import './heart.css'
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsSearchHeart } from 'react-icons/bs';
import { AiTwotoneHeart } from 'react-icons/ai';

const Heart = ({heart , setheart ,addtocart}) => {
    //remove to favourit
    const removefavourit =(product) =>{
        const exit =heart.find((x)=>{
            return x.id===product.id
        })
        if(exit.qty > 0){
            setheart(heart.filter((x)=>{
                return x.id !== product.id
            }))
        }
    }
  return (
   <>
   <Banner tittle="Favourite" smtittle ="Favourite"/>
   {heart.length===0 &&
   <div className='hearts'>
    <h1><BsFillHeartbreakFill /></h1>
    <h2>You do not nave any favourite products</h2>
   </div>
   }
   <div className='favourite'>
    <Container className='content-heart'>
    <h1>Favourite</h1>
        <Row className='favrout-row'>
        
            {heart.map((curElm) =>{
                return(
                    <Col lg={4} md={6} sm={12}>
                        <div className='product-heart'>
                            <AiTwotoneHeart className='pro-heart' onClick={()=>removefavourit(curElm)}/>
                            <img src={curElm.Img} className='img-heart'/>
                            <div className='heart-text'>
                                <h6>{curElm.tittle}</h6>
                                <div className='heart-start'>
                                  <AiFillStar className='icon-heart'/>
                                  <AiFillStar className='icon-heart'/>
                                  <AiFillStar className='icon-heart'/>
                                  <AiFillStar className='icon-heart'/>
                                  <BsStarHalf className='icon-heart'/>
                                </div>
                                <p className='p'>${curElm.price}</p>
                                <a className='a' onClick={()=>addtocart(curElm)}>Add To Cart</a>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
    </Container>
   </div>
   </>
  )
}

export default Heart
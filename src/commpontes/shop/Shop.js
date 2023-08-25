import React, { useRef, useState } from 'react';
import Banner from '../banner/Banner';

import './shop.css';
import Homeproduct from '../home/homeproduct';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsSearchHeart } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';



 const Shop = ({addtocart ,addtofavourit}) => {
  const [product , setproduct] =useState(Homeproduct)
  const [search , setsearch] = useState()
  const [cuerntpage , setcurentpage] =useState(1)
   const reccordsperpage = 8;
   const lastindex = cuerntpage * reccordsperpage;
   const firstindex =lastindex - reccordsperpage;
   const records = Homeproduct.slice(firstindex ,lastindex);
   const pageNumber =[];
    for(let i = 1; i <= Math.ceil(Homeproduct.length / reccordsperpage); i++ ){
        pageNumber.push(i)
    }
  // function change color heart
  const heartref =useRef()
  const toggle =() => {
    heartref.current.classList.toggle('togle-red')
  }
  //function search
  const searchbtn =(cuerntpage)=>{
    const change =records.filter((x)=>{
      return x.cat===cuerntpage;
    })
    setproduct(change)
  }
  return (
       <>
        <Banner tittle="Shop" smtittle ="shop"/>
        <section className='shop-product'>
          <Container className='content'>
            <Row>
              <div className='search'>
                <div className='div-search'>
                <input type="text" className='search-input' autoComplete='off' placeholder='Search' value={search}
                 onChange={(e)=>setsearch(e.target.value)}/> 
                <BsSearchHeart className='icon-search' onClick={()=>searchbtn(search)}/>
                </div>
              </div>
            </Row>
            <Row>
              
                {records.map((curElm)=>{
                  return (
                    <Col lg={3} md={4} sm={12} key={curElm.id}>
                    <div className='boxs-items'>
                      <AiFillHeart ref={heartref} className="heart "  onClick={()=>{
                        return(
                          addtofavourit(curElm),
                          toggle
                        )
                      }}/>
                      <span className='span-1'><small>$200</small>$150</span>
                      <div className='item-imgs'>
                        <span>25%</span>
                        <img src={curElm.Img} className='img'/>
                      </div>
                      <div className='item-text'>
                        <h5>{curElm.tittle}</h5>
                        <div className='icons'>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <BsStarHalf className='icon icon1'/>
                            </div>
                            <button onClick={() => addtocart(curElm)} className='bttn'><MdOutlineAddShoppingCart className='icon' /></button>
                      </div>
                    </div>
                    </Col>
                  )
                })}
                
             
            </Row>
            <div className='div-pagint'>
              <ul className='pagnation'>
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={prePage}>prev</a>
                </li>
                <li>
                  {
                    pageNumber.map((n,i) =>{
                      return(
                        <li className={`page-item ${cuerntpage === n ?'active' : ''}`} key={i}>
                          <a href='#' className='page-link'
                          onClick={() =>changeCPage(n)}>{n}</a>
                        </li>
                      )
                    })
                  }
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={nextPage}>Next</a>
                </li>
              </ul>
            </div>
           
          </Container>
        </section>
        </>
  )
  function prePage(){
   if(cuerntpage !== 1){
    setcurentpage(cuerntpage-1)
   }
  }
  function changeCPage(id){
    setcurentpage(id)
  }
  function nextPage(){
    if(cuerntpage !== lastindex){
     setcurentpage(cuerntpage+1)
    }
  }
}

export default Shop
import React from 'react';
import './banner.css'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = (props) => {
  return (
   <>
   <div className='banner'>
    <div className='about'>
    <h1>{props.tittle}</h1>
    <div className='links'>
        <Link to='/' className='link'>home <span><AiOutlineArrowRight className='icon' /></span></Link>
        <p className='p'>{props.smtittle}</p>
    </div>
    </div>
   </div>
   </>
  )
}

export default Banner
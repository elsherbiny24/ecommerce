import React from 'react';
import './pagination.css'

const Pagination = ({reccordsperpage ,totalproduct}) => {
    const pageNumber =[];
    for(let i = 1; i <= Math.ceil(totalproduct / reccordsperpage); i++ ){
        pageNumber.push(i)
    }
  return (
    <div className='div'>
         <ul className='pagination'>
         {pageNumber.map(number =>{
            <li key={number} className='page-item'>
                <a href='!#' className='page-link'>
                    {number}
                </a>
            </li>
         })}
        </ul>
    </div>
  )
}

export default Pagination
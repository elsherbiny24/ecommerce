import React, { useState } from 'react';
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Home from './commpontes/home/Home';
import Navbars from './commpontes/navbar/Navbars';
import './App.css'
import About from './commpontes/about/About';
import Shop from './commpontes/shop/Shop';
import Cart from './commpontes/cart/Cart';
import Homeproduct from './commpontes/home/homeproduct';
import Foot from './commpontes/Foot/Foot';
import Footer from './commpontes/footer/Footer';
import Blog from './commpontes/blog/Blog';
import BlogDetail1 from './commpontes/blogDetail/blogdeyail1/BlogDetail1';
import Blogdeatail2 from './commpontes/blogDetail/blogdeatail2/Blogdeatail2';
import Blogdeatail3 from './commpontes/blogDetail/blogdeatail3/Blogdeatail3';
import Blogdetail4 from './commpontes/blogDetail/blogdeatail4/Blogdetail4';
import Heart from './commpontes/heart/Heart';




const App = () => {
  const [product , setproduct] =useState([Homeproduct])
  const [cart ,setcart] =useState([])
  //add to cart 
  const addtocart =(product) =>{
   const exit = cart.find((x) =>{
    return x.id === product.id
   })
   if(exit){
    alert('this product add to cart')
    
   }
   else{
    setcart([...cart ,{...product , qty:1}])
    alert('product is added to cart')
   }
  }
  //console.log(cart)
  const [heart ,setheart] =useState([])
  //add to favourit
  const addtofavourit =(product) =>{
    const exit = heart.find((x) =>{
     return x.id === product.id
    })
    if(exit){
     alert('this product add to Favourite')
     
    }
    else{
      setheart([...heart ,{...product , qty:1}])
     alert('product is added to Favourite')
    }
   }
  return (

    <>
    <BrowserRouter>
    <Navbars cart={cart} setcart={setcart}/>
    <Routes>
       <Route path='/' element={ <Home addtocart={addtocart} />} /> 
       <Route path='/about' element={ <About />} /> 
       <Route path='/shop' element={<Shop addtocart={addtocart} addtofavourit={addtofavourit} /> } /> 
       <Route path='/cart' element={<Cart cart={cart} setcart={setcart} /> } /> 
       <Route path='/blog' element={<Blog />} />
       <Route path='/blogdeatial1' element={<BlogDetail1 />} />
       <Route path='/blogdeatial2' element={<Blogdeatail2 />} />
       <Route path='/blogdeatial3' element={<Blogdeatail3 />} />
       <Route path='/blogdeatial4' element={<Blogdetail4 />} />
       <Route path='/heart' element={<Heart heart={heart} setheart={setheart} addtocart={addtocart}/>} />

      

    </Routes>
    <Foot />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
// import React from 'react'
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Herosection from './components/Herosection/Herosection';
import Login from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Footer from './components/footer/Footer';
import Sell from './components/sellpage/Sell'
import Product from './components/Product';
import Detail from './components/Detail'
import { items } from './components/Data';
import { useState } from 'react';
import Search from './components/Search';
import Cart from './components/Cart/cart';
import Coupan from './components/Coupan/Coupan';
import Shippingpage from './components/Shipping page/Shipping_page';
import Amazonpay from './components/Amazon-pay/amazonpay';
// import Payment from './components/Payment/payment';




const App = () =>{
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    
    <Router>
      <Header cart={cart} setData={setData} />
      <Routes>
          <Route path='/' element={<Herosection/>}/>;
          <Route path='/login' element={<Login/>}/>;
          <Route path='/signup' element={<Signup/>}/>;             
          <Route path='/sell' element={<Sell/>}/>;
          <Route path='/product' element={<Product cart={cart} setCart={setCart} items={data} />}/>;
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/search/:term' element={<Search/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
          <Route path='/Coupan' element={<Coupan/>}/>
          <Route path='/Shipping_page' element={<Shippingpage/>}/>
          <Route path='/amazonpay' element={<Amazonpay/>}/>
          {/* <Route path='/payment' element={<Payment/>}/> */}


      </Routes>  
      <Footer/>
    </Router> 
  )
}
export default App;
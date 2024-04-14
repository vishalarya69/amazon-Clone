// import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='productThumb'>
        <div className='imageWrapper'>
            <img src='https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg'  className='ii'/>
        </div>
        <div className='info'>
            <h4 className='title'>Save 10% at checkout</h4>
            <span className='brand'>iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | Segments Slimmest & Lightest Smartphone</span>
        </div>
        <button className='btn'> Collect Coupon</button>
    </div>
  )
}

export default Product
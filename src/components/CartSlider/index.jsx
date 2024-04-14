import React from 'react';
import Slider from "react-slick";
import './style.css';


const CartSlider = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    fade: false,
    arrows: true
  };
  return (
    <>
      <div className='cartSlider-section'>
        <div className='container-fluid'>
          <h2 className='hd'>Up to 50% off | Curated furniture to enhance your home from stores near you</h2>
          <Slider {...settings} className='cart_slider_Main'>
            <div className='item'>
              <div className='info'>
                <img src='https://m.media-amazon.com/images/I/71jRdyIdruL._AC_SY200_.jpg' alt='1' />
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/41vcjiKGPlL._AC_SY200_.jpg'  alt='2'  />
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/61BeLAzLy+L._AC_SY200_.jpg' alt='3' />
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/71RC8cFcyIL._AC_SY200_.jpg'  alt='4' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/81HSqN9mfPL._AC_SY200_.jpg'  alt='5' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/51hJMyKd1qL._AC_SY200_.jpg'  alt='6' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/71I4OzmQE0L._AC_SY200_.jpg'   alt='7' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/419srwglARL._AC_SY200_.jpg' alt='8'  />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/6110VP0x-aL._AC_SY200_.jpg'  alt='9' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/81579EkxOrL._AC_SY200_.jpg' alt='10'  />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/81ytNEduC4L._AC_SY200_.jpg'  alt='11' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/41Mguovw4cL._AC_SY200_.jpg' alt='12'  />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/71P-ppqE9YL._AC_SY200_.jpg'  alt='13' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/71k4PExAnYL._AC_SY200_.jpg' alt='14' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/71qaI-Gl8OL._AC_SY200_.jpg' alt='15' />

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/I/61HfnxT+BkL._AC_SY200_.jpg' alt='16'  />

              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CartSlider
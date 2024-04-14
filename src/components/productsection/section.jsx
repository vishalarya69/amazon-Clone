import React from 'react';
import Slider from "react-slick";
import './coupon.css';


const CartSlider = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
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
                <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_9_434x434._SS400_QL85_.jpg' alt='1' height={"200px"}/>
                <h5>SmartPhones & Accesisories</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_8_434x434._SS400_QL85_.jpg'  alt='2'height={"200px"}  />
              <h5>TVs & Appliances</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_7_434x434._SS400_QL85_.jpg' alt='3'height={"200px"} />
              <h5>Electronics</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_6_434x434._SS400_QL85_.jpg'  alt='4' height={"200px"}/>
              <h5>Home & Kitchen</h5>

              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_5_434x434._SS400_QL85_.jpg'  alt='5'height={"200px"} />
              <h5>Clothing & Accesisories</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_4_434x434._SS400_QL85_.jpg'  alt='6'height={"200px"} />
              <h5>Daily Kitchen</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_3_434x434._SS400_QL85_.jpg'   alt='7' height={"200px"}/>
              <h5>Book Video & Games</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_10_434x434._SS400_QL85_.jpg' alt='8' height={"200px"} />
              <h5>Book Video & Games</h5>
              </div>
            </div>
            <div className='item'>
              <div className='info'>
              <img src='https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_11_434x434._SS400_QL85_.jpg'  alt='9'height={"200px"} />
              <h5>Amazon Brands & more</h5>
              </div>
           
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CartSlider
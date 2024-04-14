import React from 'react'
import './Coupan.css'

import Slider from "react-slick";
// import CartSlider from '../Components/CartSlider/index.js';


   
const coupan = () => {
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

            <section className='container-fluid'>
                <div className='coupon2'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/BAU/coupon_pc_1500x300.gif' className='cop' />
                </div>
            </section>
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

            <section className='banners'>
                <div className='container-fluid'>
                    <div className='row productRow'>
                        <div className='head2'>
                            <div className='itemhai'>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Program/Coupons/2024/Jan_ART/Nav_BAr/01.jpg' width={"85%"} />
                            </div>
                            <div className='itemhai'>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Program/Coupons/2024/Jan_ART/Nav_BAr/03.jpg' width={"85%"} />
                            </div>
                            <div className='itemhai'>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Program/Coupons/2024/Jan_ART/Nav_BAr/04.jpg' width={"85%"} />
                            </div>
                            <div className='itemhai'>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Program/Coupons/2024/Jan_ART/Nav_BAr/02.jpg' width={"85%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='homeProducts'>
                <div className='container-fluid'>
                    <div className='head '>
                        <h2 className='hd mb-0 mt-0'>Electronic & Accesories coupons</h2>
                        <ul className='filter'>
                            <li className='item'>
                                <a className='itema'>view all</a>
                            </li>
                        </ul>
                    </div>
                    <div className='row productRow'>
                        <div className='head'>
                            <div className='item'>
                                <div className='productThumb'>
                                    <div className='imageWrapper'>
                                        <img src='https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg' className='ii' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='title'>Save 10% at checkout</h4>
                                        <span className='brand'>iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | Segment's Slimmest & Lightest Smartphone</span>
                                    </div>
                                    <button className='btn'> Collect Coupon</button>
                                </div>
                            </div>
                            <div className='item'>
                            <div className='productThumb'>
                                    <div className='imageWrapper'>
                                        <img src='https://m.media-amazon.com/images/I/8195A49fZbL._SX569_.jpg' className='ii' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='title'>Save 20% at checkout</h4>
                                        <span className='brand'>realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger</span>
                                    </div>
                                    <button className='btn'> Collect Coupon</button>
                                </div>
                            </div>
                            <div className='item'>
                            <div className='productThumb'>
                                    <div className='imageWrapper'>
                                        <img src='https://m.media-amazon.com/images/I/81WimZLWH1L._SX569_.jpg' className='ii' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='title'>Save 50% at checkout</h4>
                                        <span className='brand'>realme narzo 60X 5G (Stellar Green,6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge</span>
                                    </div>
                                    <button className='btn'> Collect Coupon</button>
                                </div>

                            </div>
                            <div className='item'>
                            <div className='productThumb'>
                                    <div className='imageWrapper'>
                                        <img src='https://m.media-amazon.com/images/I/71d1ytcCntL._SX569_.jpg' className='ii' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='title'>Save 10% at checkout</h4>
                                        <span className='brand'>Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage) best audio quality | 90Hz Display | 50MP AI Triple Camera| Segments only 30W Supervooc Charge</span>
                                    </div>
                                    <button className='btn'> Collect Coupon</button>
                                </div>

                            </div>
                            <div className='item'>
                            <div className='productThumb'>
                                    <div className='imageWrapper'>
                                        <img src='https://m.media-amazon.com/images/I/51X1axWGFZL._SX569_.jpg' className='ii' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='title'>Save 15% at checkout</h4>
                                        <span className='brand'>POCO M6 Pro 5G (Forest Green, 4GB RAM, 128GB Storage)  | Powered by 4G Mediatek Helio G85 | 90Hz Display (Stardust Black, 4GB RAM, 128GB Storage)</span>
                                    </div>
                                    <button className='btn'> Collect Coupon</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid'>
                <div className='coupon1'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/VPC/1008588_VPC_MB_1242x200_seeallcoupons._V278835038_.jpg' className='cop' />
                </div>
            </section>

            <section className='container-fluid'>
                <div className='coupon1'>
                    <img src='https://m.media-amazon.com/images/G/31/img21/Pharmacy/Pc_popup_diduknow_WA_1.gif' className='cop' />
                </div>
            </section>



        </>
    )
}

export default  coupan;
import React from 'react'
import './style.css'
import CartSlider from '../Components/CartSlider/index.js';
import Product from '../Components/Product/index.js';



const index = () => {
    return (
        <>

            <section className='container-fluid'>
                <div className='coupon2'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/BAU/coupon_pc_1500x300.gif' className='cop' />
                </div>
            </section>
            <CartSlider />
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
                                <Product />
                            </div>
                            <div className='item'>
                                <Product />
                            </div>
                            <div className='item'>
                                <Product />

                            </div>
                            <div className='item'>
                                <Product />

                            </div>
                            <div className='item'>
                                <Product />

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

export default index
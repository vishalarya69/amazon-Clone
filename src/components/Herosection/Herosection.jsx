import React, { useEffect, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './Herosection.css';


function Herosection() {
    const [startSlider, setStartSlider] = useState(0);
    const [endSlider, setEndSlider] = useState(0);
  
    useEffect(() => {
      const slideBtnLeft = document.getElementById("slide-btn-left");
      const slideBtnRight = document.getElementById("slide-btn-right");
      const imgItem = document.querySelectorAll(".image-item");
      setEndSlider((imgItem.length - 1) * 100);
  
      const handleLeftClick = () => {
        if (startSlider < 0) {
          setStartSlider(prev => prev + 100);
        }
      };
  
      const handleRightClick = () => {
        if (startSlider >= -endSlider + 100) {
          setStartSlider(prev => prev - 100);
        }
      };
  
      const handleAutoSlide = () => {
        setStartSlider(prev => {
          if (prev > -endSlider + 100) {
            return prev - 100;
          } else {
            return 0;
          }
        });
      };
  
      slideBtnLeft.addEventListener("click", handleLeftClick);
      slideBtnRight.addEventListener("click", handleRightClick);
  
      const interval = setInterval(handleAutoSlide, 2000); 
  
      return () => {
        slideBtnLeft.removeEventListener("click", handleLeftClick);
        slideBtnRight.removeEventListener("click", handleRightClick);
        clearInterval(interval);
      };
    }, [startSlider, endSlider]);

  return (
    <div>
    <section>
      <div className="image-container">
        <div className="image-list" style={{ transform: `translateX(${startSlider}%)` }}>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCmob._CB579064933_.jpg" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CE/March/Unrec/HF/Under_1499_Tallhero_3000x1200._CB581730972_.jpg" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/MA_2x._CB580708889_.jpg" alt="" />
          </div>
          <div className="image-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" alt="" />
          </div>
        </div>

        <div className="image-btn-container">
          <button className='slider-btn' id='slide-btn-left'><i className="ri-arrow-left-s-line"></i></button>
          <button className='slider-btn' id='slide-btn-right'><i className="ri-arrow-right-s-line"></i></button>
        </div>
      </div>
    </section>

    {/* card */}

    <main className='main'>
      <div className="card-product-container">
        <div className="card-product">
          <h2>Appliances for your home | Up to 55% off</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                <p>Air conditioners</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                <p>Refrizretors</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                <p>Microwaves</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                <p>Washing Machines</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>

        <div className="card-product">
          <h2>Up to 60% off | Styles for men</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" alt="" />
                <p>Clothing</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" alt="" />
                <p>Footwear</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" alt="" />
                <p>Watches</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" alt="" />
                <p>Bags & wallets</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>

        <div className="card-product">
          <h2>Starting ₹99 | All your home improvement needs</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg" alt="" />
                <p>Spin mops, wipes & <br /> more</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg" alt="" />
                <p>Hammers, screwdrivers <br /> & more</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg" alt="" />
                <p>Bathroom hardware & <br /> accessories</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg" alt="" />
                <p>Extension boards, <br />plugs & more</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>

        <div className="card-product">
          <h2>Up to 75% off | Headphones</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                <p>Up to 75% off | boAt</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                <p>Up to 75% off | boult</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                <p>Up to 75% off | Noise</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg" alt="" />
                <p>Up to 75% off | Zebronics</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>
      </div>

      {/* =========== */}
      <div className="card-product-container">
        <div className="card-product">
          <h2>Appliances for your home | Up to 55% off</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                <p>Air conditioners</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                <p>Refrizretors</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                <p>Microwaves</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                <p>Washing Machines</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>

        <div className="card-product">
          <h2>Appliances for your home | Up to 55% off</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                <p>Air conditioners</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                <p>Refrizretors</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                <p>Microwaves</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                <p>Washing Machines</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>

        <div className="card-product">
          <h2>Appliances for your home | Up to 55% off</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                <p>Air conditioners</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                <p>Refrizretors</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                <p>Microwaves</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                <p>Washing Machines</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>

        <div className="card-product">
          <h2>Appliances for your home | Up to 55% off</h2>
          <div className="card-product-ne-card">
               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" />
                <p>Air conditioners</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" />
                <p>Refrizretors</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" />
                <p>Microwaves</p>
               </div>

               <div className="card-ne">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" />
                <p>Washing Machines</p>
               </div>
          </div>
          <button className='card-product-btn'>see more</button>
        </div>
      </div>
    </main>

    </div>
  );
}

export default Herosection;

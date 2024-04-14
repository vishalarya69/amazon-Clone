import React from 'react'
import "./Sell.css"

const Sell = () => {
    return (
        <div>
            <div className="main-container">
                <div className="sell-on-amazon-container">
                    <div className="blank-box"></div>
                    <div className="SellonAmazonin"><h1 className='sellheading'>Sell on Amazon.in</h1></div>
                    <div className="startselling">
                        <button className='startsellingbutton'>
                            Start Selling
                        </button>
                    </div>
                </div>
      <div className="landing-container1">
        <div className="blank-container-2"></div>
        <div className="title-bar-container">
            <h3 className='become-container'>Become a seller on
Amazon</h3>
<p className='pragraph-container'>Sell on Amazon.in and get a chance to receive<br></br> rewards worth ₹8,000 within the first 15 days*
</p>
<div className='div-continer'>
<button className='start-selling-container2'>
    <center>Start <br></br>Selling</center>
    
</button>

<button className='download-container'>
"Download beginner's guide"
</button>
</div>


        </div>
        <div className="banner-container">
            <img className='image-set' src='https://m.media-amazon.com/images/G/31/amazonservices/Acquisition/New_seller_Incentives_Q1_24_-2_.webp'></img>
        </div>
      </div>
      {/* <div className="gstnumber">
        <img className='gstnumberimage'src='public/gstimage.PNG'></img>
      </div> */}
            </div>
           
        </div>
    )
}

export default Sell
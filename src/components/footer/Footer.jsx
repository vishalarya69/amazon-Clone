import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="back" >
          <a href="/">Back to top</a>
        </div>
      <div className="footer__container">
        <div className="footer__section">
        
          <h4 className="footer__sectionTitle">Get to Know Us</h4>
          <ul className="footer__sectionList">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
            </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__sectionTitle">Connect with us</h4>
          <ul className="footer__sectionList">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Instagram</li>
            

            {/* Add more links as needed */}
          </ul>
        </div>
      
        <div className="footer__section">
          <h4 className="footer__sectionTitle">Make Money with Us</h4>
          <ul className="footer__sectionList">
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>                   	
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__sectionTitle">Let Us Help You</h4>
          <ul className="footer__sectionList">
            <li>COVID-19 and Amazon</li>
            <li>Twitter</li>
            <li>Your Account</li>
            <li>Return Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        {/* Add more sections as needed */}
      </div>
      </div>
      <hr/>
      <div>
        <div className='footer-logo'>
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </div>
        <ul className="amazon-services-list">
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France</li>
          <li>Germany</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Poland</li>
          <li>Singapore</li>
          <li>Spain</li>
          <li>Turkey</li>
          <li>United Arab Emirates</li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
      </div>
      <hr/>
      
      <div className="footer__container">
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>AbeBooks</li>
            <li>Books,art</li>
            <li>& collectibles</li>
            </ul>
        </div>
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>Amazon Web Services</li>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
            </ul>
        </div>
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>Audible</li>
            <li>Download</li>
            <li>Audio Books</li>
            </ul>
        </div>
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>IMDB</li>
            <li>Movies,TV</li>
            <li>&Celebrities</li>
            </ul>
        </div>        
        </div>
        {/* <div className="footer___container">
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>Shopbop</li>
            <li>Designer</li>
            <li> Fashion Brands</li>
            </ul>
        </div>
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>Amazon Business</li>
            <li>Everything For</li>
            <li>Your Business</li>
            </ul>
        </div>
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>Prime Now</li>
            <li>2-Hour Delivery</li>
            <li>on Everyday Items</li>
            </ul>
        </div>
        <div className="footer__section">
        
          <ul className="footer__sectionList">
            <li>Amazon Prime Music</li>
            <li>100 million songs, ad-free,TV</li>
            <li>Over 15 million podcast episodes</li>
            </ul>
        </div>        
        </div>  */}
        
    </footer>
  );
};

export default Footer;

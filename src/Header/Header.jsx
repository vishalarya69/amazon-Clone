import { MdOutlineLocationOn } from "react-icons/md";
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { items } from "../components/Data";


const AmazonHeader = ({setData, cart}) => {
  const navigate = useNavigate();


  const [searchTerm, setSearchTerm] = useState("");

  const [pop, setPop] = useState(false);

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    setData(element)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  
  return (
    <>
    <div className="amazon-header">

      <Link to={'/'} className="company-logo">
      <img 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="Amazon Logo" />        
      </Link>
      
      <div className="delivery-location">
        <div className="location-icon">
          <MdOutlineLocationOn className="location-size"/>
         </div>
         <div className="delivery-code">
        <a href="">
          Deliver to India 
        </a>
       </div>
      </div>

      <form onSubmit={handleSubmit}
      className="search-box">
        <input className="search-bar"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        type="text" 
        placeholder="Search Amazon.in" />

        <IoSearchOutline className="search-icon"
        />

      </form>

      <div className="header-right">        
      
        <div className="header-options-right">
          <a href="/Login">Hello,sign in</a>          
        </div>
        <div className="header-options-right">
          <a href="#">Returns & Orders</a>
        </div>
        <div className="header-options-right">
          <Link to={'/cart'} className="cart-cart-cart" ><FaShoppingCart className="cart-icon"/><span className="cart-count" >{cart.length}</span></Link>
        </div>

      </div>
    </div>
    <div className="Navbar-bottom">
    
      <div className="navbar-bottom-left">    
    
        <div >
        <GiHamburgerMenu className="navbar-bottom-all"  onClick={() => setPop(!pop)} />
        </div>
        <div className="navbar-bottom-options-minitv">
        <a href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">Amazon miniTV</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="/Sell">Sell</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="/product">Products</a>
        </div>
        <Link to={'/product'} onClick={()=>filterByCategory("mobile")} className="navbar-bottom-options">
        <a href="">Mobiles</a>
        </Link>
        <div onClick={()=>filterByCategory("clothes")} className="navbar-bottom-options">
        <a href="/amazonpay">Amazon Pay</a>
        </div>
        <Link to={'/product'} onClick={()=>filterByCategory("ac")} className="navbar-bottom-options">
        <a href="">Electronics</a>
        </Link>
        <div className="navbar-bottom-options-customer">
        <a href="/Coupan">Coupon</a>
        </div>
     
      </div>
          <div className="navbar-bottom-right">
             <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CaptainMiller-Hindi/400x39-SWM_NP._CB580232872_.jpg"/>
          </div>

    </div>
    
    <div className={pop ? "navbar-left-hover" :"navbar-left-hide"}>
      <div className="all-box">
    <div className="main-box">
      <div  className="profile">
        <CgProfile />
      </div>
      <b>Hello,User</b>
      <h3 className="list-cross-button" onClick={() => setPop(false)}>X</h3>
      
    </div>         
      <hr/>
      <div className="box">
      <p><b>Trending</b></p>
        <p>Best Sellers</p>
        <p>New Releases</p>
        <p>Movers Shakers</p>
        
      </div><hr/>
      <div className="box">
        <p><b>Digital Content and Devices</b></p>
        <p>Amazon miniTV-FREE Entertainment</p>
        <p>Fine TV</p>
        <p>Kindle E-Readers & Books</p>
        <p>Audible Audiobooks</p>
        <p>Amazon Prime Video</p>
        <p>Amazon Prime Music</p>

               
      </div><hr/> 
      <div className="box">
      <p><b>Shop by Category</b></p>
        <p>Mobiles,Computers</p>
        <p>TV,Appliances, Electronics</p>
        <p>Men'sFashion</p>
        <p>Women's Fashion</p>
        <p></p>
        
      </div><hr/>
      <div className="box">
      <p><b>Programs & Features</b></p>
        <p><b>Amazon Pay</b></p>
        <p>Gift Cards & Mobile Recharges</p>
        <p>Amazon Launchpad</p>
        <p>Handloom and Handicrafts</p>

        
      </div><hr/>
      <div className="box">
      <p><b>Help & Settings</b></p>
        <p>Your Account</p>
        <p>Customer Service</p>
        <p>Sign Out</p>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default AmazonHeader;

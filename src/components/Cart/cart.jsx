import { useState } from "react";
import { items } from "../Data";
import "./cart.css"
import { useEffect } from "react";
import Product from "../Product";
import { jsx } from "@emotion/react";


function Cart({ cart, setCart }) {


  const [isCardChecked, setIsCardChecked] = useState(false);

  const [isDeleted, setIsDeleted] = useState(false);

  const deleteCard = () => {
    setIsDeleted(true);


  };


  return (
    <>
    
      <div className="cart-main-main">
        {cart.map((product) => {
          return (
            <>
              <div className="mainn">
                <div className="checkbox-container">
                  <input type="checkbox" id="checkbox" />
                </div>
                <div className="one">
                  <img src={product.img1} alt="" />
                </div>
                <div className="two" style={{ width: '60%' }}>
                  <div>
                    <h2>{product.title}</h2>
                  </div>
                  <div>
                    <p>In stock</p>
                  </div>
                  <div>
                    <p>Eligible for free Shipping</p>
                  </div>

                  <div>This will be gift <span style={{ color: 'gray', textDecoration: 'none' }}>Learn more</span></div>
                  <div><b>Size</b>: One Size</div>

                </div>
                <div className="three" style={{ alignItems: 'end' }}>
                  <div style={{ color: 'white', backgroundColor: 'brown', width: '50%' }}>13% off </div>
                  <div>
                    <p style={{ color: 'red' }}>Limited time deal</p>
                  </div>
                  <div>
                    <h2 id="price">Rs {product.price}/-</h2>
                  </div>
                  <div>
                    <p style={{ textDecoration: 'line-through', fontSize: '13px' }}>Rs {product.price}/-</p>
                  </div>

                </div>

              </div>
            </>
          )
        })}

      </div>
      {/* ================== */}
      
      <div class="total">
        <h1>Total Amount</h1>
        <div class="total-amount">Rs {
          cart.map(item => parseInt(item.price.replace(/[^\d.-]/g, ''), 10)) // Remove non-numeric characters and parse to integers
            .reduce((total, value) => total + value, 0)
        }/- </div>
   <a href="/Shipping_page"> <button className="checkout">
      Place Order
    </button>
    </a>
    </div> 
   

    </>
  );

}

export default Cart;

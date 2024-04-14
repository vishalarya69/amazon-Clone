import { Link } from "react-router-dom"
// import { items } from "./Data"
import ReactStars from 'react-stars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({items, cart, setCart}) {
  const addToCart = (id, price, title, description, img1) => {
    const obj ={
      id, price, title, description, img1
    }
    setCart([...cart, obj]);
    toast.success('success Fully Added', {
      position: "top-right",
      autoClose: 1501,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <>
  <ToastContainer
position="top-right"
autoClose={1501}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div className="main-container">
        {
            items.map((product) =>{
              return(<>
                <div key={product.id} className="cart-main-div">
                    <div className="img-div-hai">
                        <img src={product.img1}alt="" />
                    </div>
                    <div className="content-div">
                     <Link to={`/detail/${product.id}`} className="title-div"><h4>{product.title}</h4></Link>
                    <div > <ReactStars size={25} value={product.rating} /> </div>
                   <div className="price-div"> <h2>Rs.{product.price}</h2></div>
                     <div className="free-deliveryy">
                   <p >FREE delivery by <span className="span-hai-ye"> Tue, 19 Mar, 7:00am - 9:00pm</span></p>
                   </div>
                   </div>
                   <div onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.img1)} className="addtocart">Add To Cart</div>
                </div>
                </>
              )    
            })
        }
    </div>
    </>
   
  )
  
}

export default Product
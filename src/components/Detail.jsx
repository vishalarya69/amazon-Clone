import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { items } from "./Data"
import './Detail.css'
import Product from "./Product"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Detail({ cart, setCart}) {
    const {id} = useParams()

    const [product, setProduct] = useState ({})
    const [relatedProduct, setRelatedProduct] = useState([]);

   

   useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    // console.log(filterProduct)

    setProduct(filterProduct[0]);

    const relatedProduct = items.filter((e)=>e.category === product.category)
    setRelatedProduct(relatedProduct);
    // console.log(relatedProduct);
    
   }, [id, product.category]);
   const [activeImg, setActiveImage] = useState(product.img1);

   const [amount, setAmount] = useState(1);

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


     <div
        className="product-detail-main-main-cont">

        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="  flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg || product.img1}
              alt=""
              className="  aspect-square  rounded-xl"
            />
            <div className=" flex flex-row justify-evenly h-24">
              <img
                src={product.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(product.img1)}
              />
              <img
                src={product.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(product.img2)}
              />
              <img
                src={product.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(product.img3)}
              />
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-violet-600 font-semibold">
                Special Sneaker
              </span>
              <h1 className="text-3xl font-bold">{product.title}</h1>
            </div>
            <h6 className="text-2xl font-semibold">{product.price}</h6>
            <p>⭐⭐⭐⭐</p>
            <h2 className="font-bold">Description :</h2>
            <p className="text-gray-700">{product.description}</p>

            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                  onClick={() => setAmount((prev) => prev - 1)}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button  onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.img1)} className="bg-violet-800 text-white font-semibold py-2 px-3 rounded-xl h-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
  


      <h1>Related</h1>
      <Product items={relatedProduct}/>
    </>
    
  )
}

export default Detail


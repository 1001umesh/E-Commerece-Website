import { useContext, useEffect, useState } from "react"
import { shopContext } from "../context/ShopContext"
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const {products,currency,cartItems,updateQuantity}=useContext(shopContext);
  const [cartData,setCartData]=useState([]);
  const navigate=useNavigate();


  useEffect(()=>{
    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
    console.log(tempData);
  },[cartItems])

  return (
    <div className=" border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"}/>
      </div>
      <div>
        {cartData.map((item,index)=>{
          const productData=products.find((product)=>product.id ===item.id);

          return (
            <div key={index} className="py-4 border-t border-b border-gray-200 grid grid-cols-[4fr_0.5fr_0.5fr]  sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 ">
              <div className=" flex items-start gap-4">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50 rounded">{item.size}</p>

                  </div>

                </div>
              </div>
              <input onChange={(e)=>e.target.value==='' || e.target.value==='0'? null :updateQuantity(item.id,item.size,Number(e.target.value))} className="border border-gray-400 max-w-10 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity}/>
              <FaTrash className="cursor-pointer" onClick={()=>updateQuantity(item.id,item.size,0)}/>
            </div>
          )
        })}
      </div>
      <div className="flex justify-end my-10">
      <div className="w-full sm:w-[450px]">
        <CartTotal/>
        <div className="w-full text-end mt-2">
          <button onClick={()=>navigate('/placeorders')} className="py-2 px-2 bg-black text-white rounded cursor-pointer">Proceed to Checkout</button>

        </div>
      </div>

      </div>
    </div>
  )
}

export default Cart
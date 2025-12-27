import { useContext } from "react"
import { shopContext } from "../context/ShopContext"
import Title from "./Title";
const CartTotal = () => {
    const{currency,deliveryFees,getCartAmount}=useContext(shopContext);

  return (
    <div className="w-full mt-5">
        <div className="text-2xl">
            <Title text1={"CART"} text2={"TOTALS"}/>
        </div>
        <div className="flex flex-col gap-2 mt-2 text-md">
            <div className="flex justify-between">
                <p>SubTotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>{currency}{deliveryFees}.00</p>

            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{currency}{getCartAmount()===0 ? 0:getCartAmount()+deliveryFees}.00</b>

            </div>

        </div>
      
    </div>
  )
}

export default CartTotal

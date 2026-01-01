import { useContext } from "react"
import { shopContext } from "../context/ShopContext"
import Title from "../components/Title";

const Orders = () => {
  const {products,currency}=useContext(shopContext);

  return (
    <div className="border-t border-gray-400 pt-16">
      <div className="text-2xl">
        <Title text1={"My"} text2={"Orders"}/>
       </div>
       <div>
        {products.slice(1,4).map((item,index)=>(

          <div key={index} className="py-4 border-t border-gray-400  gap-4 text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between " >
            <div className="flex items-start gap-6 py-2 px-4 mx-4 ">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
              <p className="font-medium">{item.name}</p>
              <div className="flex items-center gap-4 mt-2 text-base text-gray-700">
                <p className="text-lg">{currency}{item.price}</p>
                <p>Quantity:1</p>
                <p>Size:M</p>
                </div>
               <p className="my-2">Date:<span className="text-gray-500"> 25,July,2025 </span></p>
             </div>
             </div>
             
             <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base"> Ready to Ship</p>
              </div>
              <button className=" border px-4 py-2 rounded font-medium text-sm text-black hover:bg-gray-300 cursor-pointer">Track Order</button>
             </div>
          </div>
        ))}
      </div>
      <div>
      </div>
      
    </div>
  )
}

export default Orders
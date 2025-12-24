import { useContext, useEffect, useState } from "react"
import { shopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const LatestCollection = () => {
    const {products}=useContext(shopContext);
    const [latestProducts,setLatestProducts]=useState([]);
    useEffect(()=>{
      setLatestProducts(products.slice(0,10));

    },[])
  return (
    <div className="my-4">  
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
        <p className="w-3/4 m-auto text-xs font-semibold sm:text-sm md:text-base text-gray-800">We offer most latest products with premium quality. You can checkout our latest products here.</p>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {latestProducts.map((item,index)=>(
          <ProductsItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
       
      </div>
        
    </div>
  )
}

export default LatestCollection
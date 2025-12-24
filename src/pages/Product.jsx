import { use, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import { FaRegStar, FaStar } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size,setSize]=useState("");

  const fetcProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetcProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 border-gray-400 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setImage(item)}
                alt=""
                key={index}
                className="w-[24%] sm:w-[500px] sm:mb-3 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-2">
            <FaStar className="text-amber-400 cursor-pointer"/>
            <FaStar className="text-amber-400 cursor-pointer"/>
            <FaStar className="text-amber-400 cursor-pointer"/>
            <FaStar className="text-amber-400 cursor-pointer"/>
            <FaRegStar className="text-amber-400 cursor-pointer"/>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-2 text-xl font-medium">{currency}{productData.price}</p>
          <p className="text-gray-800 w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-md font-semibold">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item,index)=>(
                <button className={`border py-2 px-4 bg-gray-300 cursor-pointer rounded ${item===size ?" border-2 border-orange-500":""}`} key={index} onClick={()=>setSize(item)}>{item}</button>
                
              ))}
            </div>
          </div>
         <button onClick={()=>addToCart(productData.id,size)} className="bg-black active:bg-gray-700 text-white py-2 px-4 rounded cursor-pointer ">Add To Cart</button>
         <hr className="mt-8 sm:w-4/5 text-gray-400"/>
         <div className="text-md mt-5 text-gray-700 flex flex-col gap-2">
          <p>100% Original Product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy Return and exchange policy within 7b days.</p>
         </div>
        </div>
      </div>
       {/* Description and Review */}
        <div className="mt-10">
          <div className="flex gap-2 items-center">
            <p className="border border-gray-400  px-5 py-3 text-sm font-bold">Description</p>
            <p className="border border-gray-400 px-5 py-3 text-sm font-bold">Reviews(122)</p>
          </div>
          <div className="border border-gray-400 px-4 py-2 flex flex-col mt-2 text-gray-700 text-justify">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti ad expedita laborum consectetur et molestiae? Repellendus molestiae aut blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque possimus voluptatem nisi molestiae nemo tempore veritatis explicabo beatae. Suscipit!</p>
            
          </div>
        </div>
        {/* display related products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

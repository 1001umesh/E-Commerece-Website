import { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, SetBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    SetBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-sm md:text-lg text-gray-800">
          Here,Find our best selling products.We offer the best quality products
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {bestSeller.map((item, index) => (
          <ProductsItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

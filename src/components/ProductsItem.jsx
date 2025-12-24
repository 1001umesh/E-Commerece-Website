import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductsItem = ({ id, image, name, price }) => {
  const { currency } = useContext(shopContext);

  return (
    <Link
      className="text-gray-700 cursor-pointer  border border-gray-200  rounded-lg p-2"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out rounded-md"
          src={image[0]}
          alt=""
        />
      </div>
      <div className=" rounded-md p-2 ">
        <p className="pt-3 pb-1 text-sm font-semibold  text-gray-900">{name}</p>
        <p className="text-sm font-bold">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductsItem;

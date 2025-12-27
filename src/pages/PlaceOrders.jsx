import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
  FaStripe,
} from "react-icons/fa";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrders = () => {
  const [method, setMethod] = useState("cod");
  const navigate=useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between pt-5 sm:pt-8 min-h-[80vh] border-t">
      {/* Left side  */}
      <div className="flex flex-col gap-4 w-full sm:w-[480px]">
        <div className="text-xl sm:text-2xl">
          <Title text1={"Delivery "} text2={"Information"} />
        </div>
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded py-2 px-4 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-400 rounded py-2 px-4 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-400 rounded py-2 px-4 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-400 rounded py-2 px-4 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded py-2 px-4 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-400 rounded py-2 px-4 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-4">
          <input
            className="border border-gray-400 rounded py-2 px-4 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-400 rounded py-2 px-4 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-400 rounded py-2 px-4 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* Right side */}
      <div className="">
        <div className="">
          <CartTotal />
        </div>
        <div className="mt-4">
          <Title text1={"Payment"} text2={"Method"} />
          {/* -------Method Method Selection */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              onClick={() => setMethod("visa")}
              className="flex items-center gap-3 border border-gray-400 py-1 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-h-3.5 min-w-3.5 border rounded-full ${
                  method === "visa" ? "bg-green-500" : ""
                }`}
              ></p>
              <FaCcVisa size={48} className="text-blue-600" />
            </div>
            <div
              onClick={() => setMethod("master")}
              className="flex items-center gap-3 border border-gray-400 py-1 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-h-3.5 min-w-3.5 border rounded-full ${
                  method === "master" ? "bg-green-500" : ""
                } `}
              ></p>
              <FaCcMastercard size={48} className="text-red-600" />
            </div>
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-400 py-1 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-h-3.5 min-w-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <FaStripe size={48} className="text-indigo-600" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-400 py-1 px-3 cursor-pointer rounded"
            >
              <p
                className={`min-h-3.5 min-w-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-sm font-medium mx-4">Cash On Devilvery</p>
            </div>
          </div>
          <div className="mt-5">
            <button onClick={()=>navigate('/orders')} className="border border-gray-300 bg-black py-2 px-3 text-white rounded cursor-pointer w-full ">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrders;

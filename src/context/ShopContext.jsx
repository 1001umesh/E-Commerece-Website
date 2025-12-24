import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
export const shopContext=createContext();
const ShopContextProvider=(props)=>{
    const currency="$";
    const deliveryFees=200;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState([]);

    const addToCart=async(itemId,size)=>{
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;

            }else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1
        }
        setCartItems(cartData);

    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    const value={
        products,currency,deliveryFees,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,

    }
    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;
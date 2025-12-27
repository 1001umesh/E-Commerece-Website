import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const shopContext=createContext();
const ShopContextProvider=(props)=>{
    const currency="$";
    const deliveryFees=200;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState([]);

 // add tocart
    const addToCart=async(itemId,size)=>{

        if(!size){
            toast.error("Select Product Size !");
            return;
        }

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

     //get data in cart
     const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for( const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];

                    }
                } catch(error){

                }
            }

        }
        return totalCount;
     }

 // remove  cart data
     const updateQuantity=async (itemId,size,quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemId][size]=quantity;
        setCartItems(cartData);

     }
     
     // cart amount calculation
     const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product.id===items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount+=itemInfo.price* cartItems[items][item];


                    }
                    
                } catch (error) {
                    
                }


            }
        }
        return totalAmount;
     }

     const value={
        products,currency,deliveryFees,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,

    }
    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider;
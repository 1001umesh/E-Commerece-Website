import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { shopContext } from "../context/ShopContext";
const NavBar = () => {
  const [visible,setVisible]=useState(false);
  const {setShowSearch,getCartCount}=useContext(shopContext);

  return (
    <div className="flex items-center justify-between py-2 font-medium ">
      <Link to={"/"}><img src={assets.logo} alt="logo" className="w-32" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className={({isActive})=>
        `flex flex-col items-center gap-1 group ${isActive? "active":""}`}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
        </NavLink>

        <NavLink to="/collection" className={({isActive})=>
        `flex flex-col items-center gap-1 group ${isActive? "active":""}`}>
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
        </NavLink>

        <NavLink to="/about" className={({isActive})=>
        `flex flex-col items-center gap-1 group ${isActive? "active":""}`}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
        </NavLink>

        <NavLink to="/contact"  className={({isActive})=>
        `flex flex-col items-center gap-1 group ${isActive? "active":""}`}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
        </NavLink>

        <NavLink to="/product"  className={({isActive})=>
        `flex flex-col items-center gap-1 group ${isActive? "active":""}`}>
          <p>PRODUCT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-[.active]:block" />
        </NavLink>
      </ul>

      <div className="flex items-center ">
        <img onClick={()=>setShowSearch(true)} src={assets.find_icon} alt="search-icon" className="w-16 cursor-pointer" />
        <div className="group relative">
          <img src={assets.profile_icon} alt="profile_icon" className="w-14 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">MyProfile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>   
        <Link to='/cart' className="relative">
        <img src={assets.cart} alt="cart" className="w-8" />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu" className="w-16 cursor-pointer sm:hidden" />
      </div>
      {/* Sidebar menu for small screen */}
      <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':"w-0"}`}>
        <div className="flex flex-col  text-gray-600">
          <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={()=>setVisible(false)}>
            <img src={assets.back_icon} alt="back-icon"  className="h-6 rotate-180"/>
            <p>Back</p>
          </div>
          <NavLink  onClick={()=>setVisible(false)} className={({isActive})=>{
           return `py-2 pl-6 transition-colors ${isActive?'bg-black text-white':'text-black'}`}} to='/'>Home</NavLink>
          <NavLink  onClick={()=>setVisible(false)}className={({isActive})=>{
            return`py-2 pl-6 transition-colors ${isActive?'bg-black text-white':'text-black'}`}} to='/collection'>Collection</NavLink>
          <NavLink  onClick={()=>setVisible(false)}className={({isActive})=>{
           return `py-2 pl-6 transition-colors ${isActive?'bg-black text-white':'text-black'}`}} to='/about'>About</NavLink>
          <NavLink  onClick={()=>setVisible(false)}className={({isActive})=>{
            return `py-2 pl-6 transition-colors ${isActive?'bg-black text-white':'text-black'}`}} to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

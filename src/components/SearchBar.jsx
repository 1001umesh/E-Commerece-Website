import React, { useContext } from 'react'
import { shopContext } from '../context/ShopContext'
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(shopContext);
  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray py-2 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
        <FaSearch className='cursor-pointer'/>
        </div>
        <FaTimes onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer'/>

    </div>
  ):null
}

export default SearchBar

import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300 rounded-md my-5'>
        {/* Hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-8 sm:py-0'>
        <div className='text-[#4141441]'>
            <div className="flex  items-center gap-2 ">
                <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                <p className='font-medium text-sm sm:text-lg'>OUR BESTSELLER</p>
            </div>
            <h1 className='text-3xl font-Outfit sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div  className='flex items-center gap-2 '>
                <p className='font-semibold text-sm sm:text-lg'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
            </div>

        </div>

        </div>
        {/* Hero right side */}
        <img className='w-full sm:w-1/2 ' src={assets.heroImg} alt="" />
         
    </div>
  )
}

export default Hero
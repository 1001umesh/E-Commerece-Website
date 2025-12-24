import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"
import { assets } from "../assets/assets"
import { FaLocationDot } from "react-icons/fa6"
const Footer = () => {
  return (
    <div >
        <div className="flex flex-col sm:grid grid-cols-3 my-8 mt-28 text-md">
          <div className="space-y-2  sm:px-10" >
            <img className="w-38 " src={assets.logo} alt="" />
            <div className="flex gap-4 items-center justify-start">
              <FaFacebook  size={30}  className="hover:text-blue-600 cursor-pointer"/>
              <FaInstagram size={30} className="hover:text-orange-400 cursor-pointer" />
              <FaLinkedin  size={30} className="hover:text-blue-600 cursor-pointer"/>
            </div>
            <h1 className="w-full  md:w-2/3 text-lg ">ByteBazaar Pvt.Ltd.</h1>
          </div>

          <div className="">
            <p className="text-xl font-medium ">Quick Links</p>
            <ul className="flex flex-col  text-gray-500">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Delivery</a></li>
              <li><a href="">Provacy Policy</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium ">Get In Touch</p>
            <ul className="flex flex-col  text-gray-500">
             <li className="flex items-center gap-2  cursor-pointer"><FaLocationDot/>Shambhu Marga,Kathmandu,Nepal</li>
              <li className="flex items-center gap-2 cursor-pointer"> <FaPhone/>+977-9823613852</li>
              <li className="flex items-center gap-2 cursor-pointer"><FaEnvelope/>info@bytebazaargmail.com</li>
            </ul>
          </div>
            
        </div>
        <div>
          <hr className="text-gray-200 border" />
          <p className="py-5 text-sm text-center">Copyright 2025@ByteBazaar- All Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer

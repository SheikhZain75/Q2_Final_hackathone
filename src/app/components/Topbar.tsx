
'use client';

import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart, FiPhoneCall } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";

//  My code

export default function TopBar (){
  return (
    <div className='flex h-11 bg-[#7E33E0] text-white justify-around'>
   
      <div className='flex gap-[51px]'>
    
          <a
            href="#"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <MdMailOutline />
            <span>mhhasanul@gmail.com</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-gray-200"
            >
            <FiPhoneCall />
            <span>(12345)67890</span>
    
          </a>
     
      </div>
     
      <div className='flex gap-5'>
     
        <select name="language" className='bg-[#7E33E0] cursor-pointer'>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="urdu">Urdu</option>
        </select>

        <select name="currency" className='bg-[#7E33E0] cursor-pointer'>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="pkr">PKR</option>
          <option value="gbp">GBP</option>

        </select>
           <a href="/login" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
             <span>Login</span>
             <RiUser3Line />
           </a>

           <a href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
             <span>Wishlist</span>
             <FaRegHeart />
           </a>

           <a href="/cart" >
             <FiShoppingCart className="cursor-pointer hover:text-gray-200 text-xl mt-3 ml-[6px]" />
           </a>
      </div>
    </div>
  )
}
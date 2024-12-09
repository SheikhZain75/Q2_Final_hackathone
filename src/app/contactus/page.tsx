import React from 'react'
import Image from 'next/image'
import contactus from '@/app/public/contactus.png'


function page() {
  return (
    <div>
      <div className='bg-[rgb(246,245,255)] h-[210px] '>
      <div className='ml-[140px] pt-14'> 
        <h1 className='text-[rgb(16,23,80)] font-bold text-4xl font-serif'>Contact Us</h1>
        <div className='flex gap-1 mt-3'>
          <a href="#" className='text-[rgb(16,16,16)] font-medium'> Home . Pages </a>
          <p className='text-[rgb(251,46,134)] font-medium' > . Contact us</p>
        </div>
      </div>
    </div>
      <div className='flex'>
        <div className='w-[550px] ml-[140px] mt-[80px]'>
          <h1 className='text-[rgb(21,24,117)] font-bold text-3xl h-[50px]'>Information About us</h1>
          <p className='text-[rgb(138,143,185)]'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Mattis neque ultrices mattis aliquam, malesuada diam est. 
           Malesuada sem tristique amet erat vitae eget dolor lobortis. 
           Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <div className='flex gap-[14px] mt-8'>
          <div className='w-[25px] h-[25px] bg-[#5625DF] rounded-full'></div>
          <div className='w-[25px] h-[25px] bg-[#FF27B7] rounded-full'></div>
          <div className='w-[25px] h-[25px] bg-[#37DAF3] rounded-full'></div> </div>
        </div>
        <div className='mt-[80px] ml-[52px]'> 
        <h1 className='text-[rgb(21,24,117)] font-bold text-3xl h-[50px]'>Contact Way</h1>
        <div className='flex mt-3'>
          <div className='bg-[#5726DF] w-[45px] h-[45px] rounded-full'></div>
          <p  className='text-[rgb(138,143,185)] ml-[16.5px]'>Tel: 877-67-88-99 <br /> E-Mail: shop@store.com</p>
          <div className='bg-[#FB2E86] h-[45px] w-[45px] rounded-full ml-5'></div>
          <p className='text-[rgb(138,143,185)] ml-[16.5px]'> Support Forum <br /> For over 24hr</p>
        </div>
        <div className='flex mt-11'>
          <div className='bg-[#FFB265] w-[45px] h-[45px] rounded-full'></div>
          <p  className='text-[rgb(138,143,185)] ml-[16.5px]'>20 Margaret st, London<br /> Great britain, 3NM98-LK</p>
          <div className='bg-[#1BE982] h-[45px] w-[45px] rounded-full ml-5'></div>
          <p className='text-[rgb(138,143,185)] ml-[16.5px]'> Free standard shipping <br /> on all orders.</p>
        </div>
       </div>
      </div>
      <div className='flex'>
        <div className='ml-[140px] mt-[100px]'> 
          <h1 className='text-[rgb(21,24,117)] font-bold text-3xl h-[50px]'>Get In Touch </h1>
          <p className='text-[rgb(138,143,185)] w-[550px]'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Mattis neque ultrices tristique amet erat vitae eget dolor los 
           vitae lobortis quis bibendum quam.
          </p>
          <div className='w-[534px] h-[414px] mt-12'>
            <input type="text"
            placeholder='Your Name*'
            className='w-[255px] h-[45px] rounded text-[#8A8FB9] border-[#8A8FB9] border pl-3'
            />
            <input type="text" 
            placeholder='Your E-mail'
            className='w-[255px] h-[45px] rounded text-[#8A8FB9] border-[#8A8FB9] border ml-6 pl-3'
            />
            <input type="text" 
            placeholder='Subject*'
            className='rounded w-[534px] h-[45px] text-[#8A8FB9] border-[#8A8FB9] border mt-[34px] pl-3'
            />
            <input type="text" 
            placeholder='Type Your Messege* '
            className='rounded w-[534px] h-[166px] text-[#8A8FB9] border-[#8A8FB9] border mt-12 pl-3 pb-[105px] '
            />
            <button className='h-11 w-[157px] bg-[#FB2E86] rounded text-white mt-[34px]'>Send Mail</button>
          </div>
        </div>
        <div>
          <Image 
          src={contactus}
          alt='img'
          width={500}
          height={500}
          className=' mt-[100px] w-[610px] h-[650px]'
          />
        </div>
      </div>
    </div>

  )
}

export default page

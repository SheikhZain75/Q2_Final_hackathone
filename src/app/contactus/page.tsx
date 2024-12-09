import React from 'react'

function page() {
  return (
    <div>
      <div className='bg-[rgb(246,245,255)] h-[210px] '>
      <div className='ml-[150px] pt-14'> 
        <h1 className='text-[rgb(16,23,80)] font-bold text-4xl font-serif'>Contact Us</h1>
        <div className='flex gap-1 mt-3'>
          <a href="#" className='text-[rgb(16,16,16)] font-medium'> Home . Pages </a>
          <p className='text-[rgb(251,46,134)] font-medium' > . Contact us</p>
        </div>
      </div>
    </div>
    <div>
      <div className='w-[550px]'>
        <h1 className='text-[rgb(21,24,117)] font-bold'>Information About us</h1>
        <p className='text-[rgb(138,143,185)]'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Mattis neque ultrices mattis aliquam, malesuada diam est. 
         Malesuada sem tristique amet erat vitae eget dolor lobortis. 
         Accumsan faucibus vitae lobortis quis bibendum quam.
        </p>
        <div className='flex gap-[14px]'>
        <div className='w-[25px] h-[25px] bg-[#5625DF] rounded-full'></div>
        <div className='w-[25px] h-[25px] bg-[#FF27B7] rounded-full'></div>
        <div className='w-[25px] h-[25px] bg-[#37DAF3] rounded-full'></div> </div>
      </div>
      <div></div>
    </div>
    </div>

  )
}

export default page

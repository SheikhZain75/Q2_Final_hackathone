import React from 'react'
import Upperfooter from '../components/upperfooter'

function Faq() {
  return (
    <div>
        <div className='flex justify-center bg-[rgb(246,245,255)] h-[210px]'>
        <div>
          <div className='ml-[-525px] pt-14'> 
            <h1 className='text-[rgb(16,23,80)] font-bold text-4xl font-sans'>FAQ</h1>
            <div className='flex gap-1 mt-3'>
              <a href="#" className='text-[rgb(16,16,16)] font-medium'> Home . Pages </a>
              <p className='text-[rgb(251,46,134)] font-medium' > . Faq</p>
            </div>
          </div>
        </div>
      </div>
        <div className='flex justify-center gap-6 mt-28'>
            <div className='w-[500px]'>
                <h1 className='text-[#1D3178] font-bold text-4xl'>Generel Information</h1>

                <h2 className='text-[#1D3178] text-xl font-semibold mt-11'>Eu dictumst cum at sed euismood condimentum?</h2>
                <p className='text-[#A1ABCC] text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>

                <h2 className='text-[#1D3178] text-xl font-semibold mt-10'>Magna bibendum est fermentum eros.</h2>
                <p className='text-[#A1ABCC] text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>

                <h2 className='text-[#1D3178] text-xl font-semibold mt-10'>Odio muskana hak eris conseekin sceleton?</h2>
                <p className='text-[#A1ABCC] text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>

                <h2 className='text-[#1D3178] text-xl font-semibold mt-10'>Elit id blandit sabara boi velit gua mara?</h2>
                <p className='text-[#A1ABCC] text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
            </div>
            <div className='w-[566px] h-[738px] bg-[#F8F8FD]'>
               <div className='ml-12 mt-16'>
               <h1 className='text-[#1D3178] text-2xl font-bold'>Ask a Question</h1>

                <input type="text"
                placeholder='Your Name*'
                className='w-[445px] h-[50px] border rounded pl-3 mt-28 '
                />
                <input type="text"
                placeholder='Subject*'
                className='w-[445px] h-[50px] border rounded pl-3 mt-8'
                />
                <input type="text"
                placeholder='Type Your Message*'
                className='w-[445px] h-[197px] border rounded pb-36 pl-3 mt-8'
                />
                <button className='w-[156px] h-12 bg-[#FB2E86] text-white rounded mt-10'>Send Mail</button>
               </div>
            </div>
        </div>
        <Upperfooter/>
    </div>
  )
}

export default Faq

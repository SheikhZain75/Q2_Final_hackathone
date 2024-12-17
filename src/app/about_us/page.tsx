import React from 'react'
import Image from 'next/image'
import aboutpage from '@/app/public/aboutpage.png'
import delivery from '@/app/public/delivery.png'
import contact from '@/app/public/contact.png'
import cashback from '@/app/public/cashback.png'
import quality from '@/app/public/quality.png';
import clint1 from '@/app/public/climt1.png'
import clint2 from '@/app/public/climt2.png'
import clint3 from '@/app/public/climt3.png'


function About_Us() {
  return (
    <div>
       <div className='flex justify-center bg-[rgb(246,245,255)] h-[210px]'>
        <div>
          <div className='ml-[-525px] pt-14'> 
            <h1 className='text-[rgb(16,23,80)] font-bold text-4xl font-sans'>About Us</h1>
            <div className='flex gap-1 mt-3'>
              <a href="#" className='text-[rgb(16,16,16)] font-medium'> Home . Pages </a>
              <p className='text-[rgb(251,46,134)] font-medium' > . About us</p>
            </div>
          </div>
        </div>
      </div>
        <div className='flex item-center justify-center gap-12 mt-20'>
            <div>
                <div className=' w-[552px] h-[409px] bg-[#2B3CAB] rounded-md'></div>
                <Image 
                src={aboutpage}
                alt='Buisness Image'
                width={500}
                height={500}
                className='rounded-md absolute mt-[-410px] ml-[18px] w-[555px] h-[390px]'
                />
            </div>
            <div>
                <h1 className='text-[#151875] text-4xl w-[522px] h-[96px] font-bold mt-10 '>Know About Our Ecomerce Business, History</h1>
                <p className='w-[550px] text-base font-semibold text-[#8A8FB9] mt-5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi ullam, assumenda obcaecati quas distinctio quidem nihil repellendus pariatur aspernatur reprehenderit.
                  Necessitatibus eligendi ea assumenda quasi aliquam dolorum laboriosam culpa velit unde ad?</p>
                  <button className='w-[145px] h-[44px] text-base font-semibold bg-[#FB2E86] mt-12 text-white rounded'>Contact us</button>
            </div>
        </div>
        <div className='mt-20'>
            <h1 className='font-bold text-4xl text-center itemcenter justifycenter'>Our Features</h1>
            <div className='flex item-center justify-center gap-4 mt-16 h-[400px]'>
            <div className="w-[270px] h-[320px] border border-gray-300">
                <Image 
                src={delivery}
                alt='delivery van'
                width={500}
                height={500}
                className='w-[65px] h-[65px] mt-[50px] ml-[97px] '
                />
                <h1 className='text-2xl text-center text-[#151875] font-medium mt-[18px]'>Free Delivery</h1>
                <p className='w-[270px] text-center text-[#1A0B5B4D] text-base mt-[23px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, at soluta!</p>
            </div>
            <div className="w-[270px] h-[320px] border border-gray-300">
                <Image 
                src={cashback}
                alt='cash back'
                width={500}
                height={500}
                className='w-[65px] h-[65px] mt-[50px] ml-[97px] '
                />
                <h1 className='text-2xl text-center text-[#151875] font-medium mt-[18px]'>100% Cash Back</h1>
                <p className='w-[270px] text-center text-[#1A0B5B4D] text-base mt-[23px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, at soluta!</p>
            </div>
            <div className="w-[270px] h-[320px] border border-gray-300">
                <Image 
                src={quality}
                alt='quality product'
                width={500}
                height={500}
                className='w-[65px] h-[65px] mt-[50px] ml-[97px] '
                />
                <h1 className='text-2xl text-center text-[#151875] font-medium mt-[18px]'>Quality Product</h1>
                <p className='w-[270px] text-center text-[#1A0B5B4D] text-base mt-[23px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, at soluta!</p>
            </div>
            <div className="w-[270px] h-[320px] border border-gray-300">
                <Image 
                src={contact}
                alt='24/7'
                width={500}
                height={500}
                className='w-[65px] h-[65px] mt-[50px] ml-[97px] '
                />
                <h1 className='text-2xl text-center text-[#151875] font-medium mt-[18px]'>24/7 Support</h1>
                <p className='w-[270px] text-center text-[#1A0B5B4D] text-base mt-[23px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, at soluta!</p>
            </div>
            </div>
        </div>
        <div className='h-[450px] bg-[#FBFBFF] '>
            <h1 className='text-3xl font-bold text-center pt-14'>Our Client Say!</h1>
            <div className='flex gap-[10px] items-center justify-center mt-12'>
                <Image
                src={clint1}
                alt='our client'
                width={500}
                height={500}
                className='w-[55px] h-[55px] rounded'
                />
                 <Image
                src={clint2}
                alt='our client'
                width={500}
                height={500}
                className='w-[55px] h-[59px] mt-[-9px] rounded'
                />
                 <Image
                src={clint3}
                alt='our client'
                width={500}
                height={500}
                className='w-[55px] h-[55px] rounded'
                />
            </div>
                <h2 className='font-semibold text-2xl text-center mt-6'>Selina Gomez</h2>
                <p className='text-[#8A8FB9] text-xs font-semibold text-center mt-1'>Ceo At Webecy Digital</p>
                <div className='flex justify-center mt-7 '>
                <p className='text-[#8A8FB9] text-base font-semibold w-[675px] text-center '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit cum ducimus velit minus maiores laboriosam at sunt!
                  Asperiores dicta expedita ipsum veritatis. Mollitia facere ex,
                  soluta dolor minus fuga sunt maiores nemo? Enim, inventore dolorum.</p>
                </div>
        </div>
    </div>
  )
}

export default About_Us

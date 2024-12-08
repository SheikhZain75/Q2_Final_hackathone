import React from 'react'
import Image from 'next/image'
import first from '@/app/public/first.png'
import second from '@/app/public/second.png'
import third from '@/app/public/third.png'
import fourth from '@/app/public/fourth.png';

const Fearureproduct = () => {
  return (
    <div>
      <div><h1 className='text-[rgb(26,11,91)] font-medium text-[42px] py-3 text-center'>Featured Products</h1></div>
      <div className='flex h-[400px] w-[75%] ml-[45px]'>
        <Image
        src={first}
        alt='Chair'
        width={500}
        height={500} 
        />

        <Image
        src={second}
        alt='chair'
        width={500}
        height={500} 
        />

        <Image
        src={third}
        alt='chair'
        width={500}
        height={500} 
        />

       <Image
        src={fourth}
        alt='chair'
        width={500}
        height={500} 
        />

      </div>
    </div>
  )
}

export default Fearureproduct

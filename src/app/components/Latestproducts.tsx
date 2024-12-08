import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lone from '@/app/public/Lone.png'
import Ltwo from '@/app/public/Ltwo.png'
import Lthree from '@/app/public/Lthree.png'

const Latestproducts = () => {
  return (
    <div>
      <h1 id='lates' className='text-[#151875] font-medium text-[42px] py-3 text-center'>Latest Products</h1>
      <ul className='flex gap-9 justify-center font-medium'>
        <li className='text-[rgb(251,46,134)] underline'><Link href=''>New Arrival</Link></li>
        <li className='text-[rgb(50,53,134)]'><Link href=''>Best Seller</Link></li>
        <li className='text-[rgb(50,53,134)]'><Link href=''>Featured</Link></li>
        <li className='text-[rgb(50,53,134)]'><Link href=''>Special Offer</Link></li>
      </ul>
      <div className='flex gap-9 ml-[100px]'>
      <div className='w-[360px] h-[369px] bg-[rgb(247,247,247)] p-14 mt-5'>
        <Image 
        src={Lone}
        alt='chair'
        width={500}
        height={500}
        className='w-[223px] h-[229px]'
        />
        <div className='flex bg-white w-[360px] justify-between ml-[-56px] mt-[53px] p-1'>
            <p className='text-[rgb(21,24,117)]'> Comfort Handy Craft</p>
            <p className=' text-[rgb(21,24,117)]'>$42.00</p>
            <p className=' line-through text-[rgb(251,36,72)]'>$65.00</p>
        </div>
      </div>
      <div className='w-[360px] h-[369px] bg-[rgb(247,247,247)] p14 mt-5'>
        <Image 
        src={Ltwo}
        alt='chair'
        width={500}
        height={500}
        className='h-[337px]'
        />
        <div className='flex bg-white w-[360px] justify-between mt-[px] p-1'>
            <p className='text-[rgb(21,24,117)]'> Comfort Handy Craft</p>
            <p className=' text-[rgb(21,24,117)]'>$42.00</p>
            <p className=' line-through text-[rgb(251,36,72)]'>$65.00</p>
        </div>
      </div>
      <div className='w-[360px] h-[369px] bg-[rgb(247,247,247)] p-14 mt-5'>
        <Image 
        src={Lthree}
        alt='chair'
        width={500}
        height={500}
        className='w-[223px] h-[229px]'
        />
        <div className='flex bg-white w-[360px] justify-between ml-[-56px] mt-[53px] p-1'>
            <p className='text-[rgb(21,24,117)]'> Comfort Handy Craft</p>
            <p className=' text-[rgb(21,24,117)]'>$42.00</p>
            <p className=' line-through text-[rgb(251,36,72)]'>$65.00</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Latestproducts

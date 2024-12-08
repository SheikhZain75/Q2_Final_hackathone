import React from 'react'
import Image from 'next/image'
import topfooter from '@/app/public/topfooter.png'

function Upperfooter() {
  return (
    <div className='ml-[425px] mt-[20px] mb-[-20px] w-[500px]'>
      <Image
      src={topfooter}
      alt='img'
      width={500}
      height={500}
      className=''
      />
    </div>
  )
}

export default Upperfooter

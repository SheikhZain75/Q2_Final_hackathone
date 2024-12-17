import React from 'react'
import Image from 'next/image'
import topfooter from '@/app/public/topfooter.png'

function Upperfooter() {
  return (
    <div className='flex justify-center mt-[72px] mb-16'>
      <Image
      src={topfooter}
      alt='img'
      width={500}
      height={500}
      className='w-[700px] rounded bg-white'
      />
    </div>
  )
}

export default Upperfooter

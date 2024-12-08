import React from 'react'
import Upperfooter from '../components/upperfooter'

export default function Login() {
  return (
    <div>
        <div className='bg-[rgb(246,245,255)] h-[200px] '>
            <div className='ml-[150px] pt-7'> 
            <h1 className='text-[rgb(16,23,80)] font-bold text-4xl font-serif'>My Account</h1>
            <div className='flex gap-1 mt-3'>
            <a href="#" className='text-[rgb(16,16,16)] font-medium'> Home . Pages </a>
            <p className='text-[rgb(251,46,134)] font-medium' > . My Account</p>
            </div>
            </div>
            
        </div>
      <div className='w-[400px] h-[390px] border border-solid border-black text-center ml-[490px] mt-[100px]'>
        <h1 className='font-bold text-xl mt-[30px]'>Login</h1>
        <p className='text-[rgb(172,176,197)]'>Please login using account detail below.</p>
        <input type="email" 
        placeholder='Email Address'
        className='border border-solid w-[350px] h-9 mt-7 p-2'
        />
        <input type="password" 
        placeholder='Password'
        className='border border-solid w-[350px] h-9 ml[19px] p-2 mt-[26px] mb-3 '
        /> <br /> 
        <a href="#" className='text-[rgb(172,176,197)] mr-[180px]'>Forgot your password?</a><br />
        <button className='bg-[rgb(251,46,134)] text-white w-[350px] h-8 mt-5 mb-4 '>Sign In</button> <br />
        <a href="&apos" className='text-[rgb(172,176,197)]'>Dont have an Account? Create account </a>
        
      </div>

      <Upperfooter/>
    </div>
  )
}

import Link from "next/link"
import { IoSearch } from "react-icons/io5";

export const Header = () => {
    return (
        <div className='flex flex-col md:flex-row w-full    md:w-[1170px] mb-[25px] mt-[23px] px-4 md:px-16 items-center max-w-screen-xl mx-auto  '>
            <h2 className='font-bold mr-16 ml-[-10px] font-inter text-[#000000] text-center md:text-left  text-3xl md:text-[24px]  md:w-auto'>
                Hekto
            </h2>
            
            <ul className='flex flex-col ml-3 md:flex-row w-full md:w-auto justify-center md:justify-between gap-4 md:gap-[57px] text-[#000000]'>
                <Link href={"/"} className='font-poppins text-[16px] text-[#FB2E86] font-medium text-center md:text-left w-[48px] h-[24px] '>
                <select name='' id='' className='  text-center mr-10 '>
                <option value=""> Home</option>
            </select>
                </Link>
                <Link href={"/"} className='font-poppins text-[16px] font-normal text-center md:text-left '>Pages</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-normal text-center md:text-left  '>Product</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-normal text-center md:text-left '>Blog</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-normal text-center md:text-left'>Shop</Link>
                <Link href={"/contactus"} className='font-poppins text-[16px] font-normal text-center md:text-left'>Contact Us</Link>

            </ul>

            <div className='flex gap-3 mt-4 md:mt-0'>
                <button className='flex items-center w-full ml-14 mr-11 md:w-[180px] h-[38px] rounded-[4px] pl-[20px] pt-[7px] pb-[7px] pr-[12px] gap-[7px] bg-white'>
                    <input 
                        type='text' 
                        className='font-poppins text-[13px] font-normal w-[110px] h-[22px] border-2 border-[#F6F5FF] text-[#000000]' />
                    <IoSearch className='w-[25px] h-[20px] bg-[#FB2E86] text-white' />
                </button>
                
               
            </div>
        </div>
    )
}
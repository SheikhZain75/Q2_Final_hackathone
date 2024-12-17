import Link from "next/link"
import { IoSearch } from "react-icons/io5";

export const Header = () => {
    return (
        <div className='flex justify-center h-[84px] py-[22px]'>
            <h2 className='w-[98px] h-[34] font-bold text-3xl font-poppins'>
                Hekto
            </h2>
            
            <ul className='flex gap-7 ml-10 text-[rgb(13,14,67)] font-normal font-lato text-base pt-2'>
                <Link href={"/"} className=' '>
                <select className='text-[rgb(251,46,134)]'>
                <option value=""> Home</option>
                </select>
                </Link>
                <Link href={"/about_us"} className=' '>About Us</Link>
                {/* <Link href={"/pages"} className=' '>Pages</Link> */}
                <Link href={"/product"} className=' '>Product</Link>
                <Link href={"/blog"} className=' '>Blog</Link>
                <Link href={"/shop"} className=' '>Shop</Link>
                <Link href={"/contact_us"} className=' '>Contact Us</Link>
                <Link href={"/faq"} className=' '>FAQ</Link>
            </ul>

            <div>
                <button className='flex ml-24'>
                    <input 
                        type='text' 
                        className='border-[rgb(231,230,239)] border-2 border-solid w-[250px] h-10 ' />
                    <IoSearch className='bg-[rgb(251,46,134)] text-white w-[58px] h-10 py-2 px-[13px]' />
                </button>
            </div>
        </div>
    )
}
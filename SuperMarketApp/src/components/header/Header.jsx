import React, { useState } from 'react'
import logo from "../../assets/logo.jpeg"
import man from "../../assets/man-person-icon.png"
import { IoSearchOutline, IoCallOutline, IoGiftOutline, IoHelpCircleOutline, IoHeartOutline, IoLogIn, IoChevronDown } from "react-icons/io5";
function Header() {
    const [auth, setAuth] = useState(true);
    const [favCount, setFavCount] = useState(1);
    return (
        <header className='border-solid border-b-[1px] p-2 w-full flex justify-evenly'>
            <div className='h-11 flex flex-row gap-[4rem] items-center cursor-pointer w-[60%]'>
                <div className='flex flex-row gap-2 items-center cursor-pointer'>
                    <img src={logo} alt="" className='h-10 shadow-sm shadow-red-400 p-1 rounded-sm' />
                    <div>
                        <h2 className='text-black text-[1.4rem] font-bold font-mono' >Swastik</h2>
                        <h3 className='text-orange-500 text-[0.8rem] font-semibold font-mono -mt-2'> Super Market</h3>
                    </div>
                </div>
                <div className='hidden md:flex flex-row gap-1 items-center bg-slate-100 rounded-md w-[40%]'>
                    <input type="text" className='bg-slate-100 border-0 focus:outline-none p-1 px-2 rounded-md text-sm font-mono h-8 w-[90%]' placeholder='Search Product' />
                    <IoSearchOutline className='text-xl font-bold' />
                </div>
            </div>
            <div className='h-11 flex flex-row gap-[1rem] md:gap-[2rem] items-center cursor-pointer w-[50%] md:justify-evenly justify-end'>
                <span className='hidden md:flex items-center gap-1 hover:text-orange-600 transition-all'><IoCallOutline />+91 80100-13313</span>
                <span className='hidden md:flex items-center gap-1 hover:text-orange-600 transition-all'><IoGiftOutline />Offers</span>
                <span className='hidden md:flex items-center gap-1 hover:text-orange-600 transition-all'><IoHelpCircleOutline /> Help</span>

                {
                    auth &&
                    <>
                        <span className='relative bg-orange-100 p-2 rounded-full text-orange-500 text-xl font-bold'>
                            <IoHeartOutline />
                            { favCount > 0 &&
                                <span className="absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full">{favCount}</span>
                            }
                        </span>
                        <span className='flex items-center gap-1 w-[4rem] md:w-[8rem] bg-slate-100 p-1 rounded-md '>
                            <img src={man} alt="" className='h-8 p-1 rounded-full shadow-md shadow-black' />
                            <p className='hidden md:block text-sm font-mono font-thin'>John Doe</p>
                            <IoChevronDown />
                        </span>
                    </>
                }
                {
                    !auth &&
                    <>
                        <span className='flex items-center gap-1'><IoLogIn /> Login</span>
                    </>
                }

            </div>
        </header>
    )
}

export default Header
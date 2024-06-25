import React, { useState } from 'react'
import logo from "../../assets/logo.jpeg"
import { NavLink } from 'react-router-dom';
import { FaSortDown } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoSearchOutline, IoCallOutline, IoGiftOutline, IoHelpCircleOutline, IoHeartOutline, IoLogIn, IoChevronDown } from "react-icons/io5";
import BlogMenu from './BlogMenu';
import PageMenu from './PageMenu';
function Menu({ isVisible, toggleMenu }) {
    const [isBlogActive, setIsBlogActive] = useState(false);
    const [isPageActive, setIsPageActive] = useState(false);
    const toggleBlog = () => {
        setIsBlogActive(!isBlogActive);
    }

    const togglePage = () => {
        setIsPageActive(!isPageActive);
    }
    return (
        <section className={`fixed z-10 left-0 border-solid bg-white border-l-[1px] border-black h-full top-0 w-full md:w-[30%] overflow-hidden transition-transform duration-300 ease-in transform ${isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <div className='h-[4rem] flex flex-row justify-between px-4 items-center bg-[#ffffff] border-solid border-b-2 '>
                <div className='flex flex-row gap-2 items-center cursor-pointer'>
                    <img src={logo} alt="" className='h-10 shadow-sm shadow-red-400 p-1 rounded-sm' />
                    <div>
                        <h2 className='text-black text-[1.4rem] font-bold font-mono' >Swastik</h2>
                        <h3 className='text-orange-500 text-[0.8rem] font-semibold font-mono -mt-2'> Super Market</h3>
                    </div>
                </div>

                <span
                    className='h-8 w-8 text-white bg-orange-500 bg-gradient-to-r from-pink-700 flex items-center justify-center font-bold rounded-md cursor-pointer'
                    onClick={toggleMenu}
                >
                    X
                </span>
            </div>

            <div className='relative h-[90%] overflow-scroll overflow-x-hidden scroll-m-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
                <div className='py-4 px-8'>
                    <div className='flex flex-row gap-1 items-center bg-slate-100 rounded-md w-full'>
                        <input type="text" className='bg-slate-100 border-0 focus:outline-none p-1 px-2 rounded-md text-sm font-mono h-8 w-[90%]' placeholder='Search Product' />
                        <IoSearchOutline className='text-xl font-bold' />
                    </div>
                </div>


                <div className='h-[4.5rem] flex flex-col py-2 justify-between px-4 '>
                    <div className='w-full flex items-center h-[3rem] justify-center cursor-pointer gap-2 text-white bg-gradient-to-r from-pink-700 bg-orange-500 transition-all duration-900 rounded-md'>
                        <BiCategoryAlt className='font-bold text-xl' />
                        Select Category
                    </div>
                </div>


                <div className='flex px-4 py-2 w-full'>
                    <div className='flex flex-col items-start gap-2 w-full font-sans text-md'>
                        <span className='w-full text-left '>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>Home</NavLink>
                        </span>
                        <span className='w-full text-left '>
                            <NavLink to="/new-products" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>New Products</NavLink>
                        </span>
                        <span className='w-full text-left '>
                            <NavLink to="/featured-products" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>Feature Products</NavLink>
                        </span>
                        <span className='w-full text-left flex gap-1 cursor-pointer' onClick={toggleBlog}>
                            <p>Blog</p>
                            <FaSortDown />
                        </span>
                        {
                            isBlogActive &&
                            <BlogMenu width='w-full' />
                        }
                        <span className='w-full text-left flex gap-1 cursor-pointer' onClick={togglePage}>
                            <p>Pages</p>
                            <FaSortDown />
                        </span>
                        {
                            isPageActive &&
                            <PageMenu width='w-full' />
                        }

                        <span className='w-full text-left '>
                            <NavLink to="/contact-us" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>Contact Us</NavLink>
                        </span>

                    </div>
                </div>

                <div className='flex flex-col h-[10rem] gap-3 p-4 border-solid border-2 w-[90%] m-auto mt-3 rounded-md items-left justify-center'>
                    <span className='flex items-center gap-1 hover:text-orange-600 transition-all'><IoCallOutline />+91 80100-13313</span>
                    <span className='flex items-center gap-1 hover:text-orange-600 transition-all'><IoGiftOutline />Offers</span>
                    <span className='flex items-center gap-1 hover:text-orange-600 transition-all'><IoHelpCircleOutline /> Help</span>
                </div>

                <div className='absolute  p-2 font-mono text-sm'>
                    <p>©Copyright 2024 <b> Swastik Industries Ltd </b>. All Rights Reserved. </p>
                </div>
            </div>
        </section>
    )
}

export default Menu
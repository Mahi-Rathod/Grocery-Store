import React, { useState, useRef, useEffect } from 'react'
import { FaSortDown } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import BlogMenu from './BlogMenu';
import PageMenu from './PageMenu';
import Cart from '../pages/Cart';
import Menu from './Menu';


function Navbar() {
  const [cartCount, setCartCount] = useState(1);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const elementRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  }
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  }

  const [isPageActive, setIsPageActive] = useState(false);
  const togglePage = () => {
    if (isBlogActive) {
      setIsBlogActive(!isBlogActive);
    }
    if(isPageActive) setIsPageActive(false);
    else setIsPageActive(true);
  }

  const [isBlogActive, setIsBlogActive] = useState(false);
  const toggleBlog = () => {
    if (isPageActive) {
      setIsPageActive(!isPageActive);
    }
    setIsBlogActive(!isBlogActive);
  }


  const divRef = useRef(null);
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsPageActive(false);
      setIsBlogActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    const checkElementAtTop = () => {
      const rect = elementRef.current.getBoundingClientRect();

      if (rect.top <= 0 && window.scrollY > 0) {
        setIsFixed(true);
      } else if (window.scrollY === 0) {
        setIsFixed(false);
      } else if (window.scrollY > rect.bottom) {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', checkElementAtTop);
    checkElementAtTop();

    return () => {
      window.removeEventListener('scroll', checkElementAtTop);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={elementRef} className={`${isFixed ? "fixed top-0 z-10" : ""} bg-white transition-transform duration-1000 ease-in-out flex items-center border-solid border-b-[1px] h-[3rem] w-full justify-between shadow-lg`} >
      <div className='w-[15%] hidden md:flex items-center h-[3rem] justify-center cursor-pointer gap-2 border-solid border-r-[1px] hover:text-white hover:bg-gradient-to-r from-orange to-[#FFA500] transition-all duration-900'> <BiCategoryAlt className='font-bold text-xl' />
        Select Category
      </div>

      <div className='block md:hidden px-2'>
        <IoMenu className='font-bold text-3xl' onClick={toggleMenu} />
      </div>
      <Menu isVisible={isMenu} toggleMenu={toggleMenu} />
      <div className='relative hidden md:flex gap-[3rem] w-[80%] items-center px-10 font-sans text-md'>
        <span className=''>
          <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>Home</NavLink>
        </span>
        <span className=''>
          <NavLink to="/new-products" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>New Products</NavLink>
        </span>
        <span className=''>
          <NavLink to="/featured-products" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>Feature Products</NavLink>
        </span>

        <span className='flex gap-1 cursor-pointer hover:text-orange-500' onClick={toggleBlog}>
          <p>Blog</p>
          <FaSortDown />
        </span>

        {
          isBlogActive &&
          <div ref={divRef} className='absolute top-9 w-[25%] left-[21rem] bg-white shadow-md z-[1000]'>
            <BlogMenu width='w-full' />
          </div>
        }

        <span className='flex gap-1 cursor-pointer hover:text-orange-500' onClick={togglePage}>
          <p>Pages</p>
          <FaSortDown />
        </span>

        {
          isPageActive &&
          <div ref={divRef} className='absolute top-9 w-[25%]  left-[28rem] bg-white shadow-md z-[1000]'>
            <PageMenu width='w-full' />
          </div>
        }


        <span className=''>
          <NavLink to="/contact-us" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"}`}>Contact Us</NavLink>
        </span>
      </div>
      <div className='flex gap-2 justify-center items-center w-[15%] bg-orange-500 h-[3rem] hover:bg-gradient-to-r from-pink-700 duration-1000 transition-all text-white font-bold cursor-pointer' onClick={handleCartVisibility}>
        <BsCart3 className='font-bold text-xl' />
        <p className='hidden md:block'>Cart</p>
        <p className='h-6 w-6 p-1 text-sm font-mono bg-white rounded-full text-orange-600'>{cartCount}</p>
      </div>
      <Cart isVisible={isCartVisible} onStateChange={handleCartVisibility} cartCount={cartCount} />

    </nav>
  )
}

export default Navbar
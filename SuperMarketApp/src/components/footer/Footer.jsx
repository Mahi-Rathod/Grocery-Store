import React from 'react'
import { IoKeypad, IoMail } from "react-icons/io5";
import { FaXTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram, FaPinterestP, FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import FooterLinks from '../utils/FooterLinks';
import playstore from "../../assets/footerImages/playstore.JPG"
import iosStore from "../../assets/footerImages/iosStore.JPG"
import americanExpress from "../../assets/footerImages/americanExpress.JPG"
import delivery from "../../assets/footerImages/delivery.JPG"
import masterCard from "../../assets/footerImages/masterCard.JPG"
import discover from "../../assets/footerImages/discover.JPG"
import visa from "../../assets/footerImages/visa.JPG"


function Footer() {
  const categories = [
    { title: "Fruits & Vegetables", link: '/' },
    { title: "Grocery & Staples", link: '/' },
    { title: "Dairy & Eggs", link: '/' },
    { title: "Beverages", link: '/' },
    { title: "Snacks", link: '/' },
    { title: "Home Care", link: '/' },
    { title: "Noodles & Souces", link: '/' },
    { title: "More . . .", link: '/' },
  ]

  const usefulLinks = [
    { title: "About US", link: '/' },
    { title: "Featured Products", link: '/' },
    { title: "Offers", link: '/' },
    { title: "Blogs", link: '/' },
    { title: "Faq", link: '/' },
    { title: "Careers", link: '/' },
    { title: "Contact Us", link: '/' },
  ]

  const topCities = [
    { title: "Chh. Sambhajinagar", link: '/' },
    { title: "Pune", link: '/' },
    { title: "Nanded", link: '/' },
    { title: "Jalna", link: '/' },
    { title: "Haidrabad", link: '/' },
    { title: "Bengluru", link: '/' },
    { title: "Nashik", link: '/' },
  ]

  return (
    <footer className='flex flex-col py-3 bg-[#0b2852] mt-10'>
      <div
        className='flex md:flex-row flex-col px-4 md:px-0 w-full justify-center  items-center gap-1 md:gap-0'
      >
        <div className='w-full md:w-[50%] flex flex-col md:flex-row md:gap-3 md:justify-center md:items-center'>
          <h2 className='text-slate-400 font-mono flex gap-3 items-center'> <IoKeypad className='text-orange-500' /> +91 80100-13313 </h2>
          <h2 className='text-slate-400 font-mono flex gap-3 items-center'> <IoMail className='text-orange-500' /> rathodmaheshofficial21@gmail.com </h2>
        </div>
        <div className='w-full md:w-[50%] flex gap-3 md:items-center md:justify-center py-4'>
          <span className='h-8 w-8 bg-[#51788c] flex items-center justify-center rounded-full text-slate-200 hover:-translate-y-2 duration-700 hover:bg-orange-500 cursor-pointer'><FaFacebookF /></span>
          <span className='h-8 w-8 bg-[#51788c] flex items-center justify-center rounded-full text-slate-200 hover:-translate-y-2 duration-700 hover:bg-orange-500 cursor-pointer'><FaXTwitter /></span>
          <span className='h-8 w-8 bg-[#51788c] flex items-center justify-center rounded-full text-slate-200 hover:-translate-y-2 duration-700 hover:bg-orange-500 cursor-pointer'><FaGooglePlusG /></span>
          <span className='h-8 w-8 bg-[#51788c] flex items-center justify-center rounded-full text-slate-200 hover:-translate-y-2 duration-700 hover:bg-orange-500 cursor-pointer'><FaLinkedinIn /></span>
          <span className='h-8 w-8 bg-[#51788c] flex items-center justify-center rounded-full text-slate-200 hover:-translate-y-2 duration-700 hover:bg-orange-500 cursor-pointer'><FaInstagram /></span>
          <span className='h-8 w-8 bg-[#51788c] flex items-center justify-center rounded-full text-slate-200 hover:-translate-y-2 duration-700 hover:bg-orange-500 cursor-pointer'><FaPinterestP /></span>
        </div>
      </div>


      <div className='flex w-full md:flex-row flex-col border-y-[1px] border-solid border-slate-500 md:px-16'>
        <div className='md:w-[50%] flex flex-row justify-between px-2 md:px-4'>
          <FooterLinks categoryName='Categories' List={categories} />
          <FooterLinks categoryName='Useful Links' List={usefulLinks} />
        </div>

        <div className='md:w-[50%] flex flex-row justify-between px-2 md:px-4'>
          <FooterLinks categoryName='Top Cities' List={topCities} />

          <div className='w-[50%] text-white font-mono font-extrabold text-xl  flex flex-col justify-start items-start p-3 gap-6'>
            <div className='w-full flex flex-col gap-2'>
              <h1 className='text-left'>Download App</h1>
              <div className='w-full flex gap-3'>
                <div className='h-[1.7rem] w-[5rem] bg-contain bg-center border-solid border-slate-400 border-[1px] rounded-[4px]' style={{ backgroundImage: `url(${playstore})` }}></div>
                <div className='h-[1.7rem] w-[5rem] bg-contain bg-center border-solid border-slate-400 border-[1px] rounded-[4px]' style={{ backgroundImage: `url(${iosStore})` }}></div>
              </div>
            </div>

            <div className='w-full flex flex-col gap-2'>
              <h1 className='text-left'> Payment Method </h1>
              <div className='w-full flex gap-3'>
                <div className='md:h-[1.7rem] md:w-[5rem] h-[1rem] w-[4rem] bg-contain bg-center rounded-[2px]' style={{ backgroundImage: `url(${delivery})` }}></div>
                <div className='md:h-[1.7rem] md:w-[5rem] h-[1rem] w-[4rem] bg-contain bg-center rounded-[2px]' style={{ backgroundImage: `url(${visa})` }}></div>
                <div className='md:h-[1.7rem] md:w-[5rem] h-[1rem] w-[4rem] bg-contain bg-center rounded-[2px]' style={{ backgroundImage: `url(${masterCard})` }}></div>
                <div className='md:h-[1.7rem] md:w-[5rem] h-[1rem] w-[4rem] bg-contain bg-center rounded-[2px]' style={{ backgroundImage: `url(${americanExpress})` }}></div>
                <div className='md:h-[1.7rem] md:w-[5rem] h-[1rem] w-[4rem] bg-contain bg-center rounded-[2px]' style={{ backgroundImage: `url(${discover})` }}></div>
              </div>
            </div>

            <div className='w-full flex flex-col gap-2 items-start justify-start'>
              <h1 className='text-left'> Newsletter </h1>
              <div className='flex flex-row gap-1 items-center bg-black/50 border-solid border-slate-600 border-[0.1rem] rounded-md w-[90%] p-1'>
                <input type="text" className='border-0 focus:outline-none p-1 px-2 rounded-md text-sm font-mono  w-[90%] bg-transparent' />
                <span className='h-9 w-9 flex justify-center items-center bg-orange-600 rounded-sm'>
                  <FaTelegramPlane className='text-xl font-bold' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full md:flex-row flex-col md:px-16 justify-evenly '>
        <div className='flex flex-row gap-3 md:w-[70%] py-2 px-3 text-sm text-slate-400 md:px-12 items-center'>
          <span className='text-[0.8rem] font-semibold cursor-pointer hover:-translate-y-1 duration-500 hover:text-white'>About</span>
          <span className='text-[0.8rem] font-semibold cursor-pointer hover:-translate-y-1 duration-500 hover:text-white'>Contact</span>
          <span className='text-[0.8rem] font-semibold cursor-pointer hover:-translate-y-1 duration-500 hover:text-white'>Privacy Policy</span>
          <span className='text-[0.8rem] font-semibold cursor-pointer hover:-translate-y-1 duration-500 hover:text-white'>Terms & Conditions</span>
          <span className='text-[0.8rem] font-semibold cursor-pointer hover:-translate-y-1 duration-500 hover:text-white'>Refund & Return Policy</span>
        </div>
        <p className='text-[0.6rem] md:text-[0.71rem] p-3 text-slate-400 '>©Copyright 2024 <b> Swastik Industries Ltd </b>. All Rights Reserved. </p>
      </div>
    </footer>
  )
}

export default Footer

{/*  */}
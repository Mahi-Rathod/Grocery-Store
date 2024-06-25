import React from 'react'
import dailyEssentials from '../../assets/dailyEssentials.png'
import vegesImg from '../../assets/vegesImg.png'
import allGroceryItems from '../../assets/allGroceryItems.JPG'
import horizontalAdImage from '../../assets/horizontalAdImage.JPG'
import Button from '../utils/Button'

function BestValues() {

  return (
    <div className='flex flex-wrap justify-center items-center gap-5 w-full m-auto'>
        <div className='relative bg-[#e34a09] h-[16rem] w-[20rem] md:w-[21rem] rounded-xl text-white flex flex-col gap-2 py-5  justify-center items-center'>
            <h1 className='text-3xl md:text-[2rem] font-extrabold font-mono mt-6'>Daily Essentials</h1>
            <h3 className='font-mono text-lg font-semibold'>MINIMUM 20% OFF EVERYDAY</h3>
            <img src={dailyEssentials} alt="" className='h-[9.5rem] w-[9.5rem]'/>
        </div>
        <div className='relative bg-[#9fc437] h-[16rem] w-[20rem] md:w-[21rem] rounded-xl text-white '>
          <img src={vegesImg} alt="" className='h-[17rem] blur-[0.7px] absolute top-0 -right-1' />
          <div className='w-[60%] h-full flex flex-col py-8 px-2 gap-7 items-center'>
            <h4 className='text-3xl font-extrabold z-10'>GET UP TO 30% OFF</h4>
            <Button
              buttonText='SHOP NOW'
              bgColor='bg-black'
              className='hover:bg-gradient-to-r from-black md:w-[70%] border-dashed border-gray-300 border-2'
              style={{zIndex:1}}
            />
          </div>
        </div>
        <div className=' bg-orange-600 py-7 md:flex sm:hidden h-[16rem] w-[20rem] md:w-[21rem] bg-cover border-solid border-[1px] border-slate-200 rounded-xl flex flex-col justify-between items-center' style={{backgroundImage:`url(${allGroceryItems}`}}>
          <h3 className='text-2xl font-bold text-white w-[95%]'>Special Discount for All Items</h3>
          <Button buttonText='SHOP NOW' bgColor='bg-orange-600' className='md:w-[35%] border-dashed border-gray-300 border-2'/>
          <h2 className='text-2xl font-bold text-slate-200'>00 Days 00:00:00</h2>
        </div>

        <div className='w-[88%] md:w-[88%] h-[7.2rem] bg-cover bg-blend-multiply rounded-lg flex flex-col justify-evenly items-center' style={{backgroundImage:`url(${horizontalAdImage})`}}>
          <h3 className='md:text-2xl text:xl font-bold font-mono text-white w-[95%]'>Get Cashback! Min Order of $22</h3>
          <Button buttonText='USE CODE: SWASTIKDEVM14' bgColor='bg-orange-500/60' className='md:w-[25%] w-[60%] text-[0.75rem] border-dashed border-white border-2'/>
        </div>

    </div>
  )
}

export default BestValues
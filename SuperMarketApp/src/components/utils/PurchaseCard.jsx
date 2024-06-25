import React from 'react'
import { MdDelete } from "react-icons/md";
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from '../../store/cart/cartSlice';

function PurchaseCard({
  title,
  img,
  amount,
  discount,
  quantity
}) {

  const cartValue = useSelector((state) =>state.cart.value)
  const dispatch = useDispatch();
  
  return (
    <div className='w-full p-4 flex flex-row h-[35%] gap-3 font-mono border-solid border-b-[1px]'>
      <div className={`relative border-solid border-[1px] w-[30%] h-[100%] p-1 flex items-center justify-center rounded-md`}>
        <img src={img} alt="" className='h-[90%] w-[80%]'/>
        <span className='absolute top-1 right-4 bg-orange-500 text-sm px-1 rounded-sm text-white font-mono'>{discount}% off</span>
      </div>
      <div className='w-[75%] h-full flex flex-col gap-3'>
        <div className='w-full flex flex-row justify-between px-2 items-center'>
          <p className='font-bold text-xl'>{title}</p>
          <p className='text-xl text-red-600'><MdDelete /></p>
        </div>
        <div className='w-full flex flex-row gap-2 px-2'>
          <span className={`bg-gray-400 px-1 text-white rounded-md hover:bg-orange-500 cursor-pointer font-semibold`}>0.5</span>
          <span className={`bg-gray-400 px-1 text-white rounded-md hover:bg-orange-500 cursor-pointer font-semibold`}>1kg</span>
          <span className={`bg-gray-400 px-1 text-white rounded-md hover:bg-orange-500 cursor-pointer font-semibold`}>2kg</span>
          <span className={`bg-gray-400 px-1 text-white rounded-md hover:bg-orange-500 cursor-pointer font-semibold`}>3kg</span>
        </div>
        <div className='w-full flex flex-row justify-between px-2'>
          <div className='w-[70%] flex justify-start'>
            <button className='px-3 text-lg text-white font-bold rounded-l-lg bg-blue-950 hover:bg-gradient-to-r from-pink-700 hover:bg-orange-600'>-</button>
            <span className='w-6 font-bold flex justify-center items-center bg-white'>{quantity}</span>
            <button className='px-3 text-lg text-white font-bold rounded-r-lg bg-blue-950 hover:bg-gradient-to-l from-pink-700 hover:bg-orange-600'>+</button>
          </div>
          <div className='w-[30%] flex gap-3 items-end'>
            <span className='font-semibold text-lg text-orange-500'>${amount-(amount*discount/100)}</span>
            <span className='font-semibold text-sm text-gray-500 line-through '>${amount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCard
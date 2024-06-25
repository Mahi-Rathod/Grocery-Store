import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import carrot from '../../assets/carrot.png'
import { BsCart3 } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Product({
    discount = 5,
    isFav = false,
    img = carrot,
    availability = true,
    title = 'Carrot',
    amount = 15
}) {
    const [fav, setFav] = useState(isFav);

    const handleFav = () => {
        setFav(!fav);
    }

    return (
        <div className='flex flex-col justify-center items-center w-[70%] md:w-[95%] m-auto bg-white shadow-lg shadow-slate-300 rounded-lg py-4 px-2 gap-6 border-solid border-2'>
            <div className='w-full flex justify-between px-2 items-center'>
                <span className='bg-orange-600 px-2 py-1 text-white text-sm font-semibold font-mono rounded-lg'>{discount}% OFF</span>
                <span className={`${fav ? 'bg-orange-600 text-white' : ''} bg-orange-200 md:h-[2rem] md:w-[2rem] h-[3rem] w-[3rem] flex items-center justify-center cursor-pointer rounded-full hover:transition-transform hover:text-white hover:bg-orange-600 duration-1000 text-2xl md:text-[1.1rem]`} onClick={handleFav}>{fav ? <FaHeart /> : <FaRegHeart />}</span>
            </div>
            <div className='flex justify-center items-center w-full'>
                <NavLink to='/' className='flex justify-center items-center w-full'>
                    <img src={img} alt="" className='h-[60%] w-[60%] hover:transform hover:translate-x-1 hover:-translate-y-1 duration-500 drop-shadow-xl shadow-black' /></NavLink>
            </div>
            <div>
                <p className='text-sm text-gray-400 text-center font-mono'>
                    {availability ? "Available (In Stock)" : "Out of Stock"}
                </p>
                <h4 className='text-2xl text-blue-950 font-bold font-mono'>
                    {title}
                </h4>
                <div className='flex justify-center items-center gap-4'>
                    <h3 className='font-bold font-mono text-lg text-orange-600'>${parseInt(amount - amount * discount / 100)}</h3> <p className='font-semibold font-mono text-md text-gray-300 line-through'>${amount}</p>
                </div>
            </div>
            <div className='flex justify-between w-[80%]'>
                <div className='flex justify-start'>
                    <button className='px-3 text-lg text-white font-bold rounded-l-lg bg-blue-950 hover:bg-gradient-to-r from-pink-700 hover:bg-orange-600'>-</button>
                    <span className='w-6 font-bold flex justify-center items-center bg-white'>1</span>
                    <button className='px-3 text-lg text-white font-bold rounded-r-lg bg-blue-950 hover:bg-gradient-to-l from-pink-700 hover:bg-orange-600'>+</button>
                </div>
                <div className='flex justify-center items-center text-gray-400 font-bold text-2xl md:text-lg hover:text-orange-600 cursor-pointer duration-500'>
                    <BsCart3 />
                </div>
            </div>
        </div>
    )
}

export default Product;
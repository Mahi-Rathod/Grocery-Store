import React, { useState } from 'react'
import Button from '../utils/Button';
import carrot from '../../assets/carrot.png'
import watermelon from '../../assets/watermelon.png'
import PurchaseCard from '../utils/PurchaseCard';
function Cart({ isVisible, onStateChange, cartCount }) {
    const purchase = 10;
    const deliveryCharges = 1;
    const totalCharges = 11;
    const totalSavings  = 5;
    const [products, setProducts] = useState([
        {
            title :"Watermelon",
            img : watermelon,
            quantity:1,
            weight : 0.50,
            amount : 5,
            discount:6,
        },
        {
            title :"Carrot",
            img :carrot,
            quantity:1,
            weight : 0.50,
            amount : 5,
            discount:7,
        }
    ])
    return (
        <section className={`fixed z-10 right-0 border-solid bg-white border-l-[1px] border-black h-full top-0 md:w-[30%] overflow-hidden transition-transform duration-300 ease-in-out transform ${isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <div className='h-[4rem] flex flex-row justify-between px-4 items-center bg-[#0f234d]'>
                <span className='text-white font-bold flex gap-3 items-center'>
                    <p className='text-xl'>My Cart</p>
                    <p className='text-md font-semibold font-mono text-orange-500'>( {cartCount} ) Items </p>
                </span>

                <span
                    className='h-8 w-8 text-gray-500 bg-white flex items-center justify-center font-bold rounded-md cursor-pointer'
                    onClick={onStateChange}
                >
                    X
                </span>
            </div>

            <div className='h-[4.5rem] flex flex-col py-2 justify-between px-4 border-solid border-b-[1px]'>
                <div className='flex justify-between px-2'>
                    <p className='font-semibold text-gray-700 text-md'>Swastik Super Market</p>
                    <p>${ purchase }</p>
                </div>
                <div className='flex justify-between px-2'>
                    <p className='font-semibold text-gray-700 text-md'>Delivery Charges</p>
                    <p>${ deliveryCharges }</p>
                </div>
            </div>


            <div className=' h-[67%] md:h-[60%] flex flex-col gap-3 overflow-scroll overflow-x-hidden scroll-m-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
                {products.map((product)=>(
                    <PurchaseCard key={product.title} title={product.title} amount={product.amount} img={product.img} discount={product.discount} quantity={product.quantity} />
                ))}
            </div>


            <div className='h-[4.5rem] flex flex-col py-2 justify-between px-4 border-solid border-b-[1px] border-t-[1px]'>
                <div className='flex justify-between px-2'>
                    <p className='font-semibold text-gray-700 text-md'>Total Savings</p>
                    <p>${ totalSavings }</p>
                </div>
                <div className='flex justify-between px-2'>
                    <p className='font-semibold text-gray-700 text-md'>Total</p>
                    <p className='text-orange-500 font-bold'>${ totalCharges }</p>
                </div>
            </div>
            <div className='h-[3rem] flex justify-end px-4 items-center'>
                <Button buttonText='Proceed to CheckOut' bgColor='bg-orange-500' />
            </div>
        </section>
    )
}

export default Cart
import React from 'react'
import Button from '../utils/Button'

function SliderProduct({title, discount, name, img}) {
  return (
    <div className='relative flex flex-col justify-end gap-4 md:gap-12 items-end  md:w-[25rem] h-48 md:h-60 border-solid border-6 border-white rounded-xl bg-cover bg-center bg-white' style={{ backgroundImage: `url(${img})`}}>
        <div className='w-full h-2/4 md:h-[6.5rem] bg-gradient-to-r from-white flex flex-col justify-evenly items-start px-3 py-1'>
            <p className='text-orange-600 text-md font-mono
            '>{discount}% OFF</p>
            <h3 className='text-black text-lg md:text-2xl font-mono font-semibold'>{title}</h3>
            <h4 className='text-gray-500 text-md font-mono'>{name}</h4>
        </div>
        <Button buttonText='Shop Now' className='w-2/4 md:w-1/3 mb-4 mr-5' />
    </div>
  )
}

export default SliderProduct
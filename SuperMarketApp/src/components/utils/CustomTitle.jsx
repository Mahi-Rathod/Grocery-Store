import React from 'react'

function CustomTitle({name, title}) {
  return (
    <div className='flex flex-col gap-2 justify-start items-start w-full p-3'>
        <span className='w-[6rem] bg-orange-600 text-white rounded-md p-1 font-mono font-bold'>{name}</span>
        <h3 className='text-2xl text-black font-mono font-bold '>{title}</h3>
    </div>
  )
}

export default CustomTitle
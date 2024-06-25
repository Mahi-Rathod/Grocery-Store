import React from 'react'
import { NavLink } from 'react-router-dom'
function CategoriesCard({ title, img, pageUrl }) {
    return (
        <NavLink to={pageUrl} >
            <div className='flex flex-col my-2 justify-center w-[10rem] md:w-[9rem] h-[8rem] bg-white items-center rounded-md shadow-md shadow-slate-400'>
                <div><img src={img} alt="" /></div>
                <div><h3 className='text-black text-sm p-1 font-sans font-semibold'>{title}</h3></div>
            </div>
        </NavLink>
    )
}

export default CategoriesCard
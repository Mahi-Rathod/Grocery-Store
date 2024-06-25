import React from 'react'
import { NavLink } from 'react-router-dom';
function BlogMenu({
    width = 'w-full'
}) {
    return (
        <div className={`${width} px-2`}>
            <ul className='w-full px-2 text-left gap-1'>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Our Blog </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Our Blog Two No SideBar  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Our Blog with left Sidebar  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Blog Detail View  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Blog Detail View With SideBar  </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BlogMenu
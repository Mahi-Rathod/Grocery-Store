import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
function PageMenu({
        width='w-full'
    }) {

    const [isAuth, setIsAuth] = useState(false);

    return (
        <div className={`${width} px-2`}>
            <ul className='w-full px-2 text-left gap-1'>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Account </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> About Us   </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Online Shop  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Single Product View  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> CheckOut  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Product Request  </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Order Placed </NavLink>
                </li>
                <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                    <NavLink to='/'> Bill Slip  </NavLink>
                </li>

                {
                    !isAuth &&
                    <>
                        <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                            <NavLink to='/'> Sign In  </NavLink>
                        </li>
                        <li className='my-1 p-1 px-3 rounded-md font-mono bg-slate-100 hover:text-orange-600'>
                            <NavLink to='/'> Sign Up  </NavLink>
                        </li>
                    </>
                }

            </ul>
        </div>
    )
}

export default PageMenu
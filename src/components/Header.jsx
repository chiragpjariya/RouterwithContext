import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className=' bg-black text-white h-[60px] w-[100%]'>
                <nav className='size-[100%]'>
                    <ul className='size-[100%] list-none flex justify-evenly items-center font-semibold text-2xl'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? " text-blue-500 font-bold text-[20px]" : " text-white"
                                }
                            >
                                Login
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                                to="/profile"

                                className={({ isActive }) =>
                                    isActive ? " text-blue-500 font-bold text-[20px]" : " text-white"
                                }
                            >
                                profile
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
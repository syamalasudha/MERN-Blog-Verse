import React from 'react'
import {Link} from "react-router-dom"
import { House } from 'lucide-react';
const NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border-3 w-full">
            <h1 className="font-extrabold">BlogVerse</h1>
            <div className='relative items-center '>
            <Link to="/HomePage" className=' text-gray-700 hover:bg-gray-300 px-7 py-2 rounded-lg font-semibold cursor-pointer justify-around'>Home</Link>
             <House className='absolute left-0 top-0 px-0.5 '/>
             </div>
            <div className='flex gap-5'>
                <Link to="/SignIn" className='font-semibold text-gray-700 cursor-pointer'>Sign In</Link>
                <Link to="/SignUp" className="border-1 bg-blue-600 rounded-xl text-white p-1 cursor-pointer">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar
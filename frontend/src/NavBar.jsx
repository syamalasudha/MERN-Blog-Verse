import React from 'react'
import {Link} from "react-router-dom"
import { House } from 'lucide-react';
const NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border-2 w-full  ">
            <h1 className="font-extrabold">BlogVerse</h1>
            
             <div className="relative">
  <Link
    to="/"
    className="flex items-center gap-2 px-4 py-2 rounded-lg
               text-gray-700 font-semibold
               hover:bg-gray-300
               transition-colors duration-200">
  
           <House size={20} />
        <span>Home</span>
      </Link>
        </div>
            <div className='flex gap-5'>
                <Link to="/SignIn" className='font-semibold text-gray-700 cursor-pointer p-2'>Sign In</Link>
                <Link to="/SignUp" className="border-2 bg-blue-600 rounded-xl text-white p-2 cursor-pointer">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar;
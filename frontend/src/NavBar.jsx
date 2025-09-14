import React from 'react'

const NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border-3">
            <h1 className="font-bold">BlogVerse</h1>
            <button className='text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-lg font-semibold cursor-pointer'>Home</button>
            <div className='flex gap-5'>
                <button className='font-semibold text-gray-700 cursor-pointer'>Sign In</button>
                <button className="border-1 bg-blue-600 rounded-xl text-white p-1 cursor-pointer">Sign Up</button>
            </div>
        </div>
    )
}
export default NavBar
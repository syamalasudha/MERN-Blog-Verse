import React from "react"
import NavBar from "./NavBar"
import {Link} from "react-router-dom"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import {useState} from 'react';


const SignIn = () => {
    
    const [showPassword,setShowPassword]=useState(false)
    const handlePassword=()=>{
        setShowPassword((password)=>!password)

        }

    return (
        <div>
           <NavBar/>
        <div className=" flex flex-col items-center justify-center min-h-screen w-full" >
            <div className="flex flex-col  justify-center mt-8 gap-5 border-1 border-black py-7 w-1/3 rounded-2xl">
                <div className="gap-4 text-center">
                    <h1 className="font-bold text-xl text-black ">Sign In</h1>
                    <p className="text-gray-70">Access Your account</p>
                </div>
                <form className="flex flex-col py-7 items-center gap-5   " action="">
                    <div className="w-[90%]">
                        <p className="text-md font-semibold text-gray-700">Email Address</p>
                        <input type="text"  placeholder="sample@gmail.com" className="border-1 border-gray-700 py-3 rounded-xl focus-outline:none focus:border-white pl-1 w-full " />
                    </div>
                    <div className="w-[90%] relative">
                        <p className="text-md font-semibold text-gray-700">Password</p>
                        <input type={showPassword?"password":"text"} placeholder="sample123" className="border-1 border-gray-700 py-3 rounded-xl focus-outline:none focus:border-white pl-1 w-full " />
                    <p onClick={handlePassword}>{showPassword? <Eye className='absolute right-2 top-9 size-6'/>:<EyeOff className='absolute right-2 top-9 size-6'/>} </p> 
                    </div>
                    <div className="flex gap-2 w-[90%] cursor-pointer " >
                        <input type="checkbox" name="" id="" className="w-5 h-5 m-1 px-1 " />Remember me
                        <p className="text-blue-600 hover:underline hover:text-blue-500 cursor-pointer ml-auto font-semibold">Forget password?</p>
                    </div>
                    <button className="w-[90%] bg-blue-700  py-4 text-white rounded xl font-semibold cursor-pointer hover:scale-102 text-center">SignIn</button>
                    <div className="border-1 border-gray-300 w-[90%]"></div>
                    <p>Don't have an account?<Link to="/SignUp"className="cursor-pointer text-blue-700 hover:underline hover:text-blue-500 font-semibold">Create one here</Link></p>


                </form>

            </div>
        </div>
        </div>

    )
}
export default SignIn;
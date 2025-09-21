import React from 'react'
import NavBar from './NavBar';
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleSubmit = (event) => {

        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "Please enter your fullname"
        }
        if (!formData.email) {
            newErrors.email = "Please enter your Email"
        }
        if (!formData.password) {
            newErrors.password = "Please enter your Password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        }
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Your passwords didn't match"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setErrors("")
            setFormData(
                {
                    fullName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""

                })
            setSuccess("Your Account has been Created Successfully")
            console.log("button clicked");
        }


        //   if(!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword){
        //     setErrors("Please fill all the fields")
        //   } else if(formData.password!==formData.confirmPassword){
        //     setErrors("Your Passwords didn't match")
        //   }else{
        //     setErrors("")
        //     setSuccess("Your Account Created Successfully!!")
        //     setErrors("")}


    }

    const handlePassword = () => {


        setShowPassword((password) => !password)

    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((confirmPassword) => !confirmPassword)

    }
    const handleChange = (event) => {

        setErrors("")
        setSuccess("")
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))

    }


    return (
        <div className='flex items-center justify-around flex-col  gap-5 w-full pb-3 md:w-full  '>
            <NavBar />
            <div className='min-h-screen justify-center md:w-1/3'>
            <h1 className='text-2xl text-blue-600 font-bold text-center'>Join Blog Verse</h1>
            <p className='text-xl text-gray-600 text-center '>Create your Account and <br />Start your Blogging Journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black py-7 mt-2 items-center gap-5 sm:w-[90%] md:w-full " action="">
                <div className='w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold px-1'>Full Name</p>
                    <input value={formData.fullName} type="text" onChange={handleChange} name="fullName" placeholder="Enter your Full Name" className='border-1 border-gray-700 w-full py-3 rounded-xl focus:outline-none focus:border-purple-500 pl-1' />
                    {errors.fullName && <p className='text-red-600'>{errors.fullName}</p>}
                </div>

                <div className='w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold px-1'>Email</p>
                    <input value={formData.email} type="email" onChange={handleChange} name="email" placeholder="Enter your Email" className='border-1 border-gray-700 w-full py-3 rounded-xl focus:outline-none focus:border-purple-500 pl-1' />
                    {errors.email && <p className='text-red-600'>{errors.email}</p>}
                </div>

                <div className='w-[90%] relative'>
                    <p className='text-md text-gray-600 font-semibold px-1'>password</p>

                    <input value={formData.password} type={showPassword ? "password" : "text"} onChange={handleChange} placeholder="Enter your Password" name="password" className='border-1 border-gray-700 w-full py-3 rounded-xl px-7 pl-9 focus:outline-none focus:border-purple-500 ' />
                    <Lock className='absolute left-2 top-10 text-gray-700 size-5 ' />
                    <p onClick={handlePassword}>{showPassword ? <Eye className='absolute right-2 top-9 size-6' /> : <EyeOff className='absolute right-2 top-9 size-6' />} </p>



                </div>

                {errors.password && <p className='text-red-600'>{errors.password}</p>}
                <div className='w-[90%] relative'>
                    <p className='text-md text-gray-700 font-semibold px-1'>Confirm Password</p>
                    <input value={formData.confirmPassword} type={showConfirmPassword ? "password" : "text"} onChange={handleChange} name="confirmPassword" placeholder="Confirm your Password" className='border-1 border-gray-700 w-full py-3 pl-9 rounded-xl focus:outline-none focus:border-purple-500 ' />
                    <LockKeyhole className='absolute left-2 top-10 text-gray-700 size-5' />
                    <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className='absolute right-2 top-9' /> : <EyeOff className='absolute right-2 top-9' />}  </p>


                </div>
                {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword}</p>}
                <div className='flex gap-2 border-1 border-gray-700 w-[90%] justify-content-center py-4 px-1'>
                    <input type="checkbox" name="" id="" className='m-0.5 h-5 w-5 items-center ' />
                    I agree to the Terms of Service and Privacy policy
                </div>


                {success && <p className='text-green-600'>{success}</p>}
                <button type="submit" className='w-[90%] bg-purple-500  py-4 text-white rounded xl font-semibold cursor-pointer flex justify-center gap-1'><CircleUser />Create Account  </button>
                <div className='border-[0.5px] border-gray-500 w-[90%]'></div>
                <p>Already have an Account?<Link to="/SignIn" className='text-purple-500 cursor-pointer'> SignIn Here</Link></p>
                <button className='text-gray-500 font-semibold hover:bg-gray-200 w-[90%] rounded-xl cursor-pointer py-4'>Back to Home</button>
            </form>
            </div>
        </div>
    )
}
export default SignUp;
import React from 'react'
import NavBar from './NavBar';
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Mail } from 'lucide-react';
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
    const [isLoading,setIsLoading]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleSubmit = (event) => {
        setIsLoading(true)
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
            setIsLoading(false)
        } else {
            setTimeout(()=>{
            setErrors("")
            setFormData(
                {
                    fullName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""

                })
                setIsModalOpen(true);
            setSuccess("Your Account has been Created Successfully")
          //  console.log("button clicked");
        setIsLoading(false)},3000)
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
            <div className='w-[90%] md:w-1/3  flex  flex-col items-center mt-5 gap-2 border-1 border-gray-300  rounded-2xl shadow-2xl'>
                <h1 className='text-2xl text-black-600 font-bold text-center mt-5'>Join Blog Verse</h1>
                <p className='text-xl text-gray-600 text-center '>Create your Account and <br />Start your Blogging Journey today</p>
                <form onSubmit={handleSubmit} className="flex flex-col  py-7 mt-2 items-center gap-5 sm:w-[90%] md:w-full " action="">
                    <div className='w-[90%]'>
                        <p className='text-md text-gray-700 font-semibold px-1'>Full Name</p>
                        <input value={formData.fullName} type="text" onChange={handleChange} name="fullName" placeholder="Enter your Full Name" className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-6 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' />
                        {errors.fullName && <p className='text-red-600'>{errors.fullName}</p>}
                    </div>

                    <div className='w-[90%] relative'>
                        <p className='text-md text-gray-700 font-semibold px-1'>Email</p>
                        <input value={formData.email} type="email" onChange={handleChange} name="email" placeholder="Enter your Email" className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-12 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' />
                        <Mail className='absolute left-2 top-10 text-gray-700 size-5 ' />
                        {errors.email && <p className='text-red-600'>{errors.email}</p>}
                    </div>

                    <div className='w-[90%] relative'>
                        <p className='text-md text-gray-600 font-semibold px-1'>password</p>

                        <input value={formData.password} type={showPassword ? "password" : "text"} onChange={handleChange} placeholder="Enter your Password" name="password" className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-12 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' />
                        <Lock className='absolute left-2 top-10 text-gray-700 size-5 ' />
                        <p onClick={handlePassword}>{showPassword ? <Eye className='absolute right-2 top-9 size-6' /> : <EyeOff className='absolute right-2 top-9 size-6' />} </p>

                        {errors.password && <p className='text-red-600'>{errors.password}</p>}

                    </div>

                    
                    <div className='w-[90%] relative'>
                        <p className='text-md text-gray-700 font-semibold px-1'>Confirm Password</p>
                        <input value={formData.confirmPassword} type={showConfirmPassword ? "password" : "text"} onChange={handleChange} name="confirmPassword" placeholder="Confirm your Password" className='border-1 border-gray-300 bg-gray-50 w-full  rounded-md py-3 px-12 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200' />
                        <LockKeyhole className='absolute left-2 top-10 text-gray-700 size-5' />
                        <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className='absolute right-2 top-9' /> : <EyeOff className='absolute right-2 top-9' />}  </p>
                          {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword}</p>}

                    </div>
                    
                    <div className='flex gap-2  justify-content-center py-4 px-1 border-1 border-gray-300 bg-gray-50 w-[90%] rounded-md  '>
                        <input type="checkbox" name="" id="" className='text-sm text-gray-800 font-semibold ml-2' required />
                        I agree to the Terms of Service and Privacy policy
                    </div>


                    {success && <p className='text-green-600'>{success}</p>}
                    <button type="submit" className=' w-[90%] mt-4 py-2 bg-blue-600   text-white rounded xl font-semibold cursor-pointer flex justify-center gap-1'><CircleUser /><p> {isLoading?"Creating...":"Create Account"}</p>  </button>
                    <div className='border-[0.5px] border-gray-500 w-[90%]'></div>
                    <p>Already have an Account?<Link to="/SignIn" className='text-blue-500 cursor-pointer'> SignIn Here</Link></p>
                    <Link to="/" className='text-gray-500 font-semibold hover:bg-gray-200 w-[90%] rounded-xl cursor-pointer text-center  py-4'>Back to Home</Link>
                </form>
            </div>
            
           {isModalOpen && <div className='fixed h-dvh w-dvw flex justify-center items-center'>
            <div className='absolute h-dvh w-dvw bg-black opacity-50'></div>
                <div className='p-6 border-1 border-gray rounded-lg bg-white z-10'>
                    <p className='text-xl font-bold'>Hello Syamala,Welcome to Blog Verse</p>
                    <p className='mb-4'>Your account has been created Successfully.You can now Sign in</p>
                    <Link to="/SignUp" className='px-5 py-3 bg-blue-500 rounded-xl'>Login</Link>
                    <button onClick={()=>setIsModalOpen(false)} className='text-black px-4 py-2 rounded-lg bg-gray-200 ml-2 cursor-pointer'>Close</button>
                </div>
            </div>}

        </div>
    )
}
export default SignUp;
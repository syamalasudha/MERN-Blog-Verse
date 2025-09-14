import React from 'react'
const SignUp=()=>{
    return(
        <div className='flex items-center flex-col mt-10 gap-5 '>
            <h1 className='text-2xl text-blue-600 font-bold'>Join Blog Verse</h1>
            <p className='text-xl text-gray-600 text-center '>Create your Account and <br />Start your Blogging Journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 "action="">
               <div className='w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold'>Full Name</p>
                     <input type="text" placeholder="Enter your Full Name" className='border-1 border-gray-700 w-full py-3 rounded-xl focus:outline-none focus:border-purple-500 pl-1'  />
                </div>
                
               <div className='w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold'>Email</p>
                     <input type="text" placeholder="Enter your Email" className='border-1 border-gray-700 w-full py-3 rounded-xl focus:outline-none focus:border-purple-500 pl-1'  />
                </div>
                
               <div className='w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold'>password</p>
                     <input type="text" placeholder="Enter your Password" className='border-1 border-gray-700 w-full py-3 rounded-xl focus:outline-none focus:border-purple-500 pl-1'  />
                </div>
                
               <div className='w-[90%]'>
                    <p className='text-md text-gray-700 font-semibold'>Confirm Password</p>
                     <input type="text" placeholder="Confirm your Password" className='border-1 border-gray-700 w-full py-3 rounded-xl focus:outline-none focus:border-purple-500 pl-1'  />
                </div>
                <div className='flex gap-2 border-1 border-gray-700 w-[90%] justify-content-center py-4 px-1'>
                    <input type="checkbox" name="" id="" className='m-0.5 h-5 w-5 items-center'/>
                    I agree to the Terms of Service and Privacy policy
                </div>
                <button className='w-[90%] bg-purple-500  py-4 text-white rounded xl font-semibold cursor-pointer'>Create Account  </button>
                <div className='border-[0.5px] border-gray-500 w-[90%]'></div>
                <p>Already have an Account?<span className='text-purple-500 cursor-pointer'> SignIn Here</span></p>
                <button className='text-gray-500 font-semibold hover:bg-gray-200 w-[90%] rounded-xl cursor-pointer py-4'>Back to Home</button>
            </form>
        </div>
    )
}
export default SignUp;
import React from "react"
const HomePage=()=>{
    const Blogs=[
        {
            id:1,
            img:"./React.jpg"
            profile:
            

        }
    ]
    return(
        <div>
            <div className="flex justify-around h-16 items-center border-3">
            <h1 className="font-bold">BlogVerse</h1>
            <button className='text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-lg font-semibold cursor-pointer'>Home</button>
            <div className='flex gap-5'>
                <button className='font-semibold text-gray-700 cursor-pointer'>Sign In</button>
                <button className="border-1 bg-blue-600 rounded-xl text-white p-1 cursor-pointer">Sign Up</button>
            </div>
        </div>
            <div>
                <h1 className="font-bold">Welcome to BlogVerse</h1>
                <p>Discover Amazing Stories,insights and ideas from our Community of Writers.Sign In to create your own posts and Save your favourites</p>
            </div>
        </div>
    )
}
export default HomePage;
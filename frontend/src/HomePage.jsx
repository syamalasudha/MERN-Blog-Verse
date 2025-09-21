import React from "react"
import NavBar from "./NavBar"
const HomePage=()=>{
    const post=[
        {
            id:1,
            img:"./React.jpg",
            profile:"./Sarah.jpg",
            author:"Sarah Johnson",
            timeRead:" 5 min read",
            postedOn: "Jan 10, 2024",
            title:"Getting Started with React and Tailwind CSS",
            content:"Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS.React and Tailwind CSS are a powerful combination for building modern web applications."

        },{
            id:2,
            img:"./Futureofwebdevelopment.jpg",
            profile:"./Micheal.jpg",
            author:"Micheal Johnson",
            timeRead:" 5 min read",
            postedOn: "Jan 10, 2024",
            title:"The Future Of Web Development",
            content:"React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
            

        },{
            id:3,
            img:"./Mindfulliving.jpg",
            profile:"./Emily.jpg",
            author:"Emily Rodriguez",
            timeRead:" 5 min read",
            postedOn: "Jan 10, 2024",
            title:"Mindful living in Digital Place",
            content:"React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
            

        },{
            id:4,
            img:"./Nodejsapplication.jpg",
            profile:"./David.jpg",
            author:"David kim",
            timeRead:" 5 min read",
            postedOn: "Jan 10, 2024",
            title:"Building Scalable Node.js Applications",
            content:"React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
            

        },{
            id:5,
            img:"./Designsystems.jpg",
            profile:"./Lisa.jpg",
            author:"Lisa Park",
            timeRead:" 5 min read",
            postedOn: "Jan 10, 2024",
            title:"Design Systems:A complete Guide",
            content:"React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
            

        },{
            id:6,
            img:"./Machinelearning.jpg",
            profile:"./Alex.jpg",
            author:"Alex Thompson",
            timeRead:" 5 min read",
            postedOn: "Jan 10, 2024",
            title:"Introduction to Machine Learning",
            content:"React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
            

        },

    ]
    return(
        <div className="min-h-screen flex flex-col items-center pt-5 bg-gray-50">
            <NavBar/>
            
            <p className="text-4xl font-bold mt-10 ">Welcome to BlogVerse</p>
            <p className="text-sm text-gray-500 mt-4 text-center md:text-lg "> Discover amazing stories, insights, and ideas from our community <br/>of Writers.<span className="text-blue-600 hover:underline cursor-pointer">Sign In</span> to create your own posts and Save your Favourites.</p>
            <div className=" flex  gap-10 justify-around mt-5  ">
                <button className="px-3 md:10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-3 md:10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
            </div>
            
            <div className="grid md:grid-cols-3 mt-5  gap-30 justify-center items-center rounded-lg shadow-lg ">
                {
                    post.map((post) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg" key={post.id}>
                            <div className="relative">
                                <img className=" rounded-t-lg  shadow-lg h-52 w-96 hover:scale-98" src={post.img} alt="Writing" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                                <p className="absolute left-4 top-3 bg-blue-600 rounded-2xl p-1 text-gray-300 text-sm font-semibold">Technology</p>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img className="rounded-full shadow-lg h-12 w-12 " src={post.profile} alt="Writing" />
                                <div>
                                    <p className="font-semibold">{post.author}</p>
                                    <p className="text-gray-500">{post.postedOn} . {post.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{post.title}</p>
                                <p className="text-gray-600">
                                    {post.content}
                                </p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>))
}
                        </div>
                        
        </div>
    )
}
export default HomePage;
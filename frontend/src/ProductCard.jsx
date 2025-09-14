const ProductCard =()=>{
    //border:1px solid black
    //

    return(
        <div className="border-3 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-2xl ">
            <img src="vite.svg" alt="vite" className="w-[150px] h-[150px] border-2 border-blue-500 rounded-full"/>
            <div className="flex flex-col gap-3 items-center">
            <h2 className="font-bold text-3xl text-blue-700">Product 1</h2>
            <p className="text-xl text-grey-600 text-center">This is a Sample Product for Testing</p>
            <p className="text-2xl font-bold text-green-600 border-1 border-black">$59.99</p>
            </div>
            <button className="bg-blue-500 text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-blue-900">Add to Cart</button>
        </div>
    )

}
export default ProductCard
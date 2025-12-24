
const NewsLetterBox = () => {
  const onSubmitHandler=(e)=>{
    e.preventDefault();
  

  }
  return (
    <div className="text-center space-y-4">
        <p className="text-3xl font-semibold  text-red-600 ">Subcribe Now & Get 20% Off</p>
        <p className="text-gray-600 mt-3">We are offering 20% off to the first 1k subcriber. So,Hurry up and subcribe to get 20% off.</p>
     
            <form className="w-full sm:w-1/2 flex items-center mx-auto gap-2 " action="" onSubmit={onSubmitHandler}>
                {/* <div>
                <input className="w-full outline-none border border-gray-400 sm:w-1/2 py-2 px-4 rounded" type="email" placeholder="Enter your email address" required />
                <button className="bg-black text-white py-2 px-6 rounded mx-4 cursor-pointer">Submit</button>
                </div> */}
                <input className=" w-full py-2 px-6 sm:flex-1 outline-none border" type="email" placeholder="Enter Your Email" />
                <button className="bg-black py-2 px-8 text-white cursor-pointer rounded">Submit</button>
            </form>
       

      
    </div>
  )
}

export default NewsLetterBox

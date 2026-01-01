import { useState } from "react"

const Login = () => {
  const [currenState,setCurrenState]=useState('Sign Up');
  const onSubmitHandler=async(e)=>{
    e.preventDefault();

  }
  
  return (
    <form onSubmit={onSubmitHandler} action="" className=" flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
<div className="inline-flex items-center gap-2 mb-2 mt-10">
  <p className="text-3xl">{currenState}</p>
  <hr  className="border-none h-[1.5px] w-10 bg-gray-800"/>
</div>
{currenState==='Login'?'':<input type="text" className="w-full px-3 py-2 border border-gray-800 rounded " placeholder="Name" required />}
<input type="email" className="w-full px-3 py-2 border border-gray-800 rounded " placeholder="Email" required />
<input type="password" className="w-full px-3 py-2 border border-gray-800 rounded " placeholder="Password" required />
<div className="w-full flex justify-between text-sm font-bold mt-2">
<p className="cursor-pointer">Forgot Your Password?</p>
{currenState==='Login'?
 <p onClick={()=>setCurrenState('Sign Up')} className="cursor-pointer">Create account</p>:
 <p onClick={()=>setCurrenState('Login')} className="cursor-pointer">Login Here</p>}
</div>
<button className="border px-4 py-2 text-white bg-black cursor-pointer rounded font-semibold mt-4">{currenState==='Login'? 'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
//flex  flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800
//inline-flex items-center gap-2 mb-2 mt-10
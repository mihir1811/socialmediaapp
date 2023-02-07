import React from 'react'
import Link from "next/link"


const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border' style={{width:"400px" , borderRadius:"10px" ,padding:"20px"}}>
        <h1 className='text-center fntSz20 fw600 mb-5' >Login</h1>
        <input className='w-full py-1 px-2 border rounded-md mb-2' type="text" name="email" placeholder='E-mail*' autoComplete='off' />
        <input className='w-full py-1 px-2 border rounded-md mb-2' type="text" name="password" placeholder='Password*' autoComplete='off' />
        <button className='bg-black text-white hover:bg-white hover:text-black hover:border border py-2 px-5 border-black rounded-md w-full' >Login</button>
        <p className='fntSz12 text-right mt-2'>not Registered Yet? <Link href="/register" className='text-blue-400'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
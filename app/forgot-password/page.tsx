"use client"
import Link from 'next/link';
import React, {useState} from 'react'

 const Page = () => {
    const [email,setEmail]= useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
         console.log(email);
 }
  return (
    <div className='w-1/2'>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center font-bold text-purple-600">Forgot password</h2>
        <div>
          <label htmlFor="email"className="m-3">Email:</label>
          <input className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='text-center'><button className="w-1/3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounde"type="submit">Send</button></div>
        <div className='text-right font-bold'><Link href={"/login"}>{"<<<"}</Link></div>
        </form>  
 </div>

  )
}
export default Page

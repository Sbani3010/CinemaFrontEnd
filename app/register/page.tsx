"use client"
import Link from 'next/link';
import React,{useState} from 'react'

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };
  return (
    <div  className="w-1/2">
      <h2 className="text-center font-bold text-purple-600">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"className="m-3">Username:</label>
          <input className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="password"className="m-3">Password:</label>
          <input className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='text-center'><button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit">Register</button></div>
      <div className='text-right'><Link href={"/login"}>Already have an Account?Login here</Link></div>
      </form>
      
    </div>
  )
}

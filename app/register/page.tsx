"use client"
import { error } from 'console';
import Link from 'next/link';
import React,{useState,FormEvent} from 'react'
import { couldStartTrivia } from 'typescript';

export default function Register() {
  const [name, setName] = useState('');
  const [surname,setSurname]=useState('');
  const [email, setEmail] = useState('');
  const[phone,setPhone]=useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const user = await fetch("http://localhost:8084/user/create",{headers: {

   "Content-type": "application/json; charset=UTF-8",

 },method:"POST",body:JSON.stringify({
   name,surname,email,phone
   })}).then(v=>v.json()).catch(err=>console.log(err));
  //  const data= await user.json()
   console.log (user);
    console.log(`name: ${name},surname: ${surname},Email: ${email},phone:${phone} Password: ${password}`);
  };
  return (
    <div  className="w-1/2">
      <h2 className="text-center font-bold text-purple-600">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"className="m-3">Name:</label>
          <input className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="surname"className="m-3">Surname:</label>
          <input className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
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
          <label htmlFor="phone"className="m-3">phone:</label>
          <input className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

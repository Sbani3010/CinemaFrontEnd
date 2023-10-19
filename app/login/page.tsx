"use client"
import NavBar from "@/components/NavBar";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8084/user', { email, password });

      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/home';
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <><NavBar />
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <h2 className="text-center font-bold text-purple-600 text-2xl">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="m-3">Username:</label>
            <input
              className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div>
            <label htmlFor="password" className="m-3">Password:</label>
            <input
              className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <div className="text-center">
            <button className="w-1/3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
          </div>
          <div className="text-right">
            <Link href="/register">Don't have an account? Register here</Link>
          </div>
          <div className="text-right text-red-600">
            <Link href="/forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default Login;
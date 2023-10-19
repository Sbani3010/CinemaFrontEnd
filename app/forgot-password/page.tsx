"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NavBar from '@/components/NavBar';

const Page = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);

  
  function verifyVerificationCode(enteredCode: string) {
    const validVerificationCode = '123456'; 

    return enteredCode === validVerificationCode;
  }

  const sendEmail = () => {
    emailjs.send('service_gochwvz', 'template_1rc6zcs', {
      to_email: email,
      message: 'Your password reset link goes here.',
    }, 'YOUR_USER_ID')
      .then(() => {
        console.log('Email sent successfully');
        setMessage('Password reset mail sent. Please check your inbox.');
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
        setMessage('An error has occurred! Please try again.');
      });
  };
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!emailSent) {
      
    } else if (!verificationCodeSent) {
      if (verifyVerificationCode(verificationCode)) {
        setMessage('Verification code is correct. Please enter your new password.');
        setVerificationCodeSent(true);
      } else {
        setMessage('Verification code is incorrect. Please try again.');
      }
    } else {
      if (newPassword === confirmPassword) {
        setMessage('Password has been reset successfully.');
      } else {
        setMessage('Passwords do not match. Please try again.');
      }
    }
  };

  return (
    <><NavBar /><div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center font-bold text-purple-600 text-2xl">Forgot password</h2>
          <div>
            <label htmlFor="email" className="m-3">Email:</label>
            <input
              className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={emailSent} />
          </div>
          <div>
            <label htmlFor="verificationCode" className="m-3">Verification Code:</label>
            <input
              className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              disabled={!emailSent || verificationCodeSent} />
          </div>
          <div>
            <label htmlFor="newPassword" className="m-3">New Password:</label>
            <input
              className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus-border-purple-500"
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              disabled={!emailSent || !verificationCodeSent} />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="m-3">Confirm Password:</label>
            <input
              className="m-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus-border-purple-500"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={!emailSent || !verificationCodeSent} />
          </div>
          <div className="text-center">
            <button className="w-1/3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              {emailSent ? (verificationCodeSent ? 'Reset Password' : 'Send Verification Code') : 'Send'}
            </button>
          </div>
          <div className="text-right font-bold">
            <Link href="/login">{'<<< Back to Login'}</Link>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div></>
  );
};

export default Page;

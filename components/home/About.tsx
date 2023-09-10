import React from "react";
import Head from 'next/head';

function About() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>About Us</title>
      </Head>
      <div className="text-center">
        <h1 className="text-gold text-4xl font-bold">Book Now!!!!</h1>
        <p className="mt-4">
          Welcome to our newly launched movie booking site! We're excited to bring you a convenient and user-friendly platform where booking movies is as easy as a breeze. Our goal is to provide you with a seamless experience that's so simple, even a 10-year-old can use it to book their favorite movies.
        </p>
        {/**/}
        
        <h2 className="text-gold text-2xl mt-6">For More Information:</h2>
        <ul className="text-left mt-2">
          <li>
            <a className="text-blue-500" href="https://www.sss.co.za" target="_blank" rel="noopener noreferrer">Website</a>
          </li>
          <li>
            <a className="text-blue-500" href="https://www.facebook.com/SapphireScreenStudios" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a className="text-blue-500" href="https://twitter.com/SaphireScreenStudios" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a className="text-blue-500" href="https://www.instagram.com/SaphireScreenStudios" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
        <p className="mt-4">
          **Customer Support:**
          - Email: <a href="mailto:support@m$mVisio.com" className="text-blue-500">support@m$mVisio.com</a>
          - Phone: <span className="text-blue-500">0870871234</span>
        </p>
      </div>
    </div>
  );
}

export default About;

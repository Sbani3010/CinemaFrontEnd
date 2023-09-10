import Login from "@/components/auth/Login";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="name" />
      <Login />
      <Link className="" href={"/login"}>Login</Link>
      <button>submit</button>
    </div>
  );
};

export default Register;

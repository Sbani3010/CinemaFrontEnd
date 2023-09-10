import Login from "@/components/auth/Login";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Login />
      <Link href={"/register"}>Register</Link>
      <button >submit</button>
    </div>
  );
};

export default page;

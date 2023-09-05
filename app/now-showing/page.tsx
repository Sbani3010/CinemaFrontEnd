"use client";
import { useState, useEffect } from "react";

export default function Movies() {
  const [x, setX] = useState(true);
  useEffect(() => {
    console.log("Hello");
    return () => {
      console.log("Clean up");
    };
  }, [x]);
  return (
    <>
      <button
        onClick={() => {
          setX(!x);
          alert("donee");
        }}
      >
        click me
      </button>
    </>
  );
}

import React  from "react";
import Link from "next/link";

export default function Home() {
  const linkStyles="underline text-blue-600 hover:text-darkblue-800"

  return(
    <main className="h-screen">
      <h1 className="text-x1">CPRG 306: Web Development-2 - Assignment </h1>
      <div><Link className={linkStyles} href="./week-2"> Week2 Assignment </Link></div>
      <div><Link className={linkStyles} href="./week-3"> Week3 Assignment </Link></div>
      <div><Link className={linkStyles} href="./week-4"> Week4 Assignment </Link></div>
    </main>
  );
}
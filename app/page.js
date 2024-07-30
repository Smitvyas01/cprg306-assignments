import React  from "react";
import Link from "next/link";

export default function Home() {
  const linkStyles="underline text-blue-600 hover:text-cyan-100 text-2xl"
  const divStyles="mt-20"
  

  return(
    <main className="h-screen-3x bg-black text-orange-500 text-center ">
      <h1 className="text-3xl">CPRG 306: Web Development-2 - Assignment </h1>
      <div className={divStyles}>
        <div className={divStyles}><Link className={linkStyles} href="./week-2"> Week2 Assignment </Link></div>
        <div className={divStyles}><Link className={linkStyles} href="./week-3"> Week3 Assignment </Link></div>
        <div className={divStyles}><Link className={linkStyles} href="./week-4"> Week4 Assignment </Link></div>
        <div className={divStyles}><Link className={linkStyles} href="./week-5"> Week5 Assignment </Link></div>
        <div className={divStyles}><Link className={linkStyles} href="./week-6"> Week6 Assignment </Link></div>
        <div className={divStyles}><Link className={linkStyles} href="./week-7"> Week7 Assignment </Link></div>
        <div className={divStyles}><Link className={linkStyles} href="./week-8"> Week8 Assignment </Link></div>
      </div>
    </main>
  );
}
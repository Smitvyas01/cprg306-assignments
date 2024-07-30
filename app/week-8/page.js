"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context.js";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen text-center bg-black text-orange-600">
      <h1 className="text-4xl font-bold mb-12">Shopping List Application</h1>
      {user ? (
        <>
          <p className="text-lg mb-6">
            Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
          </p>
          <button
            className="bg-black text-white border-none py-2 px-4 rounded cursor-pointer mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <Link
            href="/week-7"
            className="text-lg text-white hover:underline ml-4"
          >
            Continue to your Shopping List
          </Link>
        </>
      ) : (
        <button
          className="bg-blue-600 text-white border-none py-2 px-4 rounded cursor-pointer"
          onClick={handleSignIn}
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
};

export default Page;
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-icha flex">
      <div className="flex w-1/2 h-16 align-middle">
        <div className="w-full ml-3 flex justify-between items-center px-6">
          <Link href="/" className=" text-3xl font-bold text-icha2">
            Quizify
          </Link>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            <Link href={"/"}>Home</Link>
          </button>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            <Link href={"/activity"}>Activity</Link>
          </button>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            <Link href={"/myquiz"}>My Quiz</Link>
          </button>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            <Link href={"/profile"}>Profile</Link>
          </button>
        </div>
      </div>
      {(pathname == "/" ||
        pathname == "/home" ||
        pathname == "/activity" ||
        pathname == "/myquiz" ||
        pathname == "/quiz/create" ||
        pathname == "/profile" ) && (
        <div className="w-1/2 ">
          <div className="h-full flex justify-end items-center mr-3 px-6">
            <button
              type="button"
              className="inline-flex px-5 py-2 text-[16px] text-sm text-white bg-black rounded-md"
            >
              <Link href={"/quiz/create"}>Create Quiz</Link>
            </button>
          </div>
        </div>
      )}
      {(pathname == "/sign-in" || pathname == "/sign-up") && (
        <div className="w-1/2 ">
          <div className="h-full flex justify-end items-center mr-3 px-6 gap-8">
            <button
              type="button"
              className="inline-flex px-5 py-2 text-[16px] text-sm text-white bg-icha2 rounded-md"
            >
              <Link href={"/sign-in"}>Log in</Link>
            </button>
            <button
              type="button"
              className="inline-flex px-5 py-2 text-[16px] text-sm text-white bg-black rounded-md"
            >
              <Link href={"/sign-up"}>Sign Up</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

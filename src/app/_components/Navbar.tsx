"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-icha flex" >
      <div className="flex w-1/2 h-16 align-middle">
        <div className="w-full ml-3 flex justify-between items-center px-6">
          <Link
            href="/"
            className=" text-3xl font-bold text-icha2"
          >
            Quizify
          </Link>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
            data-dropdown-toggle="dropdown"
          >
            Home
          </button>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            <Link href={"/Activity"}>Activity</Link>
          </button>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            My Quiz
          </button>
          <button
            type="button"
            className="inline-flex px-7 py-2 text-[16px] text-sm font-bold text-white"
          >
            Profile
          </button>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="h-full flex justify-end items-center mr-3 px-6">
          <button
            type="button"
            className="inline-flex px-5 py-2 text-[16px] text-sm text-white bg-black rounded-md"
          >
            Create Quiz
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

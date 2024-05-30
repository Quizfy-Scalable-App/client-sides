import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-7xl px-6 py-12">
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <h1 className="text-6xl font-semibold mb-4">Test Your Wits, Beat the Quiz!</h1>
          <p className="text-lg">
            Dive into a world of exciting quizzes across various topics and challenge yourself to reach the top of the leaderboard. Join Quizify today and turn learning into an adventure!
          </p>
        </div>
        
        <div className="w-[473px] h-[562px] rounded-md">
          <h2 className="text-3xl font-medium text-left mt-6">Sign up</h2>
          <p className="text-left text-base text-slight-gray">Sign up for free to access to in any of our products</p>
          <form>
            <div className="mb-4">
              <label className="block text-slight-gray mt-6 text-base">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-icha2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slight-gray text-base">Email address</label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-icha2"
              />
            </div>
            <div className="mb-6">
              <label className="block text-slight-gray text-base">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-icha2"
              />
              <p className="text-xs text-slight-gray mt-1">Use 8 or more characters</p>
            </div>
            <button
              type="submit"
              className="w-[250px] h-[64px] rounded-full text-2xl font-medium px-3 py-2 text-white bg-icha2 mt-2"
            >
              Sign up
            </button>
          </form>
          <p className="text-left mt-1 text-base">
            Already have an account? <Link href="/sign-in" className="text-icha2">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

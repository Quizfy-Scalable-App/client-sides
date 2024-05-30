import React from "react";

const ProfilePage = () => {
  // Static data for the profile
  const profileData = {
    username: "John Doe",
    email: "johndoe@gmail.com",
    password: "************",
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full max-w-[667px] max-h-[559px] bg-light-gray p-10 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 font-bold">Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={profileData.username}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-icha2"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={profileData.email}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-icha2"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={profileData.password}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-icha2"
              readOnly
            />
          </div>
          <div className="flex justify-center">
             <button
                type="button"
                className="w-[130px] h-[40pxs] px-3 py-2 text-white bg-icha2 rounded-md"
             >
             Log out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
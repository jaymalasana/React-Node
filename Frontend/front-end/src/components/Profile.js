import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
    const auth = localStorage.getItem("user");
  return (
    <div className="bg-[#456990] flex flex-col items-center text-[#d6b880] py-10">
      <div className="bg-[#1c2541] p-6 rounded-lg shadow-md w-80">
        <div className="flex flex-col items-center">
          <FaRegUserCircle size={50} className="mb-4" />
          <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        </div>
        <div className="text-left space-y-4">
          <div>
            <label className="block font-medium text-lg">Username:</label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded bg-[#3a506b] text-[#d6b880]"
              disabled
              value={JSON.parse(auth).name}
            />
          </div>
          <div>
            <label className="block font-medium text-lg">Email:</label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded bg-[#3a506b] text-[#d6b880]"
              disabled
              value={JSON.parse(auth).email}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

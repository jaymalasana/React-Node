import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = () => {
    console.log(name, email, password);
    // setName("")
    // setEmail("")
    // setPassword("")
  };

  return (
    <>
      <div className="bg-[#456990]">
        <h1 className="text-3xl text-center text-[#d6b880]">Register</h1>
        <div className="flex justify-between flex-col">
          <input
            type="text"
            className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="mx-auto my-5 bg-[#516cbc] border border-gray-300 text-[#d6b880] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:bg-[#132048]"
            onClick={collectData}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;

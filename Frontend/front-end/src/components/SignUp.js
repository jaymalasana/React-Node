import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.log(name, email, password);

    let result = await fetch("http://localhost:8080/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);

    localStorage.setItem("user", JSON.stringify(result));

    navigate("/");
  };

  return (
    <>
      <div className="bg-[#456990]">
        <h1 className="text-3xl text-center text-[#d6b880]">Register</h1>
        <div className="flex justify-between flex-col">
          <form>
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
            autoComplete=""
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

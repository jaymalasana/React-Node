import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      {auth ? (
        <ul className="bg-[#0b132b] flex justify-around text-[#d6b880]">
          <li className="font-medium text-xl my-3">J-ADMIN</li>
          <li className="my-4 hover:font-bold hover:underline">
            <Link to="/">Products</Link>
          </li>
          <li className="my-4 hover:font-bold hover:underline">
            <Link to="/add">Add Product</Link>
          </li>
          <li className="my-4 hover:font-bold hover:underline">
            <Link to="/update">Update Product</Link>
          </li>
          <li className="my-4 hover:font-bold hover:underline">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="my-4 hover:font-bold hover:underline">
            <Link onClick={logout} to="/signup">
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="bg-[#0b132b] flex justify-end  text-[#d6b880]">
          <li className="font-medium text-xl mr-[1050px] mt-[12px]">J-ADMIN</li>
          <li className="my-4 hover:font-bold hover:underline mr-44">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="my-4 hover:font-bold hover:underline mr-20">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

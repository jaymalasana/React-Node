import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="bg-[#0b132b]">
      {auth ? (
        <ul className="flex justify-between items-center px-10 py-3 text-[#d6b880]">
          <li className="font-medium text-xl">J-ADMIN</li>
          <div className="flex space-x-8">
            <li className="hover:font-bold hover:underline">
              <Link to="/">Products</Link>
            </li>
            <li className="hover:font-bold hover:underline">
              <Link to="/add">Add Product</Link>
            </li>
            <li className="hover:font-bold hover:underline">
              <Link to="/update">Update Product</Link>
            </li>
            <li className="hover:font-bold hover:underline">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="flex items-center space-x-2 hover:font-bold hover:underline">
              <FaRegUserCircle size={20} />
              <Link onClick={logout} to="/signup">
                Logout({JSON.parse(auth).name})
              </Link>
            </li>
          </div>
        </ul>
      ) : (
        <ul className="flex justify-between items-center px-10 py-3 text-[#d6b880]">
          <li className="font-medium text-xl">J-ADMIN</li>
          <div className="flex space-x-8">
            <li className="flex items-center space-x-2 hover:font-bold hover:underline">
              <FaRegUserCircle size={20} />
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="flex items-center space-x-2 hover:font-bold hover:underline">
              <FaRegUserCircle size={20} />
              <Link to="/login">Login</Link>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Nav;

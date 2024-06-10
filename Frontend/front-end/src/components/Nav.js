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
      <ul className="bg-[#0b132b] flex justify-around text-[#d6b880]">
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
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">Sign Up</Link>
          )}
        </li>
        <li className="my-4 hover:font-bold hover:underline">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

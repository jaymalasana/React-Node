import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
          <Link to="/logout">Logout</Link>
        </li>
        <li className="my-4 hover:font-bold hover:underline">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="my-4 hover:font-bold hover:underline">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

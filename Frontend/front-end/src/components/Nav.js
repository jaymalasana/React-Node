import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#0b132b]">
      <div className="flex justify-between items-center px-4 sm:px-10 py-3 text-[#d6b880]">
        <li className="font-medium text-xl list-none">J-ADMIN</li>
        <button className="sm:hidden text-[#d6b880]" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className="hidden sm:flex space-x-8">
          {auth ? (
            <>
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
            </>
          ) : (
            <>
              <li className="flex items-center space-x-2 hover:font-bold hover:underline">
                <FaRegUserCircle size={20} />
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="flex items-center space-x-2 hover:font-bold hover:underline">
                <FaRegUserCircle size={20} />
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden flex flex-col items-center px-4 py-3 bg-[#0b132b] text-[#d6b880]`}
      >
        {auth ? (
          <>
            <li className="hover:font-bold hover:underline p-4">
              <Link to="/">Products</Link>
            </li>
            <li className="hover:font-bold hover:underline p-4">
              <Link to="/add">Add Product</Link>
            </li>
            <li className="hover:font-bold hover:underline p-4">
              <Link to="/update">Update Product</Link>
            </li>
            <li className="hover:font-bold hover:underline p-4">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="flex items-center space-x-2 hover:font-bold hover:underline p-4">
              <FaRegUserCircle size={20} />
              <Link onClick={logout} to="/signup">
                Logout({JSON.parse(auth).name})
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="flex items-center space-x-2 hover:font-bold hover:underline p-4">
              <FaRegUserCircle size={20} />
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="flex items-center space-x-2 hover:font-bold hover:underline p-4">
              <FaRegUserCircle size={20} />
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;

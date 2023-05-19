// import React from "react";
// import { IconName } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col justify-around  bg-black h-screen shadow-lg shadow-black">
        <ul className="flex flex-col justify-between h-1/2 m-4 text-gray-400">
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/videos">Videos</Link>
          </li>
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/support">Support</Link>
          </li>
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/achievement">Achievement</Link>
          </li>
          <li className="hover:text-yellow-600 hover:cursor-pointer">
            <Link to="/alumni">Alumni</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
// BsFillArrowRightCircleFill
// BsFillArrowLeftCircleFill

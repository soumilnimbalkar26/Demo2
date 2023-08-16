import React from "react";
import "../index.css";
import PP from "../images/ProfilePicture.jpg";
// import Home from "../Pages/Home";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-5 flex items-center justify-between">
      <span className="flex items-center">
        <img className="object-cover h-11 w-11 mx-4" src={PP} alt="img" />
        <a
          href="#"
          className="font-bold text-gray-50 hover:text-gray-500 duration-500 mx-4"
        >
          PORTFOLIO
        </a>
      </span>

      <ul className="flex items-center">
        <li>
          <a
            href="#"
            className="text-gray-50 hover:text-gray-500 duration-500 mx-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-50 hover:text-gray-500 duration-500 mx-4"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-50 hover:text-gray-500 duration-500 mx-4"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#"
            className="bg-gray-500 hover:bg-gray-50 p-3 rounded text-gray-50 hover:text-gray-700 duration-500 mx-4"
          >
            SignUp
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-gray-500 hover:bg-gray-50 p-3 rounded text-gray-50 hover:text-gray-700 duration-500 mx-4"
          >
            SignIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

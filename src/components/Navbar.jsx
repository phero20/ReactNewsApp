import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import { useState } from "react";
import logo from "../assets/freepik-gradient-news-group-logo-202503021014508DQW.png"; // Import the logo


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("General");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <nav className="bg-white fixed dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center  rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-600">
              NEWS
            </span>
          </Link>
         
          <div className="flex md:order-2  md:space-x-0 rtl:space-x-reverse">
          <div className="ar md:hidden text-blue-600 font-bold text-lg flex justify-center items-center">CATEGORIES <span style={{ fontSize: '1.9rem',paddingBottom:'7px' }}>&rarr;</span></div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 ml-0 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://wwww3org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/general"
                  className={`block py-2 px-3 rounded-sm md:p-0 hover:text-blue-700${
                    selectedLink === "General"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("General")}
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    selectedLink === "Business"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("Business")}
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    selectedLink === "Entertainment"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("Entertainment")}
                >
                  Entertainment
                </Link>
              </li>

              <li>
                <Link
                  to="/health"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    selectedLink === "Health"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("Health")}
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    selectedLink === "Science"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("Science")}
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    selectedLink === "Sports"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("Sports")}
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    selectedLink === "Technology"
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                  onClick={() => handleLinkClick("Technology")}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

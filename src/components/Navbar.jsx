import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/news-report.png"; // Import the logo

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <nav
        className={` fixed ${
          props.dark1
            ? "bg-gray-900 border-gray-600"
            : "bg-white border-gray-200 shadow-2xl shadow-slate-400"
        } w-full z-20 top-0 start-0 border-b  `}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div  className="flex items-center rtl:space-x-reverse">
            <img src={logo} className="h-10" alt="Newss" />
            <span className={`self-center text-2xl font-bold whitespace-nowrap text-blue-600`}>
              NEWS
            </span>
          </div>
          <div className="flex">
            <div className="flex lg:hidden text-blue-600 font-bold text-lg items-center">
              CATEGORIES
              <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 ml-0 justify-center text-sm  rounded-lg lg:hidden text-gray-400 bg-transparent focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-sticky"
          >
            <ul className={`flex flex-col p-4 lg:p-0 mt-4 font-medium border  ${props.dark1 ? 'bg-gray-800 lg:bg-gray-900 border-gray-700 ' :'border-gray-100 rounded-lg lg:bg-white  bg-gray-300' }  lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 `}>
              <li>
                <Link
                  to="/world"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "World"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("World")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/politics"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Politics"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Politics")}
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Education"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Education")}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/crime"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Crime"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Crime")}
                >
                  Crime
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Business"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Business")}
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Entertainment"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Entertainment")}
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Health"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Health")}
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Science"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Science")}
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Sports"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Sports")}
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Technology"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Technology")}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/environment"
                  className={`block py-2 px-3 rounded-sm lg:p-0 ${
                    selectedLink === "Environment"
                      ? "text-white bg-blue-700 lg:bg-transparent  lg:text-blue-500"
                      : `${props.dark1 ? "text-white" : "text-black"}   lg:hover:text-blue-700     border-gray-700`
                  }`}
                  onClick={() => handleLinkClick("Environment")}
                >
                  Environment
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
import React, { Component } from "react";
// import PropTypes from 'prop-types'
import as from "../assets/10237789.jpg";

const Newsitem = (props) => {
    let { title, discription, urlimage, url, author, date,source } = props;
    const placeholderImage = as; // Use the imported image as the placeholder

    return (
      <div className="relative">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-t-lg"
              src={urlimage ? urlimage : placeholderImage}
              alt="news"
            />
            <button
              type="button"
              className="opacity-70 absolute top-2 right-2 inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {source}
            </button>
          </a>
          <div className="p-5">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              {discription}
            </p>
            <p className="font-normal mb-3 text-gray-700 dark:text-gray-300">
              By {author} on {new Date(date).toGMTString()}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
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
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
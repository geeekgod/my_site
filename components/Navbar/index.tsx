import React, { memo } from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="flex justify-around py-6">
        <div className="flex items-center">
          <svg
            className="w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 className="text-2xl font-semibold ml-2">Rishabh Singh</h3>
        </div>
        <ul className="flex items-center font-medium">
          <li className="mx-2">Home</li>
          <li className="mx-2">Projects</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default memo(Navbar);

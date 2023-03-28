import React from "react";
import { Link } from "react-router-dom";
import {FiInfo, FiFolder, FiTool} from "react-icons/fi";

export default function SideNavBar() {
  return (
    <div className="flex flex-col w-60">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        <div className="flex flex-col items-center flex-shrink-0 px-10">
          <Link to="/" className="px-8 text-left focus:outline-none">
            <h2 className="block p-2 text-xl font-bold tracking-tighter text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900">
              iamivy
            </h2>
          </Link>
        </div>
        <div className="flex flex-col flex-grow px-4 mt-5 drop-shadow-lg">
          <nav className="flex-1 space-y-1">
            <ul>
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg hover:bg-gray-50 focus:shadow-outline"
                >
                  <FiInfo className="w-4 h-4" />
                  <span className="ml-4">about</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                >
                  <FiFolder className="w-4 h-4"/>
                  <span className="ml-4">projects</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/technologies"
                  className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                >
                  <FiTool className="w-4 h-4"/>
                  <span className="ml-4">technologies</span>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

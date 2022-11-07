import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
              className="h-7 w-8"
              src="https://act-plumbing.com/files/2021/07/004-water-drop.png"
              alt=""
            />
            <span
              data-aos="fade-up"
              className="ml-3 font-bold font-serif text-blue-200 text-3xl"
            >
              PlumBoy
            </span>
          </Link>
          <nav
            data-aos="fade-right"
            className="md:ml-auto flex flex-wrap items-center text-blue-200 justify-center"
          >
            <Link to={"/"} className="mr-5 font-bold hover:text-rose-600">
              Home
            </Link>
            <Link
              to={"/services"}
              className="mr-5 font-bold hover:text-rose-600"
            >
              Services
            </Link>
            <Link
              to={"/priceing"}
              className="mr-5 font-bold hover:text-rose-600"
            >
              Priceing
            </Link>
            <Link to={"/about"} className="mr-5 font-bold hover:text-rose-600">
              About
            </Link>
            <Link
              to={"/contact"}
              className="mr-5 font-bold hover:text-rose-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

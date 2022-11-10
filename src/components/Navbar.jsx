import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <header className="text-gray-400  w-full bg-black   body-font">
        <div className="container mx-auto   flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex  title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
              className="h-7 w-8"
              src="https://act-plumbing.com/files/2021/07/004-water-drop.png"
              alt=""
            />
            <span
              data-aos="fade-up"
              className=" font-bold font-serif text-blue-200 text-3xl"
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

            {user?.uid ? (
              <Link
                to={"/myReview"}
                className="mr-5 font-bold hover:text-rose-600"
              >
                My reviews
              </Link>
            ) : (
              <></>
            )}

            <Link
              to={"/contact"}
              className="mr-5 font-bold hover:text-rose-600"
            >
              Contact
            </Link>
            <Link to={"/blogs"} className="mr-5 font-bold hover:text-rose-600">
              Blogs
            </Link>

            {user?.uid ? (
              <Link
                to={"/addService"}
                className="mr-5 font-bold hover:text-rose-600"
              >
                Add Service
              </Link>
            ) : (
              <></>
            )}

            {user?.uid ? (
              <button
                onClick={handleLogOut}
                className="group relative ml-3 inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-500"></span>

                <span className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
                  Sign Out
                </span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signIn"}
                  className="inline-block mr-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                >
                  <span className="block rounded-full bg-black px-5 py-3 text-sm font-medium hover:bg-transparent">
                    Sign In
                  </span>
                </Link>

                <Link
                  to={"/signUp"}
                  className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                >
                  <span className="block rounded-full bg-black px-5 py-3 text-sm font-medium hover:bg-transparent">
                    Sign Up
                  </span>
                </Link>
              </>
            )}

            {user?.uid ? (
              <img
                src={user.photoURL}
                className="rounded-full mx-5 w-10 shadow-lg"
                alt="Avatar"
              />
            ) : (
              <></>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

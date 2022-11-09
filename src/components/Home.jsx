import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Feature from "./Feature";

const Home = () => {
  return (
    <div>
      <section className="bg-white  dark:text-gray-500">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="container  flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        >
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="text-3xl font-serif font-bold leading-none sm:text-6xl"
            >
              <span className="text-rose-800">Professional </span>
              plumbing service for your
              <span className="dark:text-violet-400"> Home</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12"></p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to={"/services"}
                className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                <span className="relative text-lg font-semibold text-indigo-600 transition-colors group-hover:text-white">
                  Need Help
                </span>
              </Link>

              <Link
                to={"/about"}
                className="group relative inline-block overflow-hidden border border-yellow-600 px-8 py-3 focus:outline-none focus:ring"
              >
                <span className="absolute inset-y-0 right-0 w-[2px] bg-yellow-600 transition-all group-hover:w-full group-active:bg-yellow-500"></span>

                <span className="relative text-lg font-semibold text-yellow-600 transition-colors group-hover:text-white">
                  About Us
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://img.freepik.com/free-vector/plumbing-service-advertising-banner-repairman-uniform-standing-with-wrench-hand-tools-box-near-sink_575670-1705.jpg?w=826&t=st=1667847563~exp=1667848163~hmac=cc27e2165e5d48fd0597df17311a59f8ce55c54bb2c8a580719fca5c2b49645c"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <About></About>
      <Feature></Feature>
    </div>
  );
};

export default Home;

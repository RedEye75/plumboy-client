import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="w-full max-w-md mt-28  p-8 space-y-3 rounded-xl mx-auto dark:text-gray-100">
        <h1 className="text-2xl font-bold text-black text-center">Sign In</h1>
        <form
          data-aos="fade-up"
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="email"
              id="username"
              placeholder="Email"
              data-aos="fade-right"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-200 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              data-aos="fade-left"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 dark:text-black focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-md font-semibold dark:text-red-800">
              <Link>Forgot Password?</Link>
            </div>
          </div>
          {/* <button className="block w-64 mx-auto p-3 text-center  text-md font-semibold rounded-md dark:text-gray-900 dark:bg-green-600">
            Sign in
          </button> */}
          <Link
            to={"/signIn"}
            className="inline-block mr-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          >
            <span className="block rounded-full text-black bg-blue-200 px-16 py-3 text-sm font-medium hover:bg-transparent">
              Sign In
            </span>
          </Link>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div
            data-aos="fade-left"
            className="flex-1 h-px sm:w-16 dark:bg-gray-700"
          ></div>
          <p data-aos="fade-left" className="px-3 text-md dark:text-gray-800">
            Login with social accounts
          </p>
          <div
            data-aos="fade-left"
            className="flex-1 h-px sm:w-16 dark:bg-gray-700"
          ></div>
        </div>
        <div data-aos="zoom-in-up" className="flex  justify-center space-x-4">
          <Link
            className="inline-flex gap-3 items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
            href="/github"
            target="_blank"
            rel="noreferrer"
          >
            Google
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5     h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </Link>

          <Link
            className="inline-flex items-center rounded border-2 border-[#55acee] bg-[#55acee] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75"
            href="/twitter"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </Link>

          <Link
            className="inline-flex items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
            href="/github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <p className=" text-center sm:px-6 text-md dark:text-gray-800">
          Don't have an account?
          <Link to={"/signUp"} className=" font-bold dark:text-blue-800">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, ProviderLogin } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className=" ">
      <div className="w-full  p-8  space-y-3 rounded-xl mx-auto dark:text-gray-100">
        <h1
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="text-2xl font-bold text-black text-center"
        >
          Sign Up
        </h1>

        <div className="flex  justify-center gap-5">
          <div>
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              className="h-96"
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=740&t=st=1667980946~exp=1667981546~hmac=c0835164818eec533497d06755d7e586cc70731924dc9e17efa4287314def960"
              alt=""
            />
          </div>

          <div>
            <form
              onSubmit={handleSignUp}
              data-aos="fade-left"
              data-aos-duration="3000"
              novalidate=""
              className="space-y-6 mt-5 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  data-aos="fade-right"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-pink-200 text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="image"
                  id="username"
                  placeholder="image"
                  data-aos="fade-right"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-blue-200 text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="email"
                  id="username"
                  placeholder="Email"
                  data-aos="fade-right"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-pink-200 text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  data-aos="fade-left"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-blue-200 dark:text-black focus:dark:border-violet-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <p className=" text-center sm:px-6 text-md dark:text-gray-800">
                  Already have an account? <br />
                  <Link
                    to={"/signIn"}
                    className=" font-bold dark:text-blue-800"
                  >
                    {" "}
                    Sign In
                  </Link>
                </p>

                <input
                  className="mx-auto inline-flex gap-3 items-center rounded-full border-2 border-pink-500 bg-pink-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75 "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div
                data-aos="fade-left"
                className="flex-1 h-px sm:w-16 dark:bg-gray-700"
              ></div>
              <p
                data-aos="fade-left"
                className="px-3 text-md dark:text-gray-800"
              >
                Sign Up with social accounts
              </p>
              <div
                data-aos="fade-left"
                className="flex-1 h-px sm:w-16 dark:bg-gray-700"
              ></div>
            </div>
            <div className="flex  justify-center space-x-4">
              <button
                className="inline-flex gap-3 mt-3 items-center rounded-full border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
                onClick={googleSignIn}
              >
                Google{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5     h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

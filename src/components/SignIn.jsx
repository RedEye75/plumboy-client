import React, { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useSetTitle from "../hooks/useSetTitle";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useSetTitle("SignIn");
  const from = location.state?.from?.pathname || "/";

  const handaleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        form.reset();
        // get jwt token
        fetch(
          "https://assignment-11-server-seven-lilac.vercel.app/jwt",

          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("plumToken", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="">
      <section className=" lg:flex  justify-center ">
        <div className="w-full mt-12 px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="mx-auto max-w-lg text-center"
          >
            <h1 className="text-2xl font-bold sm:text-3xl">Please Sign In</h1>

            <p className="mt-4 text-gray-500">
              Please sign in for explore our services...!!
            </p>
          </div>

          <form
            data-aos="fade-right"
            data-aos-duration="3000"
            onSubmit={handaleSignIn}
            action=""
            className="mx-auto mt-8 mb-0 max-w-lg space-y-4"
          >
            <div>
              <label for="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg bg-blue-200 border-black p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>

            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full  bg-blue-200 rounded-lg border-black p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-500">
                No account ?
                <Link
                  to={"/signUp"}
                  className="font-bold hover:underline text-lime-800 "
                >
                  {" "}
                  Sign up
                </Link>
              </p>

              <input
                className="mx-auto inline-flex gap-3 items-center rounded-full border-2 border-blue-500 bg-blue-500 px-8 py-3 font-bold  text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <img
            alt="Welcome"
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1667978979~exp=1667979579~hmac=1fa79fec277840d52e989a46116a578d2607f7b649711c941885c57a25a7a9b1"
            className=" inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default SignIn;

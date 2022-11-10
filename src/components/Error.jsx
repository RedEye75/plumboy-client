import React from "react";
import { Link } from "react-router-dom";
import useSetTitle from "../hooks/useSetTitle";

const Error = () => {
  useSetTitle("Error");
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid h-screen place-content-center bg-white"
      >
        <img
          className="h-96"
          src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
          alt=""
        />

        <Link
          to={"/"}
          className=" inline-flex text-center -mt-3 mx-auto rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
        >
          Go Back Home
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Error;

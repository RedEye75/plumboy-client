import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, _id, price, img, description } = service;
  return (
    <div>
      <div data-aos="fade-up" className="flex max-w-screen-xl   justify-center">
        <div className="rounded-lg border  bg-blue-200 ">
          <a href="#!">
            <img className=" h-48 w-full" src={img} alt="" />
          </a>
          <div className="p-6">
            <h5
              data-aos="fade-down"
              className="text-gray-900 text-xl font-bold mb-2"
            >
              {title}
            </h5>
            <>
              {description.length > 100 ? (
                <p>{description.slice(0, 100) + "..."}</p>
              ) : (
                <p>{description}</p>
              )}
            </>
            <div className="flex justify-between">
              <p
                className="text-rose-800 uppercase text-1xl font-bold mt-3"
                data-aos="fade-left"
              >
                price : {price}
              </p>

              <Link
                to={`/reviews/${_id}`}
                data-aos="fade-right"
                className="group relative inline-block focus:outline-none focus:ring"
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                  <button>View Details</button>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

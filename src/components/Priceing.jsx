import React from "react";
import { Link } from "react-router-dom";
// react hot tooster
import toast, { Toaster } from "react-hot-toast";
import useSetTitle from "../hooks/useSetTitle";
const notify = () => toast.success("Your Request successfully added!");

const Priceing = () => {
  useSetTitle("priceing");
  return (
    <div>
      <section className="text-gray-400 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="flex flex-col text-center w-full mb-20"
          >
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-black">
              Pricing
            </h1>
            <p className="lg:w-2/3  mx-auto font-semibold text-black">
              We develop standarts. We certify professionals. We deliver premium
              services.
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead data-aos="fade-down" data-aos-duration="3000">
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                    Services
                  </th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody className="text-black text-lg font-semibold">
                <tr data-aos="fade-right" data-aos-duration="3000">
                  <td className="px-4   py-3">Plumbing Installation</td>

                  <td className="px-4 py-3 text-lg ">$68</td>
                  <td className="w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr data-aos="fade-right" data-aos-duration="3000">
                  <td className="border-t-2 border-gray-800 px-4 py-3">
                    Commercial Service
                  </td>

                  <td className="border-t-2 border-gray-800 px-4 py-3 text-lg ">
                    $64
                  </td>
                  <td className="border-t-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr data-aos="fade-right" data-aos-duration="3000">
                  <td className="border-t-2 border-gray-800 px-4 py-3">
                    Residential Service
                  </td>

                  <td className="border-t-2 border-gray-800 px-4 py-3 text-lg ">
                    $50
                  </td>
                  <td className="border-t-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr data-aos="fade-right" data-aos-duration="3000">
                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                    Water Heater Repair
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr data-aos="fade-right" data-aos-duration="3000">
                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                    Emergency Services
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg">
                    $102
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr data-aos="fade-right" data-aos-duration="3000">
                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                    Pipe Replacement
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg">
                    $92
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="mx-auto mt-3"
          >
            <Link className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

              <span
                onClick={notify}
                className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
              >
                Request Service
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default Priceing;

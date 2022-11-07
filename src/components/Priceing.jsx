import React from "react";
import { Link } from "react-router-dom";

const Priceing = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            data-aos="zoom-in"
            className="flex flex-col text-center w-full mb-20"
          >
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            className="lg:w-2/3 w-full mx-auto overflow-auto"
          >
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
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
              <tbody>
                <tr>
                  <td className="px-4 py-3">Plumbing</td>

                  <td className="px-4 py-3 text-lg text-white">$68</td>
                  <td className="w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-800 px-4 py-3">
                    Commercial
                  </td>

                  <td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                    $64
                  </td>
                  <td className="border-t-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-800 px-4 py-3">
                    Residential
                  </td>

                  <td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                    $50
                  </td>
                  <td className="border-t-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                    Repair
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                    Emergency
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">
                    $102
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                    Installation
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">
                    $92
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-3">
            <Link className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

              <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                Request Service
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Priceing;

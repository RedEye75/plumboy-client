import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceReviews from "./ServiceReviews";

const Reviews = () => {
  const { title, _id, price, img, description } = useLoaderData();
  const serviceDetails = {
    serviceId: _id,
    serviceName: title,
  };
  return (
    <div data-aos="fade-up">
      <article className="overflow-hidden my-20  w-96 mx-auto shadow transition hover:shadow-lg">
        <img alt="Office" src={img} className="object-cover" />

        <div className=" bg-blue-100 p-4 sm:p-6">
          <Link className="flex  justify-between">
            <h3 className="mt-0.5 text-lg font-bold text-cyan-900">{title}</h3>
            <p className="mt-0.5 text-lg font-bold text-orange-500">
              Price : {price}
            </p>
          </Link>

          <p className="mt-2 text-start font-semibold text-sm leading-relaxed text-gray-500 ">
            {description}
          </p>
        </div>
      </article>
      <ServiceReviews data={serviceDetails}></ServiceReviews>
    </div>
  );
};

export default Reviews;

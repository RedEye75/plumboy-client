import React from "react";
import useSetTitle from "../hooks/useSetTitle";

const UserFeedbacks = ({ feedback, updateReview, deleteReview }) => {
  useSetTitle("UserFeedbacks");
  const { reviewText, customer, _id, image, serviceName } = feedback;

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="p-6 border border-black rounded-lg"
      >
        <img
          className="object-cover object-center w-full mb-3 lg:h-3/4 md:h-36 rounded-xl"
          src={image}
          alt="blog"
        />
        <h2 className="mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          {customer}
        </h2>
        <h1 className="mx-auto mb-5 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {serviceName}
        </h1>
        <p className="mx-auto text-start font-medium leading-relaxed text-green-500">
          {reviewText}
        </p>
        <button
          onClick={() => updateReview(_id)}
          className="inline-block mr-3 mt-3 rounded-full  border-2 border-black  focus:outline-none focus:ring text-black"
        >
          <span className="block rounded-full hover:bg-white px-5 py-3 text-sm font-medium bg-green-500">
            Update
          </span>
        </button>
        <button
          onClick={() => deleteReview(_id)}
          className="inline-block mr-3 rounded-full border-2 border-black  focus:outline-none focus:ring text-black"
        >
          <span className="block rounded-full hover:bg-white px-5 py-3 text-sm font-medium bg-red-500">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserFeedbacks;

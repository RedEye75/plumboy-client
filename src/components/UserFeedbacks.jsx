import React from "react";

const UserFeedbacks = ({ feedback, updateReview, deleteReview }) => {
  const { reviewText, customer, _id, image, serviceName } = feedback;

  return (
    <div>
      {/* <div className="p-2   w-full">
        <div className="h-full grid grid-cols-3   gap-2 items-center border-black border p-4 rounded-lg">
          <div>
            <img
              alt="team"
              className="w-16  h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
              src={image}
            />
            <p>{customer}</p>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">{serviceName}</h2>
            <p className="text-gray-500">{reviewText}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => updateReview(_id)}
              className="inline-block mr-3 rounded-full  border-2 border-black  focus:outline-none focus:ring text-black"
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
      </div> */}
      {/* <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"> */}
      {/* <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3"> */}
      <div className="p-6 border border-black rounded-lg">
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

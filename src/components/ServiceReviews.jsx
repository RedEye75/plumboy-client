import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const ServiceReviews = ({ data }) => {
  const { user } = useContext(AuthContext);
  const { serviceName, serviceId } = data;

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = `${form.name.value}`;
    const image = form.image.value;
    const email = user?.email || "notRegistered";
    const reviewText = form.review.value;

    const review = {
      service: serviceId,
      serviceName,
      customer: username,
      image,
      email,
      reviewText,
    };
    console.log(review);
  };

  return (
    <div className="flex">
      <div data-aos="fade-left">
        <img
          className="h-96"
          src="https://img.freepik.com/free-vector/customer-survey-concept-illustration_114360-558.jpg?w=1060&t=st=1667978327~exp=1667978927~hmac=01475b941a68b84c093b767f66f2fa3eeeb494dce19667c62623cb764f63913a"
          alt=""
        />
      </div>

      <div data-aos="fade-right" className="mt-5 ">
        <h1
          data-aos="fade-up"
          className="text-3xl font-serif font-bold text-orange-500"
        >
          Give us motivation sir..
        </h1>

        <form onSubmit={handleReview}>
          <div className="flex justify-center  m-5 ">
            <div className="w-80">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 dark:text-gray-100 focus:dark:border-violet-400"
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div className="flex justify-center m-5 ">
            <div className="w-80">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 dark:text-gray-100 focus:dark:border-violet-400"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="flex justify-center m-5">
            <div className="w-80 text-sm">
              <input
                type="text"
                name="image"
                id="username"
                placeholder="image"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>

          <div className="flex justify-center m-5">
            <div className="w-80">
              <textarea
                name="review"
                id="bio"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 dark:text-gray-100 focus:dark:border-violet-400"
                rows="3"
                required
                placeholder="Enter brief about our service"
              ></textarea>
            </div>
          </div>
          <input
            className="mx-auto mr-3 rounded-full 
            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]
             hover:text-white focus:outline-none focus:ring active:text-opacity-75
               text-black bg-blue-200 px-16 py-3 text-sm font-medium hover:bg-transparent"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ServiceReviews;

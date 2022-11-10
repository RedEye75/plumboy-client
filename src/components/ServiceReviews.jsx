import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useSetTitle from "../hooks/useSetTitle";

const ServiceReviews = ({ data }) => {
  useSetTitle("ServiceReviews");
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

    fetch("http://localhost:7000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("plumToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          // alert("Thanks for your feedback");
          toast("Thanks for your feedback!", {
            icon: "💙",
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:flex">
      <div data-aos="fade-left" data-aos-duration="3000">
        <img
          className="h-96"
          src="https://img.freepik.com/free-vector/customer-survey-concept-illustration_114360-558.jpg?w=1060&t=st=1667978327~exp=1667978927~hmac=01475b941a68b84c093b767f66f2fa3eeeb494dce19667c62623cb764f63913a"
          alt=""
        />
      </div>

      <div data-aos="fade-right" data-aos-duration="3000" className="mt-5 ">
        <h1
          data-aos="fade-up"
          className="text-3xl font-serif font-bold text-orange-500"
        >
          Share Your Using Experience ❤️
        </h1>

        <form onSubmit={handleReview}>
          <div className="flex justify-center  m-5 ">
            <div className="w-80">
              <input
                type="text"
                defaultValue={user?.name}
                name="name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 text-black focus:dark:border-violet-400"
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
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 text-black focus:dark:border-violet-400"
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
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 text-black focus:dark:border-violet-400"
              />
            </div>
          </div>

          <div className="flex justify-center m-5">
            <div className="w-80">
              <textarea
                name="review"
                id="bio"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-cyan-200 dark:text-black focus:dark:border-violet-400"
                rows="3"
                required
                placeholder="Enter brief about our service"
              ></textarea>
            </div>
          </div>
          <input
            className="mx-auto inline-flex gap-3 items-center mb-5 border-black rounded-md border bg-green-500 px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75 "
            type="submit"
            value="Submit"
          />
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default ServiceReviews;

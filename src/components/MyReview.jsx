import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserFeedbacks from "./UserFeedbacks";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState({});
  useEffect(() => {
    fetch(`http://localhost:7000/myFeedback?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, [user?.email]);
  // review update
  const updateReview = (id) => {
    fetch(`http://localhost:7000/myFeedback/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    if (data.modifiedCount > 0) {
      const restReview = feedbacks.filter((feedback) => feedback._id !== id);
      const approving = feedbacks.find((feedback) => feedback._id === id);
      const newFeedback = { ...restReview, approving };
      setFeedbacks(newFeedback);
    }
  };

  // review delete
  const deleteReview = (id) => {
    const proceed = window.confirm("Are you sure ??");
    if (proceed) {
      fetch(`http://localhost:7000/myFeedback/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount) {
            alert("Your review deleted Successfully");
            const restReview = feedbacks.filter(
              (feedback) => feedback._id !== id
            );
            setFeedbacks(restReview);
          }
        });
    }
  };

  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="sm:text-3xl text-2xl font-bold title-font mb-4 text-blue-400"
            >
              Feedback = {feedbacks.length}
            </h1>
          </div>
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1"> */}
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            {feedbacks?.length &&
              feedbacks.map((feedback) => (
                <UserFeedbacks
                  key={feedback._id}
                  feedback={feedback}
                  updateReview={updateReview}
                  deleteReview={deleteReview}
                ></UserFeedbacks>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReview;

import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserFeedbacks from "./UserFeedbacks";
import toast, { Toaster } from "react-hot-toast";
import useSetTitle from "../hooks/useSetTitle";

const MyReview = () => {
  useSetTitle("MyReview");
  const { user, logOut } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState({});

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(
      `https://assignment-11-server-seven-lilac.vercel.app/myFeedback?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("plumToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setFeedbacks(data);
      });
  }, [user?.email, logOut]);

  // review update
  const updateReview = (id) => {
    fetch(
      `https://assignment-11-server-seven-lilac.vercel.app/myFeedback/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("plumToken")}`,
        },
        body: JSON.stringify({}),
      }
    )
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
      fetch(
        `https://assignment-11-server-seven-lilac.vercel.app/myFeedback/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("plumToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount) {
            // alert("Your review deleted Successfully");
            toast.success("Your review deleted Successfully!");
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
              className="sm:text-3xl text-2xl font-bold title-font mb-4 border-b text-blue-400"
            >
              My Reviews
            </h1>
          </div>
          {!feedbacks?.length ? (
            <h2
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-3xl font-bold text-red-500"
            >
              No reviews were added
            </h2>
          ) : (
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
          )}
        </div>
      </section>{" "}
      <Toaster />
    </div>
  );
};

export default MyReview;

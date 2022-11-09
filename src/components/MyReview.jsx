import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import UserFeedbacks from "./UserFeedbacks";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState({});
  useEffect(() => {
    fetch(`http://localhost:7000/myFeedback?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, [user?.email]);
  console.log(feedbacks);
  return (
    <div>
      <h2>{feedbacks.length}</h2>

      {/* <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            {feedbacks.map((feedback) => (
              <UserFeedbacks
                key={feedback._id}
                feedback={feedback}
              ></UserFeedbacks>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default MyReview;

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useSetTitle from "../hooks/useSetTitle";

const AddService = () => {
  useSetTitle("AddService");
  const addService = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const bio = form.description.value;

    const service = {
      title: name,
      img: image,
      price,
      description: bio,
    };
    // console.log(service);
    fetch("http://localhost:7000/serviceAdd", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("plumToken")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast("Service added!", {
            icon: "🤞",
          });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <h2
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="text-4xl font-bold font-serif text-cyan-500"
          >
            Add a Service
          </h2>
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                required
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className=" rounded-lg  mx-auto  max-w-md"
            >
              <form onSubmit={addService}>
                <div className="form-group mb-3">
                  {" "}
                  <input
                    type="text"
                    name="image"
                    id="username"
                    required
                    placeholder="Service image"
                    //   data-aos="fade-right"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-fuchsia-100 text-black focus:dark:border-violet-400"
                  />
                  <input
                    type="text"
                    name="name"
                    className="w-full mt-3 px-4 py-3 rounded-md dark:border-gray-700 bg-fuchsia-100 text-black focus:dark:border-violet-400"
                    id="exampleInput7"
                    required
                    placeholder="Service Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="price"
                    required
                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-fuchsia-100 text-black focus:dark:border-violet-400"
                    id="exampleInput8"
                    placeholder="Service cost"
                  />
                </div>
                <div className="form-group  mb-6">
                  <textarea
                    name="description"
                    required
                    className="
        form-control
        block
        w-full
        px-3
        bg-fuchsia-100
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-clip-padding
        border border-black 
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Service description"
                  ></textarea>
                </div>

                <input
                  className="mx-auto inline-flex gap-3 items-center mb-5 border-black rounded-md border bg-fuchsia-500 px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75 "
                  type="submit"
                  value="Submit"
                />
                {/* <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button> */}
              </form>
            </div>{" "}
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default AddService;

import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full  sm:p-4 px-4 mb-6">
              <h1
                data-aos="fade-right"
                data-aos-duration="3000"
                className="title-font overflow-hidden font-bold text-xl mb-2 uppercase font-serif text-start text-rose-900"
              >
                Best Plumbing services for you
              </h1>
              <div
                data-aos="zoom-out"
                data-aos-duration="3000"
                className="font-semibold text-start"
              >
                <p className="overflow-hidden">
                  The highly experienced plumber are here to help. Locally owned
                  and operated, we offer top-notch repair, installation and
                  maintenance services to home and business . With over 25 years
                  of experience in the industry, you can count on our skilled
                  technicians to provide the superior plumbing results you need.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="p-4 sm:w-1/2 lg:w-1/4 w-1/2"
            >
              <h2 className="title-font font-medium text-3xl text-gray-900">
                577K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="p-4 sm:w-1/2 lg:w-1/4 w-1/2"
            >
              <h2 className="title-font font-medium text-3xl text-gray-900">
                358K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="p-4 sm:w-1/2 lg:w-1/4 w-1/2"
            >
              <h2 className="title-font font-medium text-3xl text-gray-900">
                75
              </h2>
              <p className="leading-relaxed">Enginner</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="p-4 sm:w-1/2 lg:w-1/4 w-1/2"
            >
              <h2 className="title-font font-medium text-3xl text-gray-900">
                700
              </h2>
              <p className="leading-relaxed">Worker</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
          >
            <img
              className="object-cover object-center w-full h-full"
              src="https://img.freepik.com/free-vector/plumber-working-logo-force-plumbing-label-set-template-logo-plumbing-works_1284-51615.jpg?w=1060&t=st=1667855883~exp=1667856483~hmac=930193145d22a04931c94490a41d3d1c2029ce43941c6f79c81fee9e4228649c"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl gap-3 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <Link
        to={""}
        data-aos="fade-up"
        className="group relative inline-block overflow-hidden border border-orange-600 px-8 py-3 focus:outline-none focus:ring"
      >
        <span className="absolute inset-y-0 right-0 w-[2px] bg-orange-600 transition-all group-hover:w-full group-active:bg-orange-500"></span>

        <span className="relative text-lg font-semibold text-orange-600 transition-colors group-hover:text-white">
          Find out more
        </span>
      </Link>
    </div>
  );
};

export default Services;

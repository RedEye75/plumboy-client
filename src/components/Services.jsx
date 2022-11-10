import React, { useEffect, useState } from "react";
import useSetTitle from "../hooks/useSetTitle";
import Service from "./Service";

const Services = () => {
  useSetTitle("Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-seven-lilac.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import ser1 from "../../assets/ser-1.png";
import ser2 from "../../assets/ser-2.png";
import ser3 from "../../assets/ser-3.jpg";
 

// Service data
const sercise = [
  {
    name: "Lorem Ipsum",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    image: ser1,
  },
  {
    name: "Lorem Ipsum",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    image: ser2,
  },
  {
    name: "Lorem Ipsum",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    image: ser3,
  },
];

const Services = () => {
  return (
    <div className="services-container max-w-6xl mx-auto px-6  py-10 bg-gray-50 text-center">
      {/* Heading */}
      <h2 class="services-title">
    Services <span></span>
  </h2>

      {/* Cards Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4 mt-14">
        {sercise.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl text-left font-bold mb-2 text-[#324473]">
                {service.name}
              </h3>
              <p className="text-gray-600  text-left ">{service.des}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-10 py-3 rounded-full shadow-lg hover:bg-blue-600 transition">
          Help Me
        </button>
      </div>
    </div>
  );
};

export default Services;

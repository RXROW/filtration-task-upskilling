import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Courtney Henry",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    id: 2,
    name: "Courtney Henry",
    image: "https://randomuser.me/api/portraits/women/73.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    id: 3,
    name: "Courtney Henry",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    id: 4,
    name: "Courtney Henry",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
];

const Testymonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
       {/* Heading */}
       <h2 class="services-title flex items-center justify-center">
       Testimonials<span></span>
  </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl   border border-blue-300 flex items-start space-x-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-600">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{testimonial.text}</p>
                <div className="flex mt-3">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-500 text-lg">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testymonials;

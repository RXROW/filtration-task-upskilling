import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import ContactFrom from "./ContactFrom";

const ContactUs = () => {
  return (
    <section className="py-12  flex justify-center items-center">
      <div className="max-w-4xl w-full px-6">
        {/* Section Title */}
   
          <h2 class="services-title flex items-center justify-center">
          Contact<span></span>
  </h2>

        {/* Contact Form & Info Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
       <ContactFrom/>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-gray-700">
              <FaEnvelope className="text-blue-500 text-lg" />
              <span>upskilling.eg1@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <FaPhone className="text-blue-500 text-lg" />
              <span>+20 115 493 2137</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

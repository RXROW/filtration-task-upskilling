import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    console.log({formData})
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "" }); // Clear form
      } else {
        setMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setMessage("Error sending message. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="p-3 rounded-full bg-[#CEDCFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="p-3 rounded-full bg-[#CEDCFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="p-3 rounded-full bg-[#CEDCFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="mt-3 w-fit mx-auto border border-blue-500 text-blue-500 rounded-full py-2 px-6 transition hover:bg-blue-500 hover:text-white"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {message && <p className="text-center text-sm text-gray-600">{message}</p>}
    </form>
  );
};

export default ContactForm;

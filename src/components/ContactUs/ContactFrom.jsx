import React, { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    if (!formData.name || !formData.email || !formData.phone) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://reqres.in/api/users", { // this free api to test this api (http://upskilling-egypt.com:3001/contact) not work 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(`Success! User ${data.id} added.`);
        setFormData({ name: "", email: "", phone: "" });  
      } else {
        setError("Failed to send message. Try again.");
      }
    } catch (error) {
      setError("Error sending message. Check your connection.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col space-y-4 p-4 border rounded-lg" onSubmit={handleSubmit}>
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
      {message && <p className="text-center text-green-600">{message}</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
    </form>
  );
};

export default ContactForm;

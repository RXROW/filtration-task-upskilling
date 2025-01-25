import axios from "axios";

export const submitContactForm = async (formData) => {
  const response = await axios.post("https://upskilling-egypt.com:3001/contact", formData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;  
};

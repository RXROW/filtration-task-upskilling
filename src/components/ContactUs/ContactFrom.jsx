import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validationSchema from "../../utils/validationSchema";
import { submitContactForm } from "../../utils/api";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const response = await submitContactForm(values);
      setMessage(`Success! ${response.message}`);
      resetForm();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col space-y-4 p-4 border rounded-lg">
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 rounded-full bg-[#CEDCFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-full bg-[#CEDCFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />

          <Field
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-3 rounded-full bg-[#CEDCFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />

          <button
            type="submit"
            className="mt-3 w-fit mx-auto border border-blue-500 text-blue-500 rounded-full py-2 px-6 transition hover:bg-blue-500 hover:text-white"
            disabled={isSubmitting || loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {message && <p className="text-center text-green-600">{message}</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

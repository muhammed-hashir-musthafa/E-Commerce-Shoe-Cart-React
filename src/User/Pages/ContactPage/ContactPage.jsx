import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactPage = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid Email Format")
      .matches(
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/,
        "Invalid Email Format"
      )
      .required("Email is required"),
    message: yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm, setErrors }) => {
    const Service_ID = "service_b7da4vk";
    const Template_ID = "template_9k45awi";
    const Public_Key = "KbEoyyGB8xIbYh60w";

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(Service_ID, Template_ID, templateParams, Public_Key)
      .then((res) => {
        toast.success("Form submitted succesfully");
        resetForm();
      })
      .catch((err) => toast.error("something went wrong", err));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Head Office</h3>
          <p className="text-gray-700 mt-1">Shop No. 46</p>
          <p className="text-gray-700">S.M Street, Calicut</p>
          <p className="text-gray-700">Email: contact@kazpix.com</p>
          <p className="text-gray-700">Phone: (+91) 8606 9293 24</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Branch Office 1</h3>
          <p className="text-gray-700 mt-1">U-Square Koyilandi</p>
          <p className="text-gray-700">Kannur Road, Koyilandi</p>
          <p className="text-gray-700">Email: contact@kazpix.com</p>
          <p className="text-gray-700">Phone: (+91) 8606 9293 24</p>
        </div>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 mt-6">
              <h3 className="text-2xl font-semibold">Send Us Your Feedback</h3>
              <div>
                <label className="block text-gray-700">Name</label>
                <Field
                  name="name"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component={"div"}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your email"
                />
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                  placeholder="Your Message"
                />
                <ErrorMessage
                  name="message"
                  component={"div"}
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactPage;

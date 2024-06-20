import React from 'react';

const ContactPage = () => {
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
        <form className="space-y-4 mt-6">
          <h3 className="text-2xl font-semibold">Send Us Your Feedback</h3>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

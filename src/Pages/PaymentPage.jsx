import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-lg mx-auto p-6 my-24 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Card Holder Name</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Name as in Card"
          />
        </div>
        <div>
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="MM / YY"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium">cvv</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="123"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;

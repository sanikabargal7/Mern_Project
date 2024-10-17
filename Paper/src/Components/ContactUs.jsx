import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        We’d love to hear from you! Please fill out the form below.
      </p>
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

// ...existing code...
import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch(
        "https://tokura-cnb7bfe0cvh9ccer.canadacentral-01.azurewebsites.net/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        console.error("Failed to send enquiry:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Network error sending enquiry:", err);
    }
  };

  return (
    <div className="min-h-full flex flex-col">
      {/* Banner */}
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/olaniyitomilola/image/upload/v1750589955/olan/3b55b681-33e5-463b-b86a-b3f94ca881a0_2_pkfpdw.jpg')",
        }}
        aria-label="Contact page banner"
      ></div>

      {/* Form */}
      <div className="flex-grow flex items-center justify-center p-6 bg-gray-50">
        <div className="max-w-lg w-full bg-white shadow-md rounded-md px-6 py-10 mt-6">
          <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
          {submitted ? (
            <p className="text-center text-green-600 font-medium">
              Thank you for contacting us!
            </p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message:</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white shadow-md mx-auto rounded-md p-6 mt-6 text-black">
        <ul className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-800">
          <li className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <a href="mailto:info@olanphotography.com" className="hover:underline">
              info@olanphotography.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 01-12 0 6 6 0 0112 0z" />
              <path d="M2 18h20" />
              <path d="M7 18v4h10v-4" />
            </svg>
            <a
              href="https://instagram.com/o.lanphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @o.lanphotography
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 13.05 13.05 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13.05 13.05 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a href="tel:+447867315894" className="hover:underline">
              0782566309
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
// ...existing code...
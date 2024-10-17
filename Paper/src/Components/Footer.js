import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const Footer = () => {

    const links1 = ["Home", "About Us", "Services", "Contact", "Blog"];
  const links2 = [
    "Privacy Policy",
    "Terms of Service",
    "FAQ",
    "Support",
    "Careers",
  ];
  const links3 = ["Testimonials", "Gallery", "Events", "News", "Team"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     {/* footer */}
     <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">We Accept</h3>
              <p>🔒 Secure Payments</p>
              <p>✔️ Major Credit Cards</p>
            </div>

            {/* Column 2 */}
            <div>
              <ul>
                {links1.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul>
                {links2.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <ul>
                {links3.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-gray-400">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="hidden md:flex space-x-4">
              {["Home", "About", "Services", "Blog", "Contact"].map((page) => (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  className="hover:text-gray-300"
                >
                  {page}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-4 py-2">
                {["Home", "About", "Services", "Blog", "Contact"].map(
                  (page) => (
                    <Link
                      key={page}
                      to={`/${page.toLowerCase()}`}
                      className="block py-2 hover:text-gray-300"
                    >
                      {page}
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

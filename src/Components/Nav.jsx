import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Road2TechMain from '../Images/Road2TechMain.jpg';

export const Nav = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsMenuOpen(false); // Close the menu when opening search
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSearchOpen(false); // Close search when opening menu
    };

    return (
        <>
            {/* Top Header */}
            <header className="bg-black text-white p-1 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Side: Contact Info and Social Icons */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm">
                            <span className="mr-4">123-456-7890</span>
                            <span>info@example.com</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Navigation Links */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-gray-400 text-sm">Franchies</Link>
                        <Link to="/about" className="hover:text-gray-400 text-sm">Carrear</Link>
                        <Link to="/services" className="hover:text-gray-400 text-sm">Technologies</Link>
                        <Link to="/carreer" className="hover:text-gray-400 text-sm">Privacy Policy</Link>
                        <Link to="/contact" className="hover:text-gray-400 text-sm">Sitemap</Link>
                    </nav>
                    
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <FontAwesomeIcon icon={faBars} className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Navbar */}
            <div className="bg-white text-gray p-1 sticky top-6 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo and Name */}
                    <div className="flex items-center">
                        <img src={Road2TechMain} alt="Logo" className="h-16 mr-4" />
                    </div>

                    {/* Navigation and Search */}
                    <div className="hidden md:flex items-center space-x-6 mr-12">
                        {!isSearchOpen && (
                            <>
                                <nav className="space-x-4 mr-4">
                                    {/* {['Home', 'About Us', 'Technologies', 'Services', 'Phd Guide', 'IEEE Project', 'Carrer', 'Franchise', 'Contact Us'].map((page) => (
                                        <Link key={page} to={`/${page.toLowerCase()}`} className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">
                                            {page}
                                        </Link>
                                    ))} */}
                                      <Link to="/" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Home</Link>
                        <Link to="/about" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">About Us</Link>
                        <Link to="/technologies" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Technologies</Link>
                        <Link to="/services" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Services</Link>
                        <Link to="/phdguide" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Phd Guide</Link>
                        <Link to="/iee" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">IEEE Project</Link>
                        <Link to="/carreer" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Carrear</Link>
                        <Link to="/franchise" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Franchise</Link>
                        <Link to="/contact" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Contact Us</Link>

                                </nav>
                                <button onClick={toggleSearch} className="text-gray-400 hover:text-white">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </>
                        )}

                        {isSearchOpen && (
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="p-2 rounded-l bg-gray-200 focus:outline-none"
                                />
                                <button onClick={toggleSearch} className="p-2 bg-gray-200 rounded-r hover:bg-gray-400">
                                    Close
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-00 hover:text-white">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <button onClick={toggleSearch} className="text-gray-400 hover:text-white ml-2">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray p-4">
                        <nav className="flex flex-col space-y-2">
                        <Link to="/" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Home</Link>
                        <Link to="/about" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">About Us</Link>
                        <Link to="/technologies" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Technologies</Link>
                        <Link to="/services" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Services</Link>
                        <Link to="/phdguide" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Phd Guide</Link>
                        <Link to="/iee" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">IEEE Project</Link>
                        <Link to="/carreer" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Carrear</Link>
                        <Link to="/franchise" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Franchise</Link>
                        <Link to="/contact" className="font-semibold text-gray-600 hover:gray-blue-400 mx-6">Contact Us</Link>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
};

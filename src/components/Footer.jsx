import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'; // Import social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">My Travel Company</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted travel partner for unforgettable journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services">Services</a>
              </li>
              <li className="mb-2">
                <a href="/destinations">Destinations</a>
              </li>
              <li className="mb-2">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:+15551234567">+1-555-123-4567</a>
              </li>
              <li className="mb-2">
                123 Main Street, Anytown
              </li>
              <li className="mb-2">
                City, State, Zip Code
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} /> {/* Facebook icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} /> {/* Twitter icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} /> {/* Instagram icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} /> {/* YouTube icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} /> {/* LinkedIn icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} My Travel Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
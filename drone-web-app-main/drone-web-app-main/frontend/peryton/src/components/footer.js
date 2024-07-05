import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="w-full h-auto min-h-[60vh] p-12 flex flex-col bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('imgs/footer-bg.png')` }}
    >
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-6">
        <div className="md:w-[40%] w-full">
          <img src="imgs/logo.png" alt="site-logo" className="h-8 mb-12" />
          <div>
            <div className="text-white pb-3 font-bold">Join our team</div>
            <div className="flex gap-4">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-[240px] min-h-[40px] bg-gray-800 text-white py-4 px-4"
              />
              <button className="w-[100px] min-h-[40px] bg-blue-700 text-white py-4 font-bold hover:bg-gray-700 hover: hover:text-blue-700">
                JOIN
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] w-full flex flex-col ">
          <h3 className="text-white font-bold text-lg pb-6">Site Menu</h3>
          <Link
            to="/"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            Services
          </Link>
          <Link
            to="/blogs"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            Blogs
          </Link>
        </div>
        <div className="md:w-[20%] w-full flex flex-col">
          <h3 className="text-white font-bold text-lg pb-6">Information</h3>
          <Link
            to="/"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:w-[20%] w-full">
          <h3 className="text-white font-bold text-3xl pb-6">Contact Us</h3>
          <div className="text-gray-400 text-sm pb-3">
            Phone: (+91) 7507284555
          </div>
          <div className="text-gray-400 text-sm pb-3">
            Email: <mail to="info@peryton.in">info@peryton.in</mail>
          </div>

          <div className="flex gap-4 text-gray-400 mt-8">
            <div className="w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaFacebook />
            </div>
            <div className="w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaTwitter />
            </div>
            <div className="w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaLinkedin />
            </div>
            <div className="w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row md:gap-0 gap-16 flex-col justify-between mt-12 border-t border-gray-800 pt-6">
        <div className="text-gray-400 md:order-1 order-2">
          © {new Date().getFullYear()} Made with ❤ by Peryton
        </div>
        <div className="flex md:gap-6 gap-2 md:order-2 order-1 md:flex-row flex-col">
          <Link className="text-gray-400 hover:text-blue-700">
            Terms & Conditions
          </Link>
          <Link className="text-gray-400 hover:text-blue-700">
            Privacy Policy
          </Link>
          <Link className="text-gray-400 hover:text-blue-700">
            Refund & Return Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

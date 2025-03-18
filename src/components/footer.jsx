import React from "react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700">
      <div className="container mx-auto py-10 px-6 flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/3 text-center md:text-left">
          <img
            src="/src/assets/MentalEducareHealth.png"
            alt="MentalEducare"
            className="mx-auto md:mx-0 w-40"
          />
          <p className="mt-4 text-sm">
          Bridging Minds, Connecting Hearts – Support for Students, Parents, and Mental Health Professionals.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-blue-500">
            <FaInstagram size={20} />
            <FaFacebookF size={20} />
          </div>
        </div>

        <div className="md:w-1/6 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg text-blue-700">About</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>About MentalEducare</li>
            <li>MentalEducare Team</li>
            <li>Security</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className="md:w-1/6 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg text-blue-700">
            Services & Resources
          </h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Wellbeing App</li>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Free Resources</li>
            <li>Download the MentalEducare App</li>
          </ul>
        </div>

        <div className="md:w-1/4 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg text-blue-700">Get In Touch</h3>
          <p className="text-sm mt-2">
          7 Đ. D1, Long Thanh My, Thu Đuc, Ho Chi Minh 700000
          </p>
          <div className="border-t-2 border-yellow-400 w-10 my-2"></div>
          <p className="text-sm">Email: MentalEducare@gmail.com</p>
          <p className="text-sm">Phone: 0123456789</p>       
        </div>
      </div>

      <div className="bg-blue-400 text-white py-4 text-center text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between px-6">
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Website Terms of Use
            </a>
          </div>
          <p className="mt-2 md:mt-0">© 2025 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

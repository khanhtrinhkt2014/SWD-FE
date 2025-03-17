import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700">
      <div className="container mx-auto py-10 px-6 flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/3 text-center md:text-left">
          <img
            src="https://oasiseducation.com/wp-content/uploads/2020/06/cropped-Oasis-logo-blue-150x63.png"
            alt="Oasis Logo"
            className="mx-auto md:mx-0 w-40"
          />
          <p className="mt-4 text-sm">
            Oasis helps K-12 and higher education institutions support student,
            faculty, and staff wellbeing with access to mental health
            professionals and evidence-based content.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-blue-500">
            <FaInstagram size={20} />
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} />
            <FaLinkedinIn size={20} />
            <FaPinterestP size={20} />
          </div>
          <div className="mt-4">
            <img
              src="https://oasiseducation.com/wp-content/uploads/2022/01/PartnershipLogo_Horizantal_Disclaimer-Web-Site.png"
              alt="NASPA Partner"
              className="w-32 mx-auto md:mx-0"
            />
            <img
              src="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=cc08cfee-5e66-417b-b8e9-a978e12996d5"
              alt="DMCA Protected"
              className="w-20 mx-auto md:mx-0 mt-2"
            />
          </div>
        </div>

        <div className="md:w-1/6 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg text-blue-700">About</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Higher Education</li>
            <li>K-12</li>
            <li>About Oasis</li>
            <li>Clinical Approach</li>
            <li>Oasis Team</li>
            <li>Security</li>
            <li>Partnerships</li>
            <li>FAQ's</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="md:w-1/6 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg text-blue-700">
            Services & Resources
          </h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Wellbeing App</li>
            <li>Teletherapy</li>
            <li>Admin Console</li>
            <li>EHR/EMR Software</li>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Free Resources</li>
            <li>Download the Oasis App</li>
          </ul>
        </div>

        <div className="md:w-1/4 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg text-blue-700">Get In Touch</h3>
          <p className="text-sm mt-2">
            129 N Pennsylvania Ave, Greensburg, PA 15601
          </p>
          <div className="border-t-2 border-yellow-400 w-10 my-2"></div>
          <p className="text-sm">Email: info@oasiseducation.com</p>
          <p className="text-sm">Phone: (724) 252-4531</p>
          <p className="text-sm">Fax: (724) 348-1917</p>
          <div className="border-t-2 border-yellow-400 w-10 my-2"></div>
          <p className="text-blue-600 text-sm">💬 Talk to Sales</p>
          <p className="text-blue-600 text-sm">❓ Help & Feedback</p>
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

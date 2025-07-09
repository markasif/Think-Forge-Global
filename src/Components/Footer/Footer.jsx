import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../Assets/footer.webp"; // Your logo image

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/think-forge-global",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/think_forge_global/",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const footerLinks = [
    { name: "About", url: "#about" },
    { name: "Services", url: "#services" },
     { name: "Our Team", url: "#team" },
    { name: "Connect", url: "#connect" },
   
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-200 px-6 py-12 md:px-12 font-sfpro">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Address, Map, Contact Info, Logo */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Our Location</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              2nd Floor, Sahara Center Complex, Calicut Road,
              <br />
              opp. Polytech Quarters, Pallippuram,
              <br />
              Perinthalmanna, Angadipuram,
              <br />
              Kerala 679321
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                <FaEnvelope className="text-red-500" />
                <span>Email Us</span>
              </h3>
              <a
                href="mailto:mail@thinkforgeglobal.com"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                mail@thinkforgeglobal.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                <FaPhoneAlt className="text-red-500" />
                <span>Call Us</span>
              </h3>
              <a
                href="tel:+917907165126"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                +91 7907165126
              </a>
            </div>

            {/* Social Icons moved below email/phone */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-gray-300 hover:text-white transition-all ${social.color} hover:border-transparent shadow-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border-gray-200">
            <iframe
              title="Google Map"
              className="w-full h-full min-h-[200px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.832664361036!2d76.2085746732672!3d10.976000155484419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cde6be0ad2d7%3A0x51e1921ef04b6312!2sPlatinum%20Workspace!5e0!3m2!1sen!2sin!4v1748940720067!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info + Social Icons */}
          

          {/* Logo */}
          
          <div className="flex justify-center md:justify-end items-center">
            <a href="#hero">
            <img
              src={logo}
              alt="Think Forge Global"
              className="w-36 md:w-40 opacity-90 hover:opacity-100 transition-opacity"
            />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-red-500 font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Think Forge Global. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react";
import Logo from "../components/Logo";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "R & D", path: "/research" },
    { label: "Products", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  const productCategories = [
    { label: "Bio-Fungicides", path: "/category/bio-fungicides" },
    { label: "Bio-Fertilizers", path: "/category/bio-fertilizer" },
    { label: "Bio-Pesticides", path: "/category/bio-pesticides" },
    { label: "Organic Inputs", path: "/category/organic-inputs" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      url: "https://facebook.com/philippineagrisolution",
    },
    {
      icon: <Twitter size={18} />,
      label: "Twitter",
      url: "https://twitter.com/philippineagri",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://linkedin.com/company/philippineagrisolution",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://instagram.com/philippineagrisolution",
    },
  ];

  return (
    <footer className="bg-[#1A317F] text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="mb-6">
            <Logo />
          </div>
          <p className="text-[#C4CBD3] mb-6">
            Philippine Agri Solution provides innovative agricultural products
            and solutions to enhance farming productivity sustainably.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#48A93B]">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#48A93B] mr-2">•</span>
                <Link
                  to={link.path}
                  className="text-[#C4CBD3] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#48A93B]">
            Products
          </h3>
          <ul className="space-y-3">
            {productCategories.map((category, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#48A93B] mr-2">•</span>
                <Link
                  to={category.path}
                  className="text-[#C4CBD3] hover:text-white transition-colors"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#48A93B]">
            Contact Us
          </h3>
          <ul className="space-y-4 text-[#C4CBD3]">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#48A93B] mt-1 flex-shrink-0" />
              <span>
                Gat No-369, Plot- 05, Falake Wasti Moi Nighoje Road,Chakan
                Tal-khed Dist-Pune Maharashtra,India.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#48A93B]" />
              <a
                href="mailto:info@philippine.in"
                className="hover:text-white transition-colors"
              >
                info@philippine.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#48A93B]" />
              <a
                href="tel:+917038970271"
                className="hover:text-white transition-colors"
              >
                +91 70389 70271
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase size={20} className="text-[#48A93B]" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-[#8493BC] border-t border-[#2A3F8F] pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Philippine Agri Solution
          </span>
          . All Rights Reserved.{" "}
          <Link to="/privacy-policy" className="text-[#48A93B] hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-[#48A93B] hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

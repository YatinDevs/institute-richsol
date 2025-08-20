import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, Leaf } from "lucide-react";

const ContactUsPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-40 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Philippine Agri Solution
        </h1>
        <div className="w-24 h-1 bg-[#48A93B] mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get in touch for expert agricultural solutions, product inquiries, or
          technical support
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A93B] focus:border-[#48A93B]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A93B] focus:border-[#48A93B]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A93B] focus:border-[#48A93B]"
              />
            </div>

            <div>
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product Interest *
              </label>
              <select
                id="product"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A93B] focus:border-[#48A93B]"
                required
              >
                <option value="">Select a product category</option>
                <option value="bio-fungicides">Bio-Fungicides</option>
                <option value="bio-fertilizers">Bio-Fertilizers</option>
                <option value="bio-pesticides">Bio-Pesticides</option>
                <option value="organic-inputs">Organic Inputs</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#48A93B] focus:border-[#48A93B]"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#48A93B] hover:bg-[#3A8C2F] text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn("left", "spring", 0.2, 1)}>
          {/* Contact Details */}
          <div className="bg-[#f8fafc] p-8 rounded-xl shadow-sm mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#48A93B] p-2 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 70389 70271</p>
                  <p className="text-gray-600">+91 98505 33663</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48A93B] p-2 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@philippine.in</p>
                  <p className="text-gray-600">sales@philippine.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48A93B] p-2 rounded-full text-white">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+91 70389 70271</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48A93B] p-2 rounded-full text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM to 6PM</p>
                  <p className="text-gray-600">Saturday: 9AM to 1PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#48A93B] p-2 rounded-full text-white">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Office & Manufacturing Unit
              </h3>
            </div>
            <address className="text-gray-600 not-italic pl-11">
              Gat No-369, Plot-05, Falake Wasti
              <br />
              Moi Nighoje Road, Chakan
              <br />
              Tal-Khed, Dist-Pune
              <br />
              Maharashtra, India - 410501
            </address>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-16 bg-[#f8fafc] rounded-xl overflow-hidden border border-gray-200"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Our Location
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our office or manufacturing unit for product demonstrations
          </p>
        </div>
        <div className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715061381521!2d72.8243143153774!3d19.04172265800083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df05e8e5d9%3A0x3e5a6f196c7a7a2a!2sFinancial%20District%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Philippine Agri Solution Location"
          ></iframe>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactUsPage;

import React from "react";
import { motion } from "framer-motion";

// Color definitions
const primaryColor = "#1A317F";
const secondaryColor = "#48A93B";
const primaryLight = "#E8EBF5";
const primaryLighter = "#F5F7FC";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AboutPage() {
  return (
    <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-20"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ color: primaryColor }}
        >
          Pioneering{" "}
          <span style={{ color: secondaryColor }}>Sustainable Agriculture</span>{" "}
          Solutions
        </h1>
        <h3 className="text-xl text-gray-600 font-medium">
          Committed to innovation, quality, and farmer prosperity
        </h3>
        <div className="mt-8 flex justify-center">
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: secondaryColor }}
          ></div>
        </div>
      </motion.div>

      {/* Image Banner */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        <motion.div
          variants={fadeIn}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1594057372766-885a42ddbb6e?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Philippine Agri Solution team"
            className="w-full h-full object-cover"
            style={{ height: "400px" }}
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300"
        >
          <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Philippine Agri Solution products"
            className="w-full h-full object-cover"
            style={{ height: "400px" }}
          />
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 mb-20"
      >
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: primaryLight }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Quality Assurance
          </h3>
          <p className="text-gray-600">
            Our products undergo rigorous testing and quality checks to ensure
            they meet the highest agricultural standards.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: primaryLight }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Farmer Focus
          </h3>
          <p className="text-gray-600">
            We develop solutions that address real challenges faced by farmers,
            ensuring practical and effective results.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: primaryLight }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            Sustainable Growth
          </h3>
          <p className="text-gray-600">
            Our products promote sustainable farming practices that protect the
            environment while improving yields.
          </p>
        </motion.div>
      </motion.div>

      {/* About Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.div variants={fadeIn} className="mb-12">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: primaryColor }}
            >
              About Philippine Agri Solution
            </h2>
            <div className="flex justify-center">
              <div
                className="w-16 h-1 rounded-full"
                style={{ backgroundColor: secondaryColor }}
              ></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize agriculture through
                innovative and sustainable solutions, Philippine Agri Solution
                has emerged as a trusted name in the agricultural inputs sector.
                Our journey began with a simple mission: to provide farmers with
                effective, eco-friendly alternatives to conventional
                agricultural inputs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in the research, development, and manufacturing of
                bio-fertilizers, bio-pesticides, and other organic agricultural
                inputs that enhance soil health, plant growth, and crop
                protection without harming the environment.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art manufacturing facility in Pune combines
                traditional knowledge with modern biotechnology to create
                products that deliver consistent results. We work closely with
                agricultural scientists, researchers, and farmers to develop
                solutions tailored to diverse farming needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our products are used by thousands of farmers across
                India, helping them achieve better yields while reducing their
                environmental footprint and input costs.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="p-10 rounded-xl text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
          <p className="text-blue-100 leading-relaxed">
            At Philippine Agri Solution, we believe that sustainable agriculture
            is the foundation of food security and environmental conservation.
            Our approach combines scientific innovation with respect for nature,
            creating products that work in harmony with ecological systems. We
            are committed to continuous research and improvement to stay at the
            forefront of agricultural biotechnology.
          </p>
        </motion.div>
      </motion.div>

      {/* Pillars Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            Our Pillars of Excellence
          </h2>
          <div className="flex justify-center">
            <div
              className="w-16 h-1 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              number: 1,
              title: "Research & Innovation",
              content:
                "Continuous investment in R&D to develop cutting-edge agricultural solutions.",
            },
            {
              number: 2,
              title: "Quality Manufacturing",
              content:
                "GMP-certified production facility with strict quality control measures.",
            },
            {
              number: 3,
              title: "Farmer Education",
              content:
                "Comprehensive training programs to ensure proper product use and maximize benefits.",
            },
          ].map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: primaryLight }}
              >
                <span className="font-semibold" style={{ color: primaryColor }}>
                  {pillar.number}
                </span>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: primaryColor }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{pillar.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: 4,
              title: "Sustainability",
              content:
                "Products designed to enhance agricultural productivity while preserving ecosystems.",
            },
            {
              number: 5,
              title: "Technical Support",
              content:
                "Dedicated team of agronomists providing field-level assistance to farmers.",
            },
            {
              number: 6,
              title: "Result Orientation",
              content:
                "Focus on delivering measurable improvements in crop health and yield.",
            },
          ].map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: primaryLight }}
              >
                <span className="font-semibold" style={{ color: primaryColor }}>
                  {pillar.number}
                </span>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: primaryColor }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{pillar.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;

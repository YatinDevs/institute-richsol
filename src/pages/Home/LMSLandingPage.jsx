import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Users,
  BookOpen,
  Briefcase,
  Code,
  CheckCircle,
  ArrowRight,
  Clock,
  Laptop,
  DollarSign,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const LMSLandingPage = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const phases = [
    {
      title: "Foundations",
      duration: "Weeks 1-4",
      modules: ["Programming Essentials", "Web Fundamentals"],
      schedule: "Weekdays: 7PM–9PM (IST) | Weekends: 10AM–2PM (IST)",
    },
    {
      title: "Frontend Development",
      duration: "Weeks 5-8",
      modules: ["Modern Frontend with React.js"],
      schedule: "Weekdays: 7PM–9PM (IST) | Weekends: 10AM–2PM (IST)",
    },
    {
      title: "Backend Specialization",
      duration: "Weeks 9-12",
      modules: [
        "Java Spring Boot Track",
        "Python FastAPI Track",
        "Node.js Track",
      ],
      schedule: "Weekdays: 7PM–9PM (IST) | Weekends: 10AM–2PM (IST)",
    },
    {
      title: "DevOps & Deployment",
      duration: "Weeks 13-16",
      modules: ["Production Readiness", "Containerization & Deployment"],
      schedule: "Weekdays: 7PM–9PM (IST) | Weekends: 10AM–2PM (IST)",
    },
  ];

  const tracks = [
    {
      title: "Java Spring Boot",
      items: [
        "Spring IOC & Dependency Injection",
        "Spring Boot Auto-Configuration",
        "REST Controller Development",
        "Spring Data JPA with Hibernate",
        "Spring Security (JWT/OAuth2)",
      ],
    },
    {
      title: "Python FastAPI",
      items: [
        "Async/Await Programming",
        "Pydantic Data Validation",
        "SQLAlchemy ORM",
        "Authentication Middleware",
        "WebSocket Implementation",
      ],
    },
    {
      title: "Node.js",
      items: [
        "Express.js Framework",
        "MongoDB/Mongoose",
        "JWT Authentication",
        "Error Handling Strategies",
        "WebSockets with Socket.io",
      ],
    },
  ];

  const eligibility = [
    {
      icon: <BookOpen size={24} />,
      title: "BCA/MCA Graduates",
      description:
        "Looking to enhance their skills in full-stack development and DevOps.",
    },
    {
      icon: <Users size={24} />,
      title: "Diploma Holders",
      description: "(CS/IT-related fields) aiming for career advancement.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Degree Graduates",
      description:
        "(any discipline) seeking a transition into software development.",
    },
    {
      icon: <Code size={24} />,
      title: "Working Professionals",
      description:
        "From non-tech backgrounds who want to switch to a tech career.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Freelancers & Tech Enthusiasts",
      description: "Wanting structured training in modern web development.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-600"
          >
            DevMastery
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["program", "eligibility", "curriculum", "pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {["program", "eligibility", "curriculum", "pricing"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-slate-700 py-2 text-left font-medium"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Full Stack Web & Software Development Program
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                (4 Months Intensive Training + 3 Months Paid Internship)
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  <Clock size={18} className="mr-2" />
                  <span>7 Months Program</span>
                </div>
                <div className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  <Briefcase size={18} className="mr-2" />
                  <span>Paid Internship</span>
                </div>
                <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  <Users size={18} className="mr-2" />
                  <span>Career Support</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Apply Now <ArrowRight size={20} className="ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection("curriculum")}
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  View Curriculum
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Next Batch Starts
                    </h3>
                    <p className="text-slate-600">15th October 2023</p>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Class Schedule
                    </h3>
                    <p className="text-slate-600">
                      Weekdays: 7PM–9PM (IST) | Weekends: 10AM–2PM (IST)
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Seats Available
                    </h3>
                    <p className="text-slate-600">Only 25 seats per batch</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <DollarSign className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Early Bird Discount
                    </h3>
                    <p className="text-slate-600">
                      15% off if applied before 1st October
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Who Is This Program For?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              This program is designed for individuals looking to build a career
              in full-stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {eligibility.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Prerequisites
            </h3>
            <p className="text-slate-700">
              Basic understanding of programming logic (variables, loops,
              functions). No prior experience in full-stack development
              required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Curriculum */}
      <section id="curriculum" className="py-16 bg-slate-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Program Curriculum
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive 4-month training program followed by 3 months of
              paid internship
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Program Phases
                </h3>
                <div className="space-y-2">
                  {phases.map((phase, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePhase(index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activePhase === index
                          ? "bg-blue-600 text-white"
                          : "bg-white text-slate-700 hover:bg-blue-50"
                      }`}
                    >
                      <div className="font-medium">{phase.title}</div>
                      <div className="text-sm">{phase.duration}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-md p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {phases[activePhase].title}
                    </h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {phases[activePhase].duration}
                    </span>
                  </div>

                  <div className="mb-6 p-4 bg-slate-50 rounded-lg flex items-start">
                    <Clock size={20} className="text-slate-500 mr-3 mt-1" />
                    <span>{phases[activePhase].schedule}</span>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">
                      What You'll Learn
                    </h4>
                    <div className="grid gap-4">
                      {activePhase === 0 && (
                        <>
                          <div className="p-4 border border-slate-200 rounded-lg">
                            <h5 className="font-medium text-slate-800 mb-2">
                              Module 1: Programming Essentials
                            </h5>
                            <ul className="text-slate-600 list-disc list-inside space-y-1">
                              <li>Variables, Data Types, Operators</li>
                              <li>Control Structures (Loops/Conditionals)</li>
                              <li>Functions & Scope</li>
                              <li>Basic Algorithms</li>
                              <li>Git/GitHub Version Control</li>
                            </ul>
                          </div>
                          <div className="p-4 border border-slate-200 rounded-lg">
                            <h5 className="font-medium text-slate-800 mb-2">
                              Module 2: Web Fundamentals
                            </h5>
                            <ul className="text-slate-600 list-disc list-inside space-y-1">
                              <li>HTML5 Semantic Structure</li>
                              <li>CSS3 Flexbox/Grid Systems</li>
                              <li>JavaScript (ES6+ Features)</li>
                              <li>DOM Manipulation</li>
                              <li>HTTP/HTTPS Protocols</li>
                              <li>REST API Concepts</li>
                            </ul>
                          </div>
                        </>
                      )}
                      {activePhase === 1 && (
                        <div className="p-4 border border-slate-200 rounded-lg">
                          <h5 className="font-medium text-slate-800 mb-2">
                            Module 3: Modern Frontend
                          </h5>
                          <ul className="text-slate-600 list-disc list-inside space-y-1">
                            <li>Tailwind CSS Utility Framework</li>
                            <li>
                              React.js Core Concepts (Components, Props, State)
                            </li>
                            <li>Hooks System (useState, useEffect)</li>
                            <li>React Router</li>
                            <li>API Integration (Axios/Fetch)</li>
                            <li>Frontend Testing (Jest)</li>
                          </ul>
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <h6 className="font-medium text-slate-800 mb-1">
                              Project 1:
                            </h6>
                            <p className="text-slate-600">
                              Build a responsive e-commerce frontend with
                              product filtering.
                            </p>
                          </div>
                        </div>
                      )}
                      {activePhase === 2 && (
                        <>
                          <div className="mb-6">
                            <h5 className="font-medium text-slate-800 mb-4">
                              Choose one specialization track:
                            </h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              {tracks.map((track, index) => (
                                <div
                                  key={index}
                                  className="border border-slate-200 rounded-lg p-4"
                                >
                                  <h6 className="font-medium text-slate-800 mb-3">
                                    {track.title}
                                  </h6>
                                  <ul className="text-slate-600 space-y-2">
                                    {track.items.map((item, i) => (
                                      <li key={i} className="flex items-start">
                                        <CheckCircle
                                          size={16}
                                          className="text-green-500 mr-2 mt-1 flex-shrink-0"
                                        />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h6 className="font-medium text-slate-800 mb-1">
                              Project 2:
                            </h6>
                            <p className="text-slate-600">
                              Develop a full-featured API for a social media
                              platform.
                            </p>
                          </div>
                        </>
                      )}
                      {activePhase === 3 && (
                        <div className="p-4 border border-slate-200 rounded-lg">
                          <h5 className="font-medium text-slate-800 mb-2">
                            Module 4: Production Readiness
                          </h5>
                          <ul className="text-slate-600 list-disc list-inside space-y-1">
                            <li>
                              <span className="font-medium">
                                Docker Containerization
                              </span>
                              <ul className="list-disc list-inside ml-5 mt-1">
                                <li>Image Creation</li>
                                <li>Docker Compose</li>
                                <li>Multi-stage Builds</li>
                              </ul>
                            </li>
                            <li>
                              Cloud Deployment Basics (Covered if time permits)
                            </li>
                            <li>CI/CD Pipelines (GitHub Actions)</li>
                            <li>Monitoring Basics</li>
                          </ul>
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <h6 className="font-medium text-slate-800 mb-1">
                              Project 3:
                            </h6>
                            <p className="text-slate-600">
                              Containerize and deploy a full-stack application
                              with CI/CD.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Internship Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">
                  Internship Program (Months 5-7)
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <span>
                      Work on real client projects in an Agile environment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <span>
                      Participate in daily standups, code reviews, and sprint
                      planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="mr-2 mt-1 flex-shrink-0"
                    />
                    <span>
                      Develop professional skills like documentation and client
                      communication
                    </span>
                  </li>
                </ul>
                <div className="mt-4 flex items-center">
                  <Clock size={20} className="mr-2" />
                  <span>
                    Flexible hours (as per internship project requirements)
                  </span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                  <Briefcase size={48} className="mx-auto" />
                  <p className="text-center mt-4 font-medium">
                    3 Months Paid Internship
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Technical Requirements
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What you'll need to successfully complete the program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Laptop className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Hardware
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Laptop (8GB RAM minimum)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Webcam & microphone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Stable internet connection</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Code className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Software
                </h3>
              </div>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>VS Code or IntelliJ IDEA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Docker Desktop</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Postman or Insomnia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Git</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Key Takeaways for Career Transition
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What you'll achieve by completing this program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Hands-on Projects",
                description: "Build a portfolio with 3+ deployable projects",
              },
              {
                title: "DevOps Fundamentals",
                description: "Docker, CI/CD, and deployment basics",
              },
              {
                title: "Industry Internship",
                description: "Gain real-world experience",
              },
              {
                title: "Job-Ready Skills",
                description: "Full-stack proficiency in your chosen tech stack",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment */}
      <section id="pricing" className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Pricing & Enrollment
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Start your journey to becoming a full-stack developer
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Full Stack Development Program
                  </h3>
                  <p className="mb-4">
                    4 Months Training + 3 Months Paid Internship
                  </p>
                  <div className="flex items-center">
                    <DollarSign size={24} />
                    <span className="text-3xl font-bold ml-1">
                      [Your Pricing]
                    </span>
                  </div>
                </div>
                <button className="mt-6 md:mt-0 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Apply Now
                </button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-slate-800 mb-4">
                  Batch Start Dates
                </h3>
                <p className="text-slate-600">Monthly/Quarterly intakes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-slate-800 mb-4">
                  Class Schedule
                </h3>
                <p className="text-slate-600">
                  <span className="block">Weekdays: 7PM–9PM (IST)</span>
                  <span>Weekends: 10AM–2PM (IST)</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-slate-800 mb-4">
                  Next Steps
                </h3>
                <ul className="text-slate-600 list-disc list-inside space-y-1">
                  <li>Fill out the application form</li>
                  <li>Attend a counseling session</li>
                  <li>Secure your seat for the next batch!</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4">
                Download Brochure
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Call
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DevMastery</h3>
              <p className="text-slate-400">
                Full Stack Web & Software Development Program with guaranteed
                internship.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>info@devmastery.com</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>123 Tech Street, Innovation City</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button
                    onClick={() => scrollToSection("program")}
                    className="hover:text-white transition-colors"
                  >
                    Program Details
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("eligibility")}
                    className="hover:text-white transition-colors"
                  >
                    Eligibility
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("curriculum")}
                    className="hover:text-white transition-colors"
                  >
                    Curriculum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} DevMastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LMSLandingPage;

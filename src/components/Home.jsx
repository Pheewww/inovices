import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring"; // Using react-spring for animations
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaQuestionCircle,
} from "react-icons/fa"; // Icons
import { MdOutlineFeaturedPlayList } from "react-icons/md"; // Icon for featured courses
import { AiOutlineLogin } from "react-icons/ai"; // Login Icon

// Indian-based testimonials, instructors, and other data
const testimonials = [
  {
    id: 1,
    name: "Ravi Sharma",
    comment:
      "The courses helped me land my dream job as a software developer at a top MNC. Highly recommended!",
  },
  {
    id: 2,
    name: "Anjali Gupta",
    comment:
      "The instructors are knowledgeable and the curriculum is industry-relevant. I was able to upskill and transition to a tech role easily.",
  },
];

const instructors = [
  {
    id: 1,
    name: "Dr. Arvind Kumar",
    title: "Senior Data Scientist",
    bio: "Dr. Kumar has over 15 years of experience in AI and Machine Learning, having worked with leading tech companies like Infosys and TCS.",
  },
  {
    id: 2,
    name: "Neha Patel",
    title: "Full Stack Developer",
    bio: "Neha is a full stack developer specializing in MERN stack development with 10 years of experience. She has mentored over 500 students in India.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    title: "Cybersecurity Expert",
    bio: "Rahul is an ethical hacker and cybersecurity expert who has helped several Indian companies safeguard their digital assets.",
  },
];

const featuredCourses = [
  {
    id: 1,
    title: "Advanced Python Programming",
    description:
      "Master Python programming and take your skills to the next level.",
  },
  {
    id: 2,
    title: "Data Science with R",
    description:
      "Learn data analysis and visualization techniques using R, one of the most powerful tools in the industry.",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    description:
      "Build modern web applications using HTML, CSS, JavaScript, and React.",
  },
];

const faqs = [
  {
    question: "What is the duration of each course?",
    answer:
      "The duration varies from course to course but typically ranges between 6 to 12 weeks.",
  },
  {
    question: "Are the courses recognized in India?",
    answer:
      "Yes, all our courses are recognized and designed to meet industry standards in India.",
  },
];

const partners = [
  {
    id: 1,
    name: "Cognizant",
    logo: "/images/tcs-logo.png",
  },
  {
    id: 2,
    name: "Infosys",
    logo: "/images/infosys-logo.png",
  },
  {
    id: 3,
    name: "Wipro",
    logo: "/images/wipro-logo.png",
  },
  {
    id: 4,
    name: "Accenture",
    logo: "/images/wipro-logo.png",
  },
];

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Animation config for the hero section
  const heroAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 200,
  });

  // Animation config for the testimonials section
  const testimonialsAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 400,
  });

  // Animation config for other sections
  const featureAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 600,
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="text-white bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/Educate.png" alt="logo" className="h-8 w-10 mr-2" />
              <span className="text-xl font-bold">Educate Learning</span>
            </div>
            <div className="hidden md:block">
              <Link to="/login" className="mr-4 text-white hover:text-gray-300">
                <AiOutlineLogin className="inline-block mr-1" /> Login
              </Link>
              <Link
                to="/courses"
                className="mr-4 text-white hover:text-gray-300"
              >
                <MdOutlineFeaturedPlayList className="inline-block mr-1" />{" "}
                Courses
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <animated.div
        style={heroAnimation}
        className="flex flex-1 justify-center items-center p-2 bg-center bg-cover"
        style1={{
          backgroundImage: `url(/path/to/your/image.png)`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-10 text-center text-white bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="mb-4 text-5xl font-bold">Jumpstart Your IT Career</h1>
          <p className="mb-6 text-lg">
            Learn in-demand development skills and prepare for a thriving career
            in tech.
          </p>
          <div className="space-x-4">
            <Link to="/courses">
              <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Explore Courses
              </button>
            </Link>
            <Link to="/login">
              <button className="py-2 px-4 font-bold text-white bg-gray-800 rounded hover:bg-gray-900">
                Login
              </button>
            </Link>
          </div>
        </div>
      </animated.div>

      {/* Featured Courses Section */}
      <animated.div style={featureAnimation} className="py-8 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center">
            <MdOutlineFeaturedPlayList className="inline-block mr-2" />
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 bg-gray-100 rounded-lg shadow-lg"
              >
                <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
                <p className="mb-4 text-gray-700">{course.description}</p>
                <Link to={`/courses`}>
                  <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {/* Our Instructors Section */}
      <animated.div style={featureAnimation} className="py-8 bg-gray-200">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center">
            <FaChalkboardTeacher className="inline-block mr-2" />
            Meet Our Instructors
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="mb-2 text-xl font-bold">{instructor.name}</h3>
                <p className="mb-4 text-gray-700">{instructor.title}</p>
                <p className="text-gray-700">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </animated.div>
      {/* Features Section */}
      <animated.div style={featureAnimation} className="py-8 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center">Course Features</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Feature 1: Certificates */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Certificates</h3>
              <p className="mb-4 text-gray-700">
                Receive a certificate of completion at the end of each course,
                helping you showcase your skills to employers.
              </p>
            </div>
            {/* Feature 2: Course Types */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Course Types</h3>
              <p className="mb-4 text-gray-700">
                Choose between recorded self-paced courses or live,
                instructor-led sessions, depending on your learning style.
              </p>
            </div>
            {/* Feature 3: Capstone Project */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Capstone Project</h3>
              <p className="mb-4 text-gray-700">
                At the end of your learning journey, complete a capstone project
                to apply your new skills and build a portfolio.
              </p>
            </div>
          </div>
        </div>
      </animated.div>

      {/* FAQ Section */}
      <animated.div style={featureAnimation} className="py-8 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center">
            <FaQuestionCircle className="inline-block mr-2" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="mb-2 text-xl font-bold">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {/* Partners Section */}
      <animated.div style={featureAnimation} className="py-8 bg-gray-200">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center">Our Partners</h2>
          <div className="flex justify-center items-center space-x-4">
            {partners.map((partner) => (
              <div key={partner.id} className="text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="mx-auto w-32"
                />
                <p className="mt-2 text-gray-700">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {/* Testimonials Section */}
      <animated.div style={testimonialsAnimation} className="py-8 bg-gray-200">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-center">
            <FaUserGraduate className="inline-block mr-2" />
            Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-4 bg-white rounded-lg shadow-lg"
              >
                <p className="mb-2 text-lg text-gray-800">
                  {testimonial.comment}
                </p>
                <p className="text-gray-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {/* Call to Action Section */}
      <animated.div style={featureAnimation} className="py-8 bg-blue-500">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Start Learning?
          </h2>
          <p className="mb-6 text-white">
            Join thousands of students who are building their careers with us.
          </p>
          <Link to="/courses">
            <button className="py-2 px-6 font-bold text-white bg-gray-800 rounded hover:bg-gray-900">
              Browse Courses
            </button>
          </Link>
        </div>
      </animated.div>

      {/* Footer */}
      <footer className="p-4 text-white bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <p className="text-center mt-2">
            For support, contact us at:{" "}
            <a
              href="mailto:educatelearning.help@gmail.com"
              className="underline hover:text-gray-300"
            >
              educatelearning.help@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

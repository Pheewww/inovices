import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring"; // Using react-spring for animations

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "This course website helped me immensely in advancing my skills.",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Highly recommend this platform for anyone looking to learn.",
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div>
              <span className="text-xl font-bold">Course Website</span>
            </div>
            <div className="hidden md:block">
              <Link to="/login" className="mr-4 text-white hover:text-gray-300">
                Login
              </Link>
              <Link
                to="/courses"
                className="mr-4 text-white hover:text-gray-300"
              >
                Courses
              </Link>
              {/* Add more links as needed */}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
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
        className="flex-1 flex items-center justify-center bg-cover bg-center"
        style1={{
          backgroundImage: `url(/path/to/your/image.png)`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-center text-white p-10 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4">Learn Something New Today</h1>
          <p className="text-lg mb-6">
            Explore our wide range of courses and accelerate your learning
            journey.
          </p>
          <div className="space-x-4">
            <Link to="/courses">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore Courses
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </animated.div>

      {/* Testimonials Section */}
      <animated.div style={testimonialsAnimation} className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <p className="text-lg text-gray-800 mb-2">
                  {testimonial.comment}
                </p>
                <p className="text-gray-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center">
            &copy; 2024 Course Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Web3 and DevOps",
    description: "Understand Web3 technologies and DevOps practices.",
    price: 3499,
    duration: "6 weeks",
    level: "Intermediate",
    certificate: true,
    instructor: "Dr. A Sharma",
  },

  {
    id: 3,
    title: "Data Science",
    description: "Learn data analysis, visualization, and machine learning.",
    price: 3999,
    duration: "10 weeks",
    level: "Advanced",
    certificate: true,
    instructor: "Dr. C Gupta",
  },
  // Additional courses
  {
    id: 5,
    title: "Cloud Computing Essentials",
    description: "Understand cloud service models and cloud infrastructure.",
    price: 3599,
    duration: "7 weeks",
    level: "Intermediate",
    certificate: true,
    instructor: "Dr. E Patel",
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of cybersecurity and threat management.",
    price: 3299,
    duration: "5 weeks",
    level: "Beginner",
    certificate: true,
    instructor: "Ms. F Rao",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Master front-end and back-end web development.",
    price: 2999,
    duration: "8 weeks",
    level: "Beginner",
    certificate: true,
    instructor: "Ms. B Patel",
  },
  {
    id: 7,
    title: "Mobile App Development",
    description: "Develop and deploy mobile applications for Android and iOS.",
    price: 4099,
    duration: "8 weeks",
    level: "Intermediate",
    certificate: true,
    instructor: "Dr. G Kumar",
  },
  {
    id: 4,
    title: "Machine Learning",
    description:
      "Deep dive into machine learning algorithms and their applications.",
    price: 4999,
    duration: "12 weeks",
    level: "Advanced",
    certificate: true,
    instructor: "Dr. D Verma",
  },
  {
    id: 8,
    title: "Blockchain Technology",
    description:
      "Explore the principles and applications of blockchain technology.",
    price: 3899,
    duration: "6 weeks",
    level: "Advanced",
    certificate: true,
    instructor: "Dr. H Singh",
  },
  {
    id: 9,
    title: "Data Engineering",
    description:
      "Learn data pipeline creation, ETL processes, and big data technologies.",
    price: 4199,
    duration: "9 weeks",
    level: "Advanced",
    certificate: true,
    instructor: "Ms. I Sharma",
  },
];


function Courses() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/FormFill");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-bold">Explore Courses</h1>

        {/* Tabs */}
        <div className="flex flex-col gap-2 justify-center md:flex-row">
          <button className="tab-btn active">All</button>
          <button className="tab-btn">Beginner</button>
          <button className="tab-btn">Intermediate</button>
          <button className="tab-btn">Advanced</button>
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-2 text-xl font-bold">{course.title}</h2>
              <p className="mb-4 text-gray-600">{course.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">{course.duration}</span>
                <span className="text-gray-700">{course.level}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">
                  Certificate: {course.certificate ? "Yes" : "No"}
                </span>
                <span className="text-gray-700">
                  Instructor: {course.instructor}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">₹{course.price}</span>
                <button
                  onClick={handleBuyNow}
                  className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;

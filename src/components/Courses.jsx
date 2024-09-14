import React from "react";

const courses = [
  {
    id: 1,
    title: "Software Engineering Foundations",
    description: "Learn the basics of software engineering principles.",
    price: 49.99,
    duration: "4 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Software Architecture",
    description: "Explore advanced concepts in software architecture.",
    price: 79.99,
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Machine Learning for Software Engineers",
    description: "Apply machine learning techniques in software development.",
    price: 99.99,
    duration: "8 weeks",
    level: "Advanced",
  },
  // Add more courses as needed
];

function Courses() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-4">Explore Courses</h1>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-2">
          <button className="tab-btn active">All</button>
          <button className="tab-btn">Beginner</button>
          <button className="tab-btn">Intermediate</button>
          <button className="tab-btn">Advanced</button>
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">{course.duration}</span>
                <span className="text-gray-700">{course.level}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${course.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

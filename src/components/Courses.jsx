import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
];

function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Courses</h1>
        <ul className="text-lg text-gray-600 mb-6">
          {courses.map((course) => (
            <li key={course.id} className="mb-2">
              <Link
                to={`/courses/${course.id}`}
                className="text-blue-500 hover:underline"
              >
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;

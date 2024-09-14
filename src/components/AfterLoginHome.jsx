import React from "react";
import { Link, useParams } from "react-router-dom";

function UserHome() {
  const { id } = useParams(); // Assume `id` is coming from the URL params

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-10 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome to the Course Website
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Your gateway to learning new skills.
        </p>
        <div className="flex gap-2 justify-center">
          <Link to={`/courses/${id}`}>
            <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              My Courses
            </button>
          </Link>
          <Link to={`/profile/${id}`}>
            <button className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserHome;

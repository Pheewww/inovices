import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to the Course Website
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your gateway to learning new skills.
        </p>
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

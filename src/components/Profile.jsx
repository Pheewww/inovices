import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  const user = {
    name: "John Doe",
    courseEnrolled: "Course 1",
    college: "Example University",
    enrollmentDate: "July 1, 2024",
  };

  const downloadInvoice = () => {
    // Mock download
    alert(`Downloading invoice for ${user.courseEnrolled}`);
  };

  const downloadCertificate = () => {
    // Mock download
    alert(`Downloading certificate for ${user.courseEnrolled}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">Course Website</span>
          </div>
          <div>
            <Link to="/courses" className="mr-4">
              Courses
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Name</h2>
            <p>{user.name}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Course Enrolled</h2>
            <p>{user.courseEnrolled}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">College</h2>
            <p>{user.college}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Date of Enrollment</h2>
            <p>{user.enrollmentDate}</p>
          </div>
          <div>
            <button
              onClick={downloadInvoice}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Download Invoice
            </button>
            <button
              onClick={downloadCertificate}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import { useParams, Link } from "react-router-dom";

function Profile() {
  const { id } = useParams(); // Retrieve the ID from the URL
  const college = "Army Institute Of Technology, Pune"; // College data remains the same

  // Define user data based on the ID
  const users = {
    1: {
      name: "Umang Singh",
      courseEnrolled: "Web3 and DevOps",
      enrollmentDate: "January 10, 2024",
      //6 weeks
    },
    2: {
      name: "Gaurav Singh",
      courseEnrolled: "Web Development",
      enrollmentDate: "February 15, 2024",
      //8 weeks
    },
    3: {
      name: "Shantanu Chaudhary",
      courseEnrolled: "Data Science",
      enrollmentDate: "March 20, 2024",
      //10 weeks
    },
    4: {
      name: "Anurag Kumar Tiwari",
      courseEnrolled: "Machine Learning",
      enrollmentDate: "February 27, 2024",
      //12 weeks
    },
  };

  const user = users[id] || {}; // Get user data based on the ID or default to an empty object

  // Handle cases where user data might not be available
  if (!user.name) {
    return <div>Profile not found</div>;
  }

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
      <nav className="p-4 text-white bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
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
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-3xl font-bold">Profile</h1>
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
            <p>{college}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Date of Enrollment</h2>
            <p>{user.enrollmentDate}</p>
          </div>
          <div>
            <button
              onClick={downloadInvoice}
              className="py-2 px-4 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Download Invoice
            </button>
            <button
              onClick={downloadCertificate}
              className="py-2 px-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
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

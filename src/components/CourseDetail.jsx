import { Link, useParams } from "react-router-dom";

// Import certificate assets
import umangCert from "../assets/certificates/umang_cert.png";
import gauravCert1 from "../assets/certificates/gaurav_cert.png";
import gauravCert2 from "../assets/certificates/gaurav_2_cert.png"; // Example second certificate for Gaurav
import shantanuCert from "../assets/certificates/shantanu.png";
import anuragCert1 from "../assets/certificates/anurag_cert.png";
import anuragCert2 from "../assets/certificates/anurag_2_prep.png"; // Example second certificate for Anurag
import akratiCert1 from "../assets/certificates/akrati_cert.png";


function CourseDetail() {
  const { id } = useParams();
  let user = null;

  // Define user data based on the ID, including their course certificates
  if (id === "1") {
    user = {
      name: "Umang Singh",
      courses: [
        {
          name: "Web3 and DevOps",
          completionDate: "May 15, 2024",
          certificate: umangCert,
        },
      ],
    };
  } else if (id === "2") {
    user = {
      name: "Gaurav Singh",
      courses: [
        {
          name: "Web Development",
          completionDate: "June 1, 2024",
          certificate: gauravCert1,
        },
        {
          name: "Data Structures And Algorithms",
          completionDate: "July 10, 2024",
          certificate: gauravCert2,
        },
      ],
    };
  } else if (id === "3") {
    user = {
      name: "Shantanu Chaudhary",
      courses: [
        {
          name: "Data Science",
          completionDate: "May 27, 2024",
          certificate: shantanuCert,
        },
      ],
    };
  } else if (id === "4") {
    user = {
      name: "Anurag Kumar Tiwari",
      courses: [
        {
          name: "Machine Learning",
          completionDate: "June 10, 2024",
          certificate: anuragCert1,
        },
        {
          name: "Interview Prep",
          completionDate: "June 19, 2024",
          certificate: anuragCert2,
        },
      ],
    };
  } else if (id === "5") {
    user = {
      name: "Akrati Singh",
      courses: [
        {
          name: "Backend Development",
          completionDate: "April 14, 2024",
          certificate: akratiCert1,
        }
      ],
    };
  }

  // Handle the case when user data is not found
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        User not found
      </div>
    );
  }

  // Function to handle certificate download for a specific course
  const handleDownload = (certificate, courseName) => {
    const link = document.createElement("a");
    link.href = certificate;
    link.download = `${user.name}_${courseName}_certificate.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="p-4 bg-gray-800 text-white shadow-md">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          <span className="text-xl font-bold">Educate Learning</span>
          <div>
            <Link to="/" className="text-white hover:underline mr-4">
              Home
            </Link>
            <Link to="/courses" className="text-white hover:underline">
              Courses
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-12">
        <div className="text-center mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-300 via-yellow-400 to-red-300 text-transparent bg-clip-text">
              Congratulations{" "}
              <span className="text-yellow-200 bg-gradient-to-r from-red-300 via-yellow-400 to-red-400 text-transparent bg-clip-text">
                {user.name}
              </span>
              !
            </span>
          </h1>
          <p className="text-lg mb-6 text-black">
            You have successfully completed the following courses.
          </p>
        </div>
      </div>

      {/* Course Details */}
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Details
          </h2>

          {/* Loop through the courses to display them */}
          {user.courses.map((course, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800">
                {course.name}
              </h3>
              <br />
              <p className="text-lg text-gray-700">
                <strong>Status</strong> Completed
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Completion Date:</strong> {course.completionDate}
              </p>

              <button
                onClick={() => handleDownload(course.certificate, course.name)}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 hover:opacity-80"
              >
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

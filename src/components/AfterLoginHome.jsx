import { Link, useParams } from "react-router-dom";

function UserHome() {
  const { id } = useParams(); // Retrieve the ID from the URL params

  // Define user data based on the ID
  let user = null;
  if (id === "1") {
    user = {
      name: "Umang Singh",
      courses: [
        {
          name: "Web3 and DevOps",
          enrollmentDate: "January 10, 2024",
          progress: "79%",
          duration: "Ended",
          grade: "Passed",
        },
      ],
    };
  } else if (id === "2") {
    user = {
      name: "Gaurav Singh",
      courses: [
        {
          name: "Web Development",
          enrollmentDate: "February 15, 2024",
          progress: "86%",
          duration: "Ended",
          grade: "Passed",
        },
        {
          name: "Data Structures And Algorithms",
          enrollmentDate: "March 21, 2024",
          progress: "91%",
          duration: "Ended",
          grade: "Passed",
        },
      ],
    };
  } else if (id === "3") {
    user = {
      name: "Shantanu Chaudhary",
      courses: [
        {
          name: "Data Science",
          enrollmentDate: "March 20, 2024",
          progress: "90%",
          duration: "Ended",
          grade: "Passed",
        },
      ],
    };
  } else if (id === "4") {
    user = {
      name: "Anurag Kumar Tiwari",
      courses: [
        {
          name: "Machine Learning",
          enrollmentDate: "February 27, 2024",
          progress: "91%",
          duration: "Ended",
          grade: "Passed",
        },
        {
          name: "Interview Prep",
          enrollmentDate: "March 15, 2024",
          progress: "93%",
          duration: "Ended",
          grade: "Passed",
        },
      ],
    };
  }

  // Handle case when user data is not available
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        User not found
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-7xl w-full">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome Back, {user.name}!
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          We're excited to help you continue your learning journey.
        </p>

        {/* User Overview Card */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            User Courses Overview
          </h2>
          {user.courses.map((course, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {course.name}
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Enrollment Date:</strong> {course.enrollmentDate}
                </p>
                <p className="text-gray-600">
                  <strong>Progress:</strong> {course.progress}
                </p>
                <p className="text-gray-600">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-gray-600">
                  <strong>Grade:</strong> {course.grade}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <Link to={`/courses/${id}`}>
            <button className="w-full py-2 px-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
              View My Courses
            </button>
          </Link>
          <Link to={`/profile/${id}`}>
            <button className="w-full py-2 px-4 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-200">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserHome;

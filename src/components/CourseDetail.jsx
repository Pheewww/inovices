import { Link, useParams } from "react-router-dom";

// Import PDF assets (assuming they're placed in the public or assets folder)
import invoice1 from "../assets/certificates/umang_cert.png";
import invoice2 from "../assets/certificates/gaurav_cert.png";
//import invoice3 from "./assets/invoice3.pdf";
import invoice4 from "../assets/certificates/anurag_cert.png";

function CourseDetail() {
  const { id } = useParams();
  let person = null;

  // Define person data based on the ID, including the PDF link
  if (id === "1") {
    person = {
      person_name: "Umang Singh",
      person_course: "Web3 and DevOps",
      completion_date: "May 15, 2024",
      certificate_pdf: invoice1, // PDF file link
    };
  } else if (id === "2") {
    person = {
      person_name: "Gaurav Singh",
      person_course: "Web Development",
      completion_date: "Jun 1, 2024",
      certificate_pdf: invoice2, // PDF file link
    };
  } else if (id === "3") {
    person = {
      person_name: "Shantanu Chaudhary",
      person_course: "Data Science",
      completion_date: "May 27, 2024",
      certificate_pdf: invoice3, // PDF file link
    };
  } else if (id === "4") {
    person = {
      person_name: "Anurag Kumar Tiwari",
      person_course: "Machine Learning",
      completion_date: "Jun 10, 2024",
      certificate_pdf: invoice4, // PDF file link
    };
  }

  // Handle the case when the person data is not available
  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Person not found
      </div>
    );
  }

  // Function to handle certificate download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = person.certificate_pdf;
    link.download = `${person.person_name}_certificate.png`;
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
            <span className="bg-gradient-to-r from-red-300 via-yellow-400 to-black text-transparent bg-clip-text">
              Congratulations{" "}
              <span className="text-yellow-200 bg-gradient-to-r from-red-300 via-yellow-400 to-red-400 text-transparent bg-clip-text">
                {person.person_name}
              </span>
              !
            </span>
          </h1>

          <p className="text-lg mb-6">
            You have successfully completed your course on{" "}
            <span className="text-black font-semibold">
              {person.person_course}
            </span>
            .
          </p>
        </div>
      </div>

      {/* Course Details */}
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Details
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="font-medium">Completion Date:</strong>{" "}
            {person.completion_date}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            You have passed the final project evaluation with flying colors.
          </p>
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 hover:opacity-80"
          >
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

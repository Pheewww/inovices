import { useParams, Link } from "react-router-dom";

// Import the PDF files for invoices and certificates
import invoice1 from "../assets/Umang_invoice.pdf";
import invoice2 from "../assets/Gaurav_invoice.pdf";
//import invoice3 from "./assets/invoice3.pdf";
import invoice4 from "../assets/Anurag_invoice.pdf";

import certificate1 from "../assets/certificates/umang_cert.png";
import certificate2 from "../assets/certificates/gaurav_cert.png";
//import certificate3 from "../assets/certificates/umang_cert.png";
import certificate4 from "../assets/certificates/anurag_cert.png";

function Profile() {
  const { id } = useParams();
  const college = "Army Institute Of Technology, Pune";

  const users = {
    1: {
      name: "Umang Singh",
      courseEnrolled: "Web3 and DevOps",
      enrollmentDate: "January 10, 2024",
      invoice: invoice1, // Link to invoice PDF
      certificate: certificate1, // Link to certificate PDF
    },
    2: {
      name: "Gaurav Singh",
      courseEnrolled: "Web Development",
      enrollmentDate: "February 15, 2024",
      invoice: invoice2,
      certificate: certificate2,
    },
    3: {
      name: "Shantanu Chaudhary",
      courseEnrolled: "Data Science",
      enrollmentDate: "March 20, 2024",
      // invoice: invoice3,
      // certificate: certificate3,
    },
    4: {
      name: "Anurag Kumar Tiwari",
      courseEnrolled: "Machine Learning",
      enrollmentDate: "February 27, 2024",
      invoice: invoice4,
      certificate: certificate4,
    },
  };

  const user = users[id] || {};

  if (!user.name) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Profile not found
      </div>
    );
  }

  // Function to download the invoice
  const downloadInvoice = () => {
    const link = document.createElement("a");
    link.href = user.invoice;
    link.download = `${user.name}_invoice.pdf`;
    link.click();
  };

  // Function to download the certificate
  const downloadCertificate = () => {
    const link = document.createElement("a");
    link.href = user.certificate;
    link.download = `${user.name}_certificate.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-blue-300 hover:text-blue-500">
            <span className="text-xl font-bold">Educate Learning</span>
          </Link>
          <Link to="/courses" className="text-blue-300 hover:text-blue-500">
            Courses
          </Link>
        </div>
      </nav>
      <div className="py-6 px-4 mx-auto max-w-4xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Name</h2>
              <p className="text-gray-900">{user.name}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Course Enrolled
              </h2>
              <p className="text-gray-900">{user.courseEnrolled}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">College</h2>
              <p className="text-gray-900">{college}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Date of Enrollment
              </h2>
              <p className="text-gray-900">{user.enrollmentDate}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-60">
            <button
              onClick={downloadInvoice}
              className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
            >
              Download Invoice
            </button>
            <button
              onClick={downloadCertificate}
              className="py-2 px-4 font-bold text-white bg-green-500 rounded hover:bg-green-600 transition duration-200"
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

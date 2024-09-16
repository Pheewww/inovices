import { useParams, Link } from "react-router-dom";

// Import the PDF files for invoices and certificates
import invoice1 from "../assets/Umang_invoice.pdf";
import invoice2 from "../assets/Gaurav_invoice.pdf";
import invoice3 from "../assets/shantanu.pdf";
import invoice4 from "../assets/Anurag_invoice.pdf";
import invoice5 from "../assets/akrati_invoice.pdf";


import umangCert from "../assets/certificates/umang_cert.png";
import gauravCert1 from "../assets/certificates/gaurav_cert.png";
import gauravCert2 from "../assets/certificates/gaurav_2_cert.png"; // Example second certificate for Gaurav

import anuragCert1 from "../assets/certificates/anurag_cert.png";
import anuragCert2 from "../assets/certificates/anurag_2_prep.png"; // Example second certificate for Anurag

import akratiCert1 from "../assets/certificates/akrati_cert.png";
import shantanuCert from "../assets/certificates/shantanu.png";



function Profile() {
  const { id } = useParams();
  const college = "Army Institute Of Technology, Pune";

  // Updated users array with email
  const users = [
    {
      id: "1",
      email: "umssh777@gmail.com",
      phone: "6203086401",
      name: "Umang Singh",
      courses: [
        {
          name: "Web3 and DevOps",
          enrollmentDate: "January 10, 2024",
          completionDate: "May 15, 2024",
          invoice: invoice1,
          certificate: umangCert,
        },
      ],
    },
    {
      id: "2",
      email: "gaurav123gau123@gmail.com",
      name: "Gaurav Singh",
      phone: "8804891911",
      courses: [
        {
          name: "Web Development",
          enrollmentDate: "February 15, 2024",
          completionDate: "June 1, 2024",
          invoice: invoice2,
          certificate: gauravCert1,
        },
        {
          name: "Data Structures And Algorithms",
          enrollmentDate: "March 21, 2024",
          completionDate: "June 11, 2024",
          invoice: gauravCert2,
        },
      ],
    },
    {
      id: "3",
      email: "shantanu@example.com",
      name: "Shantanu Chaudhary",
      courses: [
        {
          name: "Data Science",
          enrollmentDate: "March 20, 2024",
          completionDate: "May 27, 2024",
          invoice: invoice3,
          certificate: shantanuCert,
        },
      ],
    },
    {
      id: "4",
      email: "besotted99100@gmail.com",
      name: "Anurag Kumar Tiwari",
      phone: "8303110219",
      courses: [
        {
          name: "Machine Learning",
          enrollmentDate: "February 27, 2024",
          completionDate: "June 10, 2024",
          invoice: invoice4,
          certificate: anuragCert1,
        },
        {
          name: "Interview Prep",
          enrollmentDate: "March 15, 2024",
          completionDate: "June 19, 2024",
          invoice: invoice4,
          certificate: anuragCert2,
        },
      ],
    },
    {
      id: "5",
      email: "akratisingh.2692@gmail.com",
      name: "Akrati Singh",
      phone: "7457924466",
      courses: [
        {
          name: "Backend Development",
          enrollmentDate: "January 13, 2024",
          completionDate: "April 14, 2024",
          invoice: invoice5,
          certificate: akratiCert1,
        }
      ],
    },
  ];

  // Find user based on ID
  const user = users.find((user) => user.id === id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Profile not found
      </div>
    );
  }

  // Function to download the invoice for a specific course
  const downloadInvoice = (invoice, courseName) => {
    const link = document.createElement("a");
    link.href = invoice;
    link.download = `${user.name}_${courseName}_invoice.pdf`;
    link.click();
  };

  // Function to download the certificate for a specific course
  const downloadCertificate = (certificate, courseName) => {
    const link = document.createElement("a");
    link.href = certificate;
    link.download = `${user.name}_${courseName}_certificate.png`;
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
      <div className="py-6 px-4 mx-auto max-w-5xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Profile: {user.name}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Email: </strong> {user.email}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Phone: </strong> {user.phone}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>College: </strong> {college}
          </p>

          {/* Loop through the courses array to display each course */}
          {user.courses.map((course, index) => (
            <div key={index} className="mb-8">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {course.name}
                </h2>
                <p className="text-lg text-gray-700 mb-1">
                  <strong>Date of Enrollment:</strong> {course.enrollmentDate}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Completion Date:</strong> {course.completionDate}
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  {course.invoice && (
                    <button
                      onClick={() =>
                        downloadInvoice(course.invoice, course.name)
                      }
                      className="py-2 px-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                    >
                      Download Invoice
                    </button>
                  )}
                  {course.certificate && (
                    <button
                      onClick={() =>
                        downloadCertificate(course.certificate, course.name)
                      }
                      className="py-2 px-4 font-bold text-white bg-green-500 rounded hover:bg-green-600 transition duration-200"
                    >
                      Download Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;

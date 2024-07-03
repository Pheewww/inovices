import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();

  // Replace with actual course details fetch logic
  const course = {
    id: 1,
    name: "Course 1",
    videos: [
      {
        id: 1,
        title: "Introduction",
        link: "https://www.example.com/intro-video",
      },
      {
        id: 2,
        title: "Module 1",
        link: "https://www.example.com/module1-video",
      },
      {
        id: 3,
        title: "Module 2",
        link: "https://www.example.com/module2-video",
      },
    ],
  };

  const downloadInvoice = () => {
    // Mock download
    alert(`Downloading invoice for course ${course.name}`);
    // Replace with actual download logic
  };

  const downloadCertificate = () => {
    // Mock download
    alert(`Downloading certificate for course ${course.name}`);
    // Replace with actual download logic
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">Course Website</span>
          </div>
          <div>
            <Link to="/profile" className="mr-4">
              Profile
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            Course Details: {course.name}
          </h1>
          <h2 className="text-xl font-bold mb-2">Videos</h2>
          <ul className="mb-4">
            {course.videos.map((video) => (
              <li key={video.id}>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

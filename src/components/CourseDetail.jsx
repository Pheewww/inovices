import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();
  let person = null;

  // Use strict equality check and handle person data as an object
  if (id === "1") {
    person = {
      person_name: "Umang Singh",
      person_course: "Web3 and DevOps",
    };
  } else if (id === "2") {
    person = {
      person_name: "Gaurav Singh",
      person_course: "Web Development",
    };
  } else if (id === "3") {
    person = {
      person_name: "Shantanu Chaudhary",
      person_course: "Data Science",
    };
  } else if (id === "4") {
    person = {
      person_name: "Anurag Kumar Tiwari",
      person_course: "Machine Learning",
    };
  }

  // Handle the case when the person data is not available
  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 text-white bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
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
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-3xl font-bold">
            Congratulations {person.person_name}, You have successfully
            completed your course on {person.person_course}!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import Profile from "./components/Profile";
import UserHome from "./components/AfterLoginHome";
import FormFill from "./components/FormFill";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/FormFill" element={<FormFill />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Protected Routes */}
        <Route path="/userhome/:id" element={<UserHome />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

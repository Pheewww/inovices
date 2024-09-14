import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import Profile from "./components/Profile";
import UserHome from "./components/AfterLoginHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/userhome/:id" element={<UserHome />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

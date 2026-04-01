// App.tsx - Root component that sets up routing for the entire application

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Navbar from "./components/Navbar";
import CourseDetails from "./pages/CourseDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>

      {/* Footer shown on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

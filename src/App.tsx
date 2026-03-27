import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

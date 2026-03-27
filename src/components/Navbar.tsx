import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> | <Link to="/courses">Courses</Link>
    </nav>
  );
}

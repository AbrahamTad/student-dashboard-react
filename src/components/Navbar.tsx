import { Link } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0f172a;
  padding: 16px;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </Nav>
  );
}

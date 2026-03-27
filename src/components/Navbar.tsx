import { Link } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 15px;
  background: #1e293b;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 15px;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </Nav>
  );
}

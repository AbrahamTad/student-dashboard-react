import { Link } from "react-router";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0f172a;
  padding: 16px 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #94a3b8;
  margin-right: 4px;
  padding: 6px 14px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    background: #1e293b;
  }
`;

const Logo = styled.span`
  color: #60a5fa;
  font-weight: 700;
  margin-right: auto;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>🎓 StudentHub</Logo>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/assignments">Assignments</NavLink>
    </Nav>
  );
}

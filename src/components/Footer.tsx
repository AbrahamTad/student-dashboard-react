import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 40px;
  padding: 16px;
  background: #0f172a;
  color: #94a3b8;
  text-align: center;
  font-size: 0.85rem;
`;

export default function Footer() {
  return <FooterWrapper>Student Dashboard © 2026</FooterWrapper>;
}

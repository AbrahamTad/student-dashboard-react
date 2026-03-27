import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export default function Layout({ children }: any) {
  return <Container>{children}</Container>;
}

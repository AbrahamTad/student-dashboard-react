import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h3`
  margin: 0;
`;

const Email = styled.p`
  color: gray;
`;

export default function CourseCard({ course }: any) {
  return (
    <Card>
      <Title>{course.name}</Title>
      <Email>{course.email}</Email>
    </Card>
  );
}

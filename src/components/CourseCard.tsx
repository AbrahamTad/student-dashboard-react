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

const Info = styled.p`
  color: #555;
`;

const courseTitles = [
  "React Fundamentals",
  "TypeScript Basics",
  "Advanced JavaScript",
  "NodeJS Backend",
  "Frontend Architecture",
  "API Development",
  "UI Design",
  "Testing React",
  "Performance Optimization",
  "Web Security",
];

export default function CourseCard({ course }: any) {
  return (
    <Card>
      <Title>{courseTitles[course.id - 1]}</Title>
      <Info>Instructor: {course.name}</Info>
      <Info>Email: {course.email}</Info>
    </Card>
  );
}

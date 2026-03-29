// Displays a single course as a styled card
import styled from "styled-components";

// Card wrapper with dynamic background color passed as a prop
const CourseCardWrapper = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border: 2px solid #7ac27a;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;

  /* Lift effect on hover */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 8px;
`;

const Info = styled.p`
  margin: 0;
  color: #444;
`;

const Credits = styled.p`
  margin: 0;
  font-weight: bold;
  color: #0f172a;
`;

// Each course gets a different background color based on its ID
const colors = [
  "#dff5e1",
  "#e1f0ff",
  "#fff4d6",
  "#fbe4ff",
  "#ffe4e4",
  "#e4fff7",
  "#f0e4ff",
  "#fff0f0",
  "#e8f5e9",
  "#e3f2fd",
];

// Course title names mapped by index (since API doesn't have real course names)
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

// Props: course - a single course object from the JSONPlaceholder API
export default function CourseCard({ course }: any) {
  // Use modulo to safely wrap around if there are more courses than titles/colors
  const title = courseTitles[(course.id - 1) % courseTitles.length];
  const color = colors[(course.id - 1) % colors.length];

  return (
    <CourseCardWrapper color={color}>
      <Title>FED25G - {title}</Title>
      <Credits>{10 + course.id * 5} hp</Credits>
      {/* course.name comes from the JSONPlaceholder users API */}
      <Info>Teacher: {course.name}</Info>
    </CourseCardWrapper>
  );
}

// CourseCard.tsx
// Reusable card component
// Clickable → navigates to CourseDetails

import { Link } from "react-router";
import styled from "styled-components";

// card wrapper
const CourseCardWrapper = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  border: 2px solid #7ac27a;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;

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

// background colors array (cycle through 10 colors based on course id) for visual variety
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

export default function CourseCard({ course }: any) {
  // select color based on course id
  const color = colors[(course.id - 1) % colors.length];

  return (
    // clickable navigation
    <Link to={`/courses/${course.id}`} style={{ textDecoration: "none" }}>
      <CourseCardWrapper color={color}>
        <Title>FED25G - {course.title}</Title>
        <Credits>{course.credits}</Credits>
        <Info>Teacher: {course.teacher}</Info>
      </CourseCardWrapper>
    </Link>
  );
}

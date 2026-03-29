// Courses.tsx - Fetches course data from external API and displays it in a searchable grid
// This is a STATEFUL component - uses useState and useEffect
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar"; // child component - receives handleSearch as prop
import styled from "styled-components";

// Grid layout that auto-fills columns based on available screen width
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

// Individual course card with green theme and hover lift effect
const CourseCard = styled.div`
  background: #dff5e1;
  border: 2px solid #7ac27a;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;

  /* Lift card up slightly when hovered */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const Teacher = styled.p`
  margin: 0;
  color: #444;
`;

const Credits = styled.p`
  margin: 0;
  font-weight: bold;
  color: #0f172a;
`;

export default function Courses() {
  // courses = full list from API, never modified after fetch
  const [courses, setCourses] = useState<any[]>([]);

  // filtered = the list actually shown, changes when user searches
  const [filtered, setFiltered] = useState<any[]>([]);

  // Fetch users from JSONPlaceholder API on component mount
  // We map the user data to course objects since there's no real course API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Course titles mapped by index to each API user
        const courseTitles = [
          "JavaScript - Advanced",
          "React Fundamentals",
          "TypeScript Basics",
          "NodeJS Backend",
          "Frontend Architecture",
          "API Development",
          "UI Design",
          "Testing React",
          "Performance Optimization",
          "Web Security",
        ];

        // Transform raw API data into course objects
        const mappedCourses = data.map((user: any, index: number) => ({
          id: user.id,
          title: courseTitles[index],
          teacher: user.name, // user.name used as teacher name
          credits: `${10 + index * 5} hp`, // credits increase per course
        }));

        // Set both states so search starts with the full list
        setCourses(mappedCourses);
        setFiltered(mappedCourses);
      });
  }, []); // empty array = only runs once when component mounts

  // Called by SearchBar (child) every time the user types
  // Filters courses by title OR teacher name
  const handleSearch = (e: any) => {
    const text = e.target.value.toLowerCase();

    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(text) ||
        course.teacher.toLowerCase().includes(text),
    );

    // Update filtered state, which re-renders the grid
    setFiltered(filteredCourses);
  };

  return (
    <Layout>
      <h1>Kurser</h1>

      {/* SearchBar is a child component - handleSearch is passed down as a prop */}
      <SearchBar onChange={handleSearch} />

      {/* Render only the filtered courses */}
      <Grid>
        {filtered.map((course) => (
          // key prop helps React efficiently update the list
          <CourseCard key={course.id}>
            <Title>FED25G - {course.title}</Title>
            <Credits>{course.credits}</Credits>
            <Teacher>Teacher: {course.teacher}</Teacher>
          </CourseCard>
        ))}
      </Grid>
    </Layout>
  );
}

// Courses.tsx
// Fetches course data from API
// Displays courses in a grid
// Each course is clickable → navigates to CourseDetails

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import CourseCard from "../components/CourseCard"; // reusable card component
import styled from "styled-components";

// Responsive grid layout
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

export default function Courses() {
  // full course list from API
  const [courses, setCourses] = useState<any[]>([]);

  // filtered courses (used for search)
  const [filtered, setFiltered] = useState<any[]>([]);

  // Fetch users from JSONPlaceholder
  // convert users → courses
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // titles mapped to each user
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

        // map API users → course objects
        const mappedCourses = data.map((user: any, index: number) => ({
          id: user.id,
          title: courseTitles[index],
          teacher: user.name,
          credits: `${10 + index * 5} hp`,
        }));

        setCourses(mappedCourses);
        setFiltered(mappedCourses);
      });
  }, []);

  // search handler
  const handleSearch = (e: any) => {
    const text = e.target.value.toLowerCase();

    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(text) ||
        course.teacher.toLowerCase().includes(text),
    );

    setFiltered(filteredCourses);
  };

  return (
    <Layout>
      <h1>Kurser</h1>

      {/* Search input */}
      <SearchBar onChange={handleSearch} />

      {/* Courses Grid */}
      <Grid>
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Grid>
    </Layout>
  );
}

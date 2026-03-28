import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

const CourseCard = styled.div`
  background: #dff5e1;
  border: 2px solid #7ac27a;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
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
  const [courses, setCourses] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
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

  const handleSearch = (e: any) => {
    const text = e.target.value.toLowerCase();

    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(text) ||
        course.teacher.toLowerCase().includes(text)
    );

    setFiltered(filteredCourses);
  };

  return (
    <Layout>
      <h1>Kurser</h1>

      <Search
        placeholder="Sök kurser..."
        onChange={handleSearch}
      />

      <Grid>
        {filtered.map((course) => (
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
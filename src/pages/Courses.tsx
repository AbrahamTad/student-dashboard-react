import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

export default function Courses() {
  const [courseList, setCourseList] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setCourseList(data);
        setAllCourses(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (text: string) => {
    const filtered = allCourses.filter((course: any) =>
      course.name.toLowerCase().includes(text.toLowerCase()),
    );

    setCourseList(filtered);
  };
  if (loading) return <Layout>Loading courses...</Layout>;

  return (
    <Layout>
      <h1> Student Courses</h1>
      <SearchBar onSearch={handleSearch} />

      {courseList.map((course: any) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Layout>
  );
}

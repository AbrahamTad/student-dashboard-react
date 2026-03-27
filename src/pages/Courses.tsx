import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";

export default function Courses() {
  const [courseList, setCourseList] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setCourseList(data);
        setAllCourses(data);
      });
  }, []);

  const handleSearch = (text: string) => {
    const filtered = allCourses.filter((course: any) =>
      course.name.toLowerCase().includes(text.toLowerCase()),
    );

    setCourseList(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {courseList.map((course: any) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

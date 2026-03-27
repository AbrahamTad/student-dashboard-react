import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";

export default function Courses() {
  const [courseList, setCourseList] = useState(courses);

  const handleSearch = (text: string) => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(text.toLowerCase()),
    );

    setCourseList(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {courseList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

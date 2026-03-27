import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courseList] = useState(courses);

  return (
    <div>
      {courseList.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

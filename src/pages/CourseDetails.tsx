import { useParams } from "react-router";
import { courses } from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === Number(id));

  return (
    <div>
      <h1>{course?.title}</h1>
      <p>Teacher: {course?.teacher}</p>
    </div>
  );
}

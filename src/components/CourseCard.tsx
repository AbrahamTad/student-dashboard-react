import { Link } from "react-router";

export default function CourseCard({ course }: any) {
  return (
    <div>
      <Link to={`/courses/${course.id}`}>
        <h3>{course.title}</h3>
      </Link>

      <p>{course.teacher}</p>
    </div>
  );
}

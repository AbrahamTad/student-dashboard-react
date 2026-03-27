import { Link } from "react-router";

export default function CourseCard({ course }: any) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <Link to={`/courses/${course.id}`}>
        <h3>{course.title}</h3>
      </Link>

      <p>{course.teacher}</p>
    </div>
  );
}
